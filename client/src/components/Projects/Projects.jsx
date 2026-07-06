import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolio from "../../data/portfolio";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span>MY PROJECTS</span>
        <h2>Things I've Built</h2>
        <p>
          A collection of full-stack and frontend projects I've developed during
          my internship and personal learning — each one solving a real-world
          problem with clean code and modern technologies.
        </p>
      </div>

      <div className="projects-grid">
        {portfolio.projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-card-top">
              <h3>{project.title}</h3>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    title="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-tech-tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
