"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";
import Scene from "./Scene";

const projects = [
  {
    number: "01",
    title: "Smart Farm Management System",
    category: "Internet of Things",
    description:
      "An IoT-based agriculture project designed to monitor environmental conditions and support smarter farm management using sensors and ESP32.",
    technologies: ["ESP32", "IoT", "Sensors", "Embedded Systems"],
  },
  {
    number: "02",
    title: "Power Bank Detection",
    category: "Computer Vision",
    description:
      "A computer vision project that explores image processing techniques to identify power banks from images.",
    technologies: ["Python", "Computer Vision", "Image Processing"],
  },
  {
    number: "03",
    title: "Clinic Management System",
    category: "Web Development",
    description:
      "A software project focused on organizing clinic-related information and supporting common management activities.",
    technologies: ["Web Development", "Database", "SQL"],
  },
  {
    number: "04",
    title: "Smart Maze-Following Robot",
    category: "Robotics",
    description:
      "An embedded robotics project that uses sensors and a microcontroller to detect surroundings and navigate a maze.",
    technologies: ["ESP32", "Robotics", "Sensors", "C++"],
  },
];

const skillGroups = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Node.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Database & Tools",
    skills: ["SQL", "Git", "GitHub", "PostgreSQL"],
  },
  {
    title: "Engineering",
    skills: ["IoT", "ESP32", "Embedded Systems", "Computer Vision", "Robotics"],
  },
];

const education = [
  {
    period: "Expected 2028",
    title: "B.Sc. (Hons) in Computer Engineering",
    institution: "University of Sri Jayewardenepura",
    description:
      "Undergraduate studies focused on computer engineering, programming, software development, and engineering technologies.",
  },
  {
    period: "Advanced Level",
    title: "G.C.E. Advanced Level — Physical Science",
    institution: "Vavuniya Tamil Madya Maha Vidyalayam",
    description:
      "Combined Mathematics — A | Physics — B | Chemistry — A",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = dark
    ? {
        page: "bg-[#080d18] text-slate-100",
        header: "border-white/10 bg-[#080d18]/85",
        muted: "text-slate-400",
        card: "border-white/10 bg-white/[0.035]",
        soft: "bg-white/[0.06]",
        heading: "text-white",
        line: "border-white/10",
        input:
          "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500",
      }
    : {
        page: "bg-white text-slate-900",
        header: "border-slate-200 bg-white/90",
        muted: "text-slate-600",
        card: "border-slate-200 bg-white shadow-sm shadow-slate-200/40",
        soft: "bg-slate-100",
        heading: "text-slate-900",
        line: "border-slate-200",
        input:
          "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400",
      };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${theme.page}`}
    >
      <Scene />

      {/* Navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${theme.header}`}
      >
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="text-xl font-black tracking-tight"
            aria-label="Go to homepage"
          >
            TK<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition hover:text-blue-500 ${theme.muted}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={`rounded-full border p-2.5 transition hover:border-blue-500 hover:text-blue-500 ${theme.line}`}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
            >
              Let&apos;s Talk <ArrowUpRight className="ml-1" size={16} />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            className={`border-t px-5 py-4 md:hidden ${theme.line} ${
              dark ? "bg-[#080d18]" : "bg-white"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block py-3 text-sm ${theme.muted}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12"
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Computer Engineering Undergraduate
            </div>

            <p className={`mb-3 text-lg ${theme.muted}`}>Hello, I&apos;m</p>

            <h1
              className={`max-w-4xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl ${theme.heading}`}
            >
              Thevarajah
              <br />
              <span className="text-blue-500">Kopigan.</span>
            </h1>

            <p
              className={`mt-7 max-w-2xl text-base leading-8 sm:text-lg ${theme.muted}`}
            >
              I&apos;m a Computer Engineering undergraduate passionate about
              software development, IoT, embedded systems, and building
              technology that solves real-world problems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore My Work <ArrowDown size={17} />
              </a>

              <a
                href="/Kopigan-CV.pdf"
                download
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-500 ${theme.line}`}
              >
                Download CV <Download size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Kopi-1513"
                target="_blank"
                rel="noreferrer"
                className={`rounded-full border px-4 py-2 text-sm transition hover:border-blue-500 hover:text-blue-500 ${theme.line}`}
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/thevarajah-kopigan-b81a44294/"
                target="_blank"
                rel="noreferrer"
                className={`rounded-full border px-4 py-2 text-sm transition hover:border-blue-500 hover:text-blue-500 ${theme.line}`}
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />

            <div
              className={`relative overflow-hidden rounded-[2rem] border p-7 sm:p-9 ${theme.card}`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
                  About Me
                </span>
                <Code2 className="text-blue-500" size={24} />
              </div>

              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600 text-3xl font-black text-white shadow-lg shadow-blue-600/20">
                TK
              </div>

              <h2 className={`text-2xl font-bold ${theme.heading}`}>
                Engineering ideas into reality.
              </h2>

              <p className={`mt-3 text-sm leading-7 ${theme.muted}`}>
                Learning, building, experimenting, and improving one project
                at a time.
              </p>

              <div className={`my-7 border-t ${theme.line}`} />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-2xl font-black text-blue-500">04</p>
                  <p className={`mt-1 text-xs ${theme.muted}`}>
                    Featured Projects
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-black text-blue-500">2028</p>
                  <p className={`mt-1 text-xs ${theme.muted}`}>
                    Expected Graduation
                  </p>
                </div>
              </div>

              <div className={`mt-7 rounded-2xl p-4 ${theme.soft}`}>
                <p className={`text-xs ${theme.muted}`}>Currently focused on</p>
                <p className="mt-2 text-sm font-semibold">
                  Software · IoT · Embedded Systems
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title="A little about me."
            description="Curiosity drives me to understand how things work and how technology can make them better."
            muted={theme.muted}
            heading={theme.heading}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Code2 size={25} />,
                title: "Software Development",
                description:
                  "Building applications and exploring modern technologies to create useful digital experiences.",
              },
              {
                icon: <BriefcaseBusiness size={25} />,
                title: "Practical Problem Solving",
                description:
                  "Turning engineering concepts into practical projects through experimentation and iteration.",
              },
              {
                icon: <GraduationCap size={25} />,
                title: "Continuous Learning",
                description:
                  "Developing technical knowledge through university studies, personal projects, and hands-on practice.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl border p-7 transition hover:-translate-y-1 hover:border-blue-500/40 ${theme.card}`}
              >
                <div className="mb-5 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-500">
                  {item.icon}
                </div>
                <h3 className={`text-lg font-bold ${theme.heading}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 text-sm leading-7 ${theme.muted}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`scroll-mt-24 border-y px-5 py-24 sm:px-8 lg:px-12 ${theme.line}`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects I've explored."
            description="A selection of projects that reflect my interest in software, embedded systems, IoT, and robotics."
            muted={theme.muted}
            heading={theme.heading}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`group rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 sm:p-8 ${theme.card}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-bold tracking-widest text-blue-500">
                    {project.number}
                  </span>
                  <ArrowUpRight
                    size={21}
                    className={`transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500 ${theme.muted}`}
                  />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
                  {project.category}
                </p>

                <h3 className={`mt-3 text-xl font-bold ${theme.heading}`}>
                  {project.title}
                </h3>

                <p className={`mt-4 text-sm leading-7 ${theme.muted}`}>
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full px-3 py-1.5 text-xs ${theme.soft}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="TECHNICAL TOOLKIT"
            title="Skills & technologies."
            description="Technologies and engineering areas I have studied, explored, or used in projects."
            muted={theme.muted}
            heading={theme.heading}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-3xl border p-6 sm:p-8 ${theme.card}`}
              >
                <h3 className={`text-lg font-bold ${theme.heading}`}>
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-blue-500/20 bg-blue-500/5 px-3.5 py-2 text-sm transition hover:border-blue-500/50 hover:bg-blue-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className={`scroll-mt-24 border-y px-5 py-24 sm:px-8 lg:px-12 ${theme.line}`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Education."
            description="My academic background and engineering journey so far."
            muted={theme.muted}
            heading={theme.heading}
          />

          <div className="mx-auto mt-12 max-w-3xl">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative pb-10 pl-9 last:pb-0"
              >
                <div className="absolute bottom-0 left-[7px] top-2 w-px bg-blue-500/30 last:hidden" />
                <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-blue-500/30 bg-blue-500" />

                <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                  {item.period}
                </p>
                <h3 className={`mt-3 text-lg font-bold ${theme.heading}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-sm font-medium ${theme.muted}`}>
                  {item.institution}
                </p>
                <p className={`mt-3 text-sm leading-7 ${theme.muted}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-blue-600/[0.06] p-7 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
                GET IN TOUCH
              </p>

              <h2 className={`mt-5 text-4xl font-black sm:text-5xl ${theme.heading}`}>
                Have a project in mind?
              </h2>

              <p className={`mt-5 max-w-2xl leading-8 ${theme.muted}`}>
                I&apos;m interested in connecting with people, exploring
                opportunities, and collaborating on meaningful technology
                projects. Feel free to reach out.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:thevarajahkopigan@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Mail size={18} /> Send Me an Email
                </a>

                <a
                  href="https://www.linkedin.com/in/thevarajah-kopigan-b81a44294/"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-500 ${theme.line}`}
                >
                  Connect on LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                <a
                  href="mailto:thevarajahkopigan@gmail.com"
                  className={`inline-flex items-center gap-2 text-sm ${theme.muted} transition hover:text-blue-500`}
                >
                  <Mail size={16} className="text-blue-500" />
                  thevarajahkopigan@gmail.com
                </a>

                <a
                  href="tel:+94760804086"
                  className={`inline-flex items-center gap-2 text-sm ${theme.muted} transition hover:text-blue-500`}
                >
                  <Phone size={16} className="text-blue-500" />
                  +94 76 080 4086
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t px-5 py-7 sm:px-8 lg:px-12 ${theme.line}`}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#home" className="text-lg font-black">
            TK<span className="text-blue-500">.</span>
          </a>

          <p className={`text-center text-xs ${theme.muted}`}>
            © {new Date().getFullYear()} Thevarajah Kopigan. Built with Next.js.
          </p>

          <a
            href="#home"
            className={`text-sm transition hover:text-blue-500 ${theme.muted}`}
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  muted,
  heading,
}: {
  eyebrow: string;
  title: string;
  description: string;
  muted: string;
  heading: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${heading}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-sm leading-7 sm:text-base ${muted}`}>
        {description}
      </p>
    </div>
  );
}