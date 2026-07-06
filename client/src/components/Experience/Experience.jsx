import "./Experience.css";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMysql, SiExpress } from "react-icons/si";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-header">
        <span>EXPERIENCE</span>

        <h2>Professional Journey</h2>

        <p>
          Gaining hands-on industry experience by building modern web
          applications and contributing to real-world projects for different
          organizations.
        </p>
      </div>

      <motion.div
        className="timeline"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="timeline-line"></div>

        <div className="timeline-card">
          <div className="timeline-dot">
            <FaBriefcase />
          </div>

          <div className="card-content">
            <span className="date">
              June 2026 — Present
            </span>

            <h3>Full Stack Web Developer Intern</h3>

            <h4>
              White and Box Tech Products & Services • Bengaluru, India
            </h4>

            <p>
              Currently working as a Full Stack Web Developer Intern,
              contributing to real-world web applications for different
              organizations. During my internship, I have been building modern
              frontend interfaces, integrating backend APIs, and strengthening
              my skills in full-stack web development using industry-standard
              technologies.
            </p>

            <div className="tech-stack">
              <span>
                <FaReact /> React
              </span>

              <span>
                <FaNodeJs /> Node.js
              </span>

              <span>
                <SiExpress /> Express.js
              </span>

              <span>
                <SiMysql /> MySQL
              </span>

              <span>
                <FaGitAlt /> Git
              </span>
            </div>

            <h5>Projects Worked On</h5>

            <div className="project-tags">
              <span>EasyQR</span>
              <span>TaskFlow</span>
              <span>Authentication System</span>
              <span>Login Pages</span>
              <span>Organization Websites</span>
              <span>Responsive Dashboards</span>
            </div>

            <ul>
              <li>
                Worked on multiple real-world web applications for different
                organizations.
              </li>

              <li>
                Built responsive and modern user interfaces using React.
              </li>

              <li>
                Developed backend functionality using Node.js and Express.js
                with MySQL database integration.
              </li>

              <li>
                Collaborated with the development team using Git & GitHub while
                following professional development workflows.
              </li>

              <li>
                Improved application performance, responsiveness, and user
                experience across multiple projects.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;