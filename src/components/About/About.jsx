import React from "react";
import "./About.css";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-header">
              <h1>About Me</h1>
            </div>
            <p>
              I am a passionate Frontend Developer who loves creating simple,
              clean, and user-friendly websites. I have good knowledge of HTML,
              CSS, JavaScript, and React. I enjoy turning ideas into beautiful
              web applications and continuously learning new technologies to
              improve my skills. My goal is to create responsive and attractive
              websites that provide an excellent user experience.
            </p>

            <a
              href="/public/anchal-frontend-inter.pdf"
              download
              className="about-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="about-cards">
            <div className="card">
              <div className="icon">
                <FaWandMagicSparkles />
              </div>
              <h4>10+</h4>
              <p>Projects Completed</p>
            </div>

            <div className="card">
              <div className="icon">
                <FaGraduationCap />
              </div>
              <h4>React JS</h4>
              <p>Frontend Development</p>
            </div>

            <div className="card">
              <div className="icon">
                <MdCastForEducation />
              </div>
              <h4>100%</h4>
              <p>Learning Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
