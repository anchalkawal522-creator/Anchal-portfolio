import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="Footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-about">
          <h2>Anchal Thakur</h2>

          <p>
            Frontend Developer passionate about building modern,
            responsive, and user-friendly web applications with clean
            design and efficient code.
          </p>

          <div className="footer-social">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Scroll Top */}
        <div className="footer-extra">
          <h3>Thank You</h3>

          <p>
            Thank you for visiting my portfolio. I appreciate your time and
            hope you enjoyed exploring my work.
          </p>

          <button onClick={scrollToTop} className="top-btn">
            <FaArrowUp />
            Back to Top
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Anchal Katwal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}