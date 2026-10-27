"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    category: "INTERNET OF THINGS",
    title: "Smart Farm Management System",
    description:
      "An IoT-based farming system designed to monitor environmental conditions and support smarter irrigation using sensors and embedded hardware.",
    technologies: ["ESP32", "IoT", "Sensors"],
  },
  {
    number: "02",
    category: "COMPUTER VISION",
    title: "Power Bank Detection",
    description:
      "A computer vision project focused on identifying power banks from images using image-processing techniques.",
    technologies: ["Python", "OpenCV", "Image Processing"],
  },
  {
    number: "03",
    category: "SOFTWARE DEVELOPMENT",
    title: "Clinic Management System",
    description:
      "A software application designed to organise clinic operations and manage information efficiently.",
    technologies: ["Web Development", "Database", "Software"],
  },
  {
    number: "04",
    category: "ROBOTICS",
    title: "Smart Maze-Following Robot",
    description:
      "An embedded robotics project that uses distance sensors and a microcontroller to navigate a maze.",
    technologies: ["ESP32", "Robotics", "Embedded C++"],
  },
];

const skills = [
  {
    number: "01",
    title: "Programming",
    description: "C, C++, Python, JavaScript, TypeScript",
  },
  {
    number: "02",
    title: "Web Development",
    description: "HTML, CSS, React, Next.js, Node.js",
  },
  {
    number: "03",
    title: "Embedded Systems",
    description: "ESP32, Arduino, Sensors, IoT",
  },
  {
    number: "04",
    title: "Tools & Databases",
    description: "Git, GitHub, PostgreSQL, VS Code",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          K<span>.</span>
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Let&apos;s Talk ↗
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            COMPUTER ENGINEERING UNDERGRADUATE
          </div>

          <p className="hero-intro">Hello, I&apos;m</p>

          <h1>
            Thevarajah
            <br />
            <span>Kopigan.</span>
          </h1>

          <p className="hero-description">
            I build digital experiences, explore embedded systems,
            and turn ideas into practical technology solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="button button-secondary">
              Get In Touch
            </a>

            <a
              href="/Kopigan-CV.pdf"
              download
              className="button button-secondary"
            >
              Download CV ↓
            </a>
          </div>

          <p className="hero-location">
            <span>⌖</span> Colombo, Sri Lanka
          </p>
        </div>

        {/* ANIMATED VISUAL */}
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-large" />
          <div className="orbit orbit-medium" />
          <div className="orbit orbit-small" />

          <div className="core-object">
            <div className="core-inner">K.</div>
          </div>

          <div className="floating-label label-top">
            <span className="availability-dot" />
            SOFTWARE
          </div>

          <div className="floating-label label-bottom">
            <span className="purple-dot" />
            ENGINEERING
          </div>

          <span className="visual-cross cross-one">+</span>
          <span className="visual-cross cross-two">✳</span>
        </div>

        <a href="#about" className="scroll-cue">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>

        <span className="hero-index">PORTFOLIO / 2026</span>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="eyebrow">01 — ABOUT ME</span>

          <h2>
            Curious mind.
            <br />
            <span>Builder&apos;s mindset.</span>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-visual">
            <div className="about-frame">
              <div className="about-monogram">
                TK<span>.</span>
              </div>

              <p>LEARNING THROUGH BUILDING</p>

              <span className="frame-corner corner-tl" />
              <span className="frame-corner corner-tr" />
              <span className="frame-corner corner-bl" />
              <span className="frame-corner corner-br" />
            </div>
          </div>

          <div className="about-text">
            <p className="about-lead">
              I&apos;m a Computer Engineering undergraduate at the
              University of Sri Jayewardenepura, Sri Lanka.
            </p>

            <p>
              I enjoy exploring software development, embedded systems,
              robotics, IoT, and computer vision. I&apos;m interested in
              building practical technology that connects software with
              the real world.
            </p>

            <p>
              Through my projects, I experiment with new ideas, solve
              engineering challenges, and continuously improve my
              technical skills.
            </p>

            <div className="about-stats">
              <div>
                <strong>
                  04<span>+</span>
                </strong>
                <small>PROJECTS</small>
              </div>

              <div>
                <strong>CE</strong>
                <small>ENGINEERING</small>
              </div>

              <div>
                <strong>LK</strong>
                <small>SRI LANKA</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-heading section-heading-row">
          <div>
            <span className="eyebrow">02 — SELECTED WORK</span>

            <h2>
              Ideas into
              <br />
              <span>reality.</span>
            </h2>
          </div>

          <p className="heading-description">
            A selection of projects exploring software, electronics,
            and real-world engineering challenges.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-arrow">↗</span>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-bottom">
                <span>FEATURED PROJECT</span>
                <span>✳</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <span className="eyebrow">03 — MY TOOLKIT</span>

          <h2>
            Skills that
            <br />
            <span>make it happen.</span>
          </h2>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.number}>
              <span className="skill-number">{skill.number}</span>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>

        <div className="learning-note">
          <span className="availability-dot" />
          ALWAYS LEARNING. ALWAYS BUILDING.
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section" id="education">
        <div className="section-heading">
          <span className="eyebrow">04 — EDUCATION</span>

          <h2>
            The foundation
            <br />
            <span>of my journey.</span>
          </h2>
        </div>

        <div className="education-timeline">
          <article className="education-item">
            <span className="timeline-dot" />

            <p className="education-period">
              UNDERGRADUATE · EXPECTED 2028
            </p>

            <h3>B.Sc. (Hons) in Computer Engineering</h3>

            <p className="education-institution">
              University of Sri Jayewardenepura
            </p>

            <p className="education-detail">
              Developing practical knowledge in computer engineering,
              software development, and embedded technologies.
            </p>
          </article>

          <article className="education-item">
            <span className="timeline-dot" />

            <p className="education-period">G.C.E. ADVANCED LEVEL</p>

            <h3>Physical Science Stream</h3>

            <p className="education-institution">
              Vavuniya Tamil Madya Maha Vidyalayam
            </p>

            <div className="grade-list">
              <span>
                Combined Mathematics <b>A</b>
              </span>

              <span>
                Physics <b>B</b>
              </span>

              <span>
                Chemistry <b>A</b>
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-glow" />

        <div className="contact-inner">
          <span className="eyebrow">05 — GET IN TOUCH</span>

          <h2>
            Let&apos;s make
            <br />
            <span>something meaningful.</span>
          </h2>

          <p>
            Have a project idea, collaboration opportunity, or just
            want to talk about technology? Feel free to reach out.
          </p>

          <a
            href="mailto:thevarajahkopigan@gmail.com"
            className="button button-primary contact-button"
          >
            Say Hello <span>↗</span>
          </a>

          <div className="contact-details">
            <a href="mailto:thevarajahkopigan@gmail.com">
              thevarajahkopigan@gmail.com
            </a>

            <a href="tel:+94760804086">
              +94 76 080 4086
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          K<span>.</span>
        </a>

        <p>Designed &amp; built by Thevarajah Kopigan.</p>

        <div className="footer-links">
          <a
            href="https://github.com/Kopi-1513"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/thevarajah-kopigan-b81a44294/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>

        <span className="footer-copy">
          © {year ?? 2026} KOPIGAN
        </span>
      </footer>
    </main>
  );
}