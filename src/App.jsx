import Navbar from "./components/Navbar/Navbar";
import Home from "./components/hero/Hero";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
            <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
