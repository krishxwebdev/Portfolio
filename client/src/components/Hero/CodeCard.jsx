import "./Hero.css";

function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>

      <pre className="code-content">
{`const developer = {

  name: "Krishna",

  role: "Full Stack Developer",

  frontend: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS"
  ],

  backend: [
    "Node.js",
    "Express.js",
    "MySQL"
  ],

  currentlyLearning: [
    "Docker",
    "System Design"
  ]

}`}
      </pre>
    </div>
  );
}

export default CodeCard;