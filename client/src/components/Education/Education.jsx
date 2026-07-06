import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import portfolio from "../../data/portfolio";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-header">
        <span>EDUCATION</span>
        <h2>Academic Background</h2>
        <p>
          My formal education has given me a strong foundation in computer
          science and engineering principles that complement my hands-on
          development experience.
        </p>
      </div>

      <div className="edu-timeline">
        <div className="edu-timeline-line" />

        {portfolio.education.map((item, index) => (
          <motion.div
            className="edu-timeline-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <div className="edu-dot">
              <FaGraduationCap />
            </div>

            <div className="edu-card-content">
              <span className="edu-duration">{item.duration}</span>
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
