import "./project.css";

const projects = [
  {
    title: "Fox University",
    image: "/ss.p.png",
    desc: "Fox is an academic website template for schools, colleges, universities, online courses, and other educational projects. It is a full-blown web design solution with a modern and trendy look that impresses all your potential students.",
    github: "https://github.com/anchalkawal522-creator?tab=repositories",
  },
  {
    title: "Capital Shop",
    image: "/3pro.png",
    desc: "Fox is an academic website template for schools, colleges, universities, online courses, and other educational projects. It is a full-blown web design solution with a modern and trendy look that impresses all your potential students.",
    github: "https://github.com/anchalkawal522-creator?tab=repositories",
  },
  {
    title: "Dento",
    image: "/4pro.png",
    desc: "Fox is an academic website template for schools, colleges, universities, online courses, and other educational projects. It is a full-blown web design solution with a modern and trendy look that impresses all your potential students.",
    github: "https://github.com/anchalkawal522-creator?tab=repositories",
  },
  {
    title: "Buildream",
    image: "/5pro.png",
    desc: "Fox is an academic website template for schools, colleges, universities, online courses, and other educational projects. It is a full-blown web design solution with a modern and trendy look that impresses all your potential students.",
    github: "https://github.com/anchalkawal522-creator?tab=repositories",
  },
  {
    title: "Astro Dashboard",
    image: "/astrodash.png",
    desc: "Built a responsive Admin Dashboard using React.js and Chart.js to monitor user growth, booking statistics, revenue reports, and platform activities. Designed with a focus on usability, performance, and data visualization.",
    github: "https://github.com/anchalkawal522-creator?tab=repositories",
  },
  {
    title: "Finess Website UI",
    image: "/finess.png",
    desc: "Build strength, improve endurance, and achieve your fitness goals with expert training, personalized workout plans, and a healthy lifestyle.",
    github: "https://github.com/anchalkawal522-creator?tab=repositories",
  },
];

function Project() {
  return (
    <section className="project-section" id="projects">
      <div className="container">
        <div className="heading-project">
          <h1>My Projects</h1>
        </div>

        <div className="project-grid">
          {projects.map((item, index) => (
            <div className="project-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="project-content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>

                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <button>View Project</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
