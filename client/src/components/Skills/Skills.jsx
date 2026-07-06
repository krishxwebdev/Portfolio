import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Database", icon: <FaDatabase /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <span>MY SKILLS</span>
        <h2>Technologies I Work With</h2>
      </div>

      {skillGroups.map((group, index) => (

        <motion.div
          className="skill-group"
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h3>{group.title}</h3>

          <div className="skill-grid">

            {group.skills.map((skill, i) => (

              <div className="skill-card" key={i}>

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h4>{skill.name}</h4>

              </div>

            ))}

          </div>

        </motion.div>

      ))}

    </section>
  );
}

export default Skills;