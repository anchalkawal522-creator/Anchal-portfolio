import "./hero.css";
import { FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">Available For Work</span>

        <h1>
          Hi, I'm <span>Anchal Thakur</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p>
          I build modern, responsive and user-friendly web applications with
          clean code and beautiful user interfaces using React.js and modern web
          technologies.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/anchalkawal522-creator?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            View Projects <FaArrowRight />
          </a>

          <a
            href="/public/anchal-frontend-inter.pdf"
            download
            className="outline-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/anchalkawal522-creator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anchal-thakur-6ab034384/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
