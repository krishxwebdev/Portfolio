import "./About.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeLeft } from "../../utils/animations";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import useCountUp from "../../hooks/useCountUp";

/* ── Animated stat card ─────────────────────────────────────── */
function StatCard({ target, suffix, label, isVisible, delay = 0 }) {
  const count = useCountUp(target, isVisible, 1400 + delay);
  return (
    <div className="stat-card">
      <h3>
        {count}
        {suffix}
      </h3>
      <span>{label}</span>
    </div>
  );
}

/* ── About section ───────────────────────────────────────────── */
function About() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  // Trigger counters when the stats row enters the viewport
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect(); // fire only once
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Building responsive and modern user interfaces using React, JavaScript, HTML and CSS.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Creating REST APIs with Node.js and Express while following clean architecture.",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      desc: "Designing scalable MySQL databases with efficient queries and relationships.",
    },
    {
      icon: <FaRocket />,
      title: "Continuous Learning",
      desc: "Currently learning Full Stack Development, Git, deployment and modern web technologies.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="section-tag">ABOUT ME</span>

          <h2>
            Passionate About Building
            Modern Web Applications
          </h2>

          <p>
            I'm Krishna, an aspiring Full Stack Developer currently pursuing
            my Bachelor's degree while building practical web applications
            using modern technologies.
          </p>

          <p>
            My focus is on creating fast, responsive and scalable websites
            while continuously improving my frontend, backend and database
            development skills.
          </p>

          {/* Stats — counters animate on scroll */}
          <div className="stats" ref={statsRef}>
            <StatCard
              target={1}
              suffix="+"
              label="Internship"
              isVisible={statsVisible}
              delay={0}
            />
            <StatCard
              target={10}
              suffix="+"
              label="Projects"
              isVisible={statsVisible}
              delay={100}
            />
            <StatCard
              target={15}
              suffix="+"
              label="Technologies"
              isVisible={statsVisible}
              delay={200}
            />
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <div className="focus-card" key={index}>
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;