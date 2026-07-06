import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import useActiveSection from "../../hooks/useActiveSection";
import { useThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const { isDark, toggleTheme } = useThemeContext();

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certificates",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-md border-b z-50 transition-colors duration-300 ${
        isDark
          ? "bg-[#05070A]/90 border-[#2A2A2A]"
          : "bg-[#F5F5F0]/95 border-[#D5D5D0]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-400">
          {"<Krishna.dev />"}
        </h1>

        {/* Desktop nav links */}
        <ul
          className={`hidden md:flex gap-8 transition-colors duration-300 ${
            isDark ? "text-white" : "text-[#1a1a1a]"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`transition font-medium ${
                    isActive
                      ? "text-yellow-400 font-semibold underline underline-offset-4 decoration-yellow-400"
                      : isDark
                      ? "hover:text-yellow-400"
                      : "hover:text-yellow-600"
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side: theme toggle + hamburger */}
        <div className="flex items-center gap-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
              isDark
                ? "bg-[#1a1c22] border-[#3a3a3a] text-yellow-400 hover:bg-yellow-400 hover:text-[#111] hover:border-yellow-400"
                : "bg-white border-[#D0D0C8] text-yellow-600 hover:bg-yellow-400 hover:text-[#111] hover:border-yellow-400"
            }`}
          >
            {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden text-xl transition-colors ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden border-t transition-colors ${
            isDark ? "bg-[#0d0f15] border-[#2A2A2A]" : "bg-[#EDEDEA] border-[#D5D5D0]"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`block px-6 py-4 transition font-medium ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : isDark
                    ? "text-white hover:text-yellow-400"
                    : "text-[#1a1a1a] hover:text-yellow-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;