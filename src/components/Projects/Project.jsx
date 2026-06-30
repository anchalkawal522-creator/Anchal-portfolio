import "./project.css";
const projects = [
  {
    title: "Fox University",
    image: "/ss.p.png",
    desc: "A modern and responsive educational website built for universities, colleges, and online learning platforms. It features course listings, faculty information, admission details, and a clean user-friendly interface.",
    github: "https://foxuni-sigma.vercel.app/",
  },
  {
    title: "Imperial China",
    image: "/imperial design.png",
    desc: "A responsive restaurant website showcasing authentic Chinese cuisine with an elegant design, interactive menu, online reservation section, and a seamless user experience across all devices.",
    github: "https://website-imperial.vercel.app/",
  },
  {
    title: "TruArt",
    image: "/truart.png",
    desc: "A creative portfolio and art gallery website designed to showcase artworks with a modern UI, smooth navigation, responsive layouts, and an engaging visual experience.",
    github: "https://truart-ui.vercel.app/",
  },
  {
    title: "Sri Hari Classes",
    image: "/sri hari.png",
    desc: "A responsive coaching institute website featuring course details, faculty information, admission process, contact section, and an easy-to-navigate interface for students and parents.",
    github: "https://shri-hari-classes-nerchowk.vercel.app/",
  },
  {
    title: "Astro Dashboard",
    image: "/astrodash.png",
    desc: "A responsive admin dashboard built with React.js and Chart.js to manage users, monitor bookings, visualize revenue reports, and track platform performance through interactive charts and analytics.",
    github: "https://astrodash-fcrd4uko0-anchalkawal522-creators-projects.vercel.app/",
  },
  {
    title: "Fitness Website UI",
    image: "/finess.png",
    desc: "A modern fitness website UI designed for gyms and personal trainers, featuring workout programs, trainer profiles, membership plans, BMI calculator, and a fully responsive layout.",
    github: "https://fitness-j8ute8e2r-anchalkawal522-creators-projects.vercel.app",
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
