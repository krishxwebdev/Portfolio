import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import portfolio from "../../data/portfolio";
import { sendContactEmail } from "../../services/emailService";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendContactEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: portfolio.social.email.replace("mailto:", ""),
      href: portfolio.social.email,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: portfolio.social.github.replace("https://", ""),
      href: portfolio.social.github,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: portfolio.social.linkedin.replace("https://", ""),
      href: portfolio.social.linkedin,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: portfolio.location,
      href: null,
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span>CONTACT</span>
        <h2>Get In Touch</h2>
        <p>
          Have a project in mind or want to discuss an opportunity? I'd love to
          hear from you. Send me a message and I'll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT — intro + contact details */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Let's work together</h3>
          <p className="contact-intro">
            I'm currently open to internship opportunities, freelance projects,
            and full-time roles. Whether you have a question or just want to say
            hello — my inbox is always open.
          </p>

          <ul className="contact-details">
            {contactDetails.map((item, i) => (
              <li key={i} className="contact-detail-item">
                <span className="detail-icon">{item.icon}</span>
                <div className="detail-text">
                  <span className="detail-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="detail-value"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="detail-value">{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — contact form */}
        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-feedback success">
                ✅ Message sent! I'll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="form-feedback error">
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
