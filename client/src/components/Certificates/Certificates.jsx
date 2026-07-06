import "./Certificates.css";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import portfolio from "../../data/portfolio";

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="certificates-header">
        <span>CERTIFICATES</span>
        <h2>Licenses &amp; Certifications</h2>
        <p>
          Continuous learning through structured online courses has helped me
          sharpen both my frontend and backend development skills alongside my
          academic and professional work.
        </p>
      </div>

      <div className="certificates-grid">
        {portfolio.certificates.map((cert, index) => (
          <motion.div
            className="cert-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="cert-icon">
              <FaCertificate />
            </div>

            <div className="cert-info">
              <h3>{cert.title}</h3>
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
                aria-label={`View certificate: ${cert.title}`}
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
