import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">

        <a href="#home" className="logo">
          <span className="logo-icon">A</span>
          <span className="logo-text">Anchal.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="contact-btn">
          Let's Talk
        </a>

      </div>
    </nav>
  );
}

export default Navbar;