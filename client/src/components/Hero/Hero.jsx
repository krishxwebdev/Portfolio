import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolio from "../../data/portfolio";
import CodeCard from "./CodeCard";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-left">

          <p className="location">
            📍 {portfolio.location}
          </p>

          <h3>Hello, I'm</h3>

          <h1>{portfolio.name}</h1>

          <h2>
            <Typewriter
              words={portfolio.roles}
              loop={0}
              cursor
              cursorStyle="|"
            />
          </h2>

          <p className="description">
            {portfolio.description}
          </p>

          <div className="hero-buttons">

            {/* TODO: drop your resume PDF into src/assets/resume/ and update the filename below */}
            <a
              href="/resume/Krishna_Resume.pdf"
              download
              className="gold-btn"
            >
              Download Resume
            </a>

            <a href="#projects" className="outline-btn">
              View Projects
            </a>

            <a href="#contact" className="outline-btn">
              Contact
            </a>

          </div>

          <div className="socials">

            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href={portfolio.social.email}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="hero-right">

          <CodeCard />

        </div>

      </div>
    </section>
  );
}

export default Hero;