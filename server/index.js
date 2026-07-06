import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ────────────────────────────────────────────────────────────────

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:3000",
].filter(Boolean).map(o => o.replace(/\/$/, "")); // strip trailing slashes

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. curl, Postman)
    if (!origin) return callback(null, true);
    const clean = origin.replace(/\/$/, "");
    if (allowedOrigins.includes(clean) || clean.endsWith(".vercel.app")) {
      return callback(null, true);
    }
    callback(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
}));
app.use(express.json());

// ─── MySQL Connection Pool ─────────────────────────────────────────────────────

const db = mysql.createPool({
  host:     process.env.DB_HOST     || "localhost",
  user:     process.env.DB_USER     || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME     || "portfolio_db",
  port:     Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
});

// Test the DB connection on startup
async function testConnection() {
  try {
    const conn = await db.getConnection();
    console.log("✅ MySQL connected successfully.");
    conn.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
    console.error("   Make sure XAMPP MySQL is running and the database exists.");
  }
}
testConnection();

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running." });
});

// POST /api/contact — save contact form message to DB
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields (name, email, message) are required." });
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name.trim(), email.trim(), message.trim()]
    );

    console.log(`📩 New message from ${name} <${email}> — row id: ${result.insertId}`);

    res.status(201).json({
      success: true,
      message: "Message saved successfully.",
      id: result.insertId,
    });
  } catch (err) {
    console.error("DB insert error:", err.message);
    res.status(500).json({ error: "Failed to save message. Please try again." });
  }
});

// GET /api/messages — view all messages (optional, remove before going public)
app.get("/api/messages", async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, name, email, message, created_at FROM messages ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch messages." });
  }
});

// ─── Start Server ──────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`\n🚀 API server running at http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
  console.log(`   View messages: http://localhost:${PORT}/api/messages\n`);
});
