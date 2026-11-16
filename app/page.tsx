
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Certificates", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    number: "02",
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React.js", "Next.js"],
  },
  {
    number: "03",
    title: "Backend Development",
    skills: ["Spring Boot", "REST APIs", "Flask", "FastAPI"],
  },
  {
    number: "04",
    title: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub", "Postman", "Swagger"],
  },
  {
    number: "05",
    title: "Development Tools",
    skills: ["Docker", "Linux", "VS Code", "GitHub Desktop"],
  },
];

const projects = [
  {
    number: "01",
    category: "Machine Learning",
    title: "Student Behavior Prediction System",
    description:
      "A machine learning-based application designed to analyze student academic information and predict student behavior. The project combines data processing, predictive modeling and a web interface.",
    technologies: ["Python", "Machine Learning", "Flask", "SQL"],
    github: "",
    featured: false,
  },
  {
    number: "02",
    category: "Artificial Intelligence",
    title: "Brain Tumor Detection Using MRI",
    description:
      "An AI-based brain tumor detection application using ResNet50 and Grad-CAM. The system analyzes MRI images, classifies predictions and provides visual explanations through explainable AI.",
    technologies: ["Python", "ResNet50", "Flask", "Grad-CAM"],
    github: "https://github.com/Naveenreddybadam/PrecisionDx",
    featured: true,
  },
  {
    number: "03",
    category: "Generative AI",
    title: "PromptPilot",
    description:
      "An AI-powered prompt enhancement application that transforms simple or unclear instructions into structured prompts, helping users communicate more effectively with AI tools.",
    technologies: ["Next.js", "TypeScript", "Gemini API"],
    github: "",
    featured: false,
  },
];

const certificates = [
  {
    number: "01",
    title: "Associate Cloud Engineer",
    organization: "Google Cloud",
    date: "May 14, 2025",
    detail: "Valid until May 14, 2028",
    file: "/certificates/googlecloud.jpeg",
    type: "IMAGE",
  },
  {
    number: "02",
    title: "DotNet Full Stack",
    organization: "Wipro TalentNext",
    date: "July – October 2025",
    detail: "Digital Skills Readiness Program",
    file: "/certificates/wipro.pdf",
    type: "PDF",
  },
  {
    number: "03",
    title: "Programming in Java – Elite",
    organization: "NPTEL / IIT Kharagpur",
    date: "January – April 2024",
    detail: "12-week course · 63% score",
    file: "/certificates/java.pdf",
    type: "PDF",
  },
  {
    number: "04",
    title: "Database Management Systems",
    organization: "Anna University",
    date: "June 21, 2024",
    detail: "4-credit course · 68% score",
    file: "/certificates/dbms.pdf",
    type: "PDF",
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Vasireddy Venkatadri Institute of Technology",
    location: "Guntur, Andhra Pradesh",
    duration: "2022 – 2026",
    score: "8.76 CGPA",
  },
  {
    degree: "Intermediate",
    field: "Higher Secondary Education",
    institution: "Sri Chaitanya Junior College",
    location: "Guntur, Andhra Pradesh",
    duration: "2020 – 2022",
    score: "96%",
  },
  {
    degree: "Secondary School",
    field: "School Education",
    institution: "School Education",
    location: "",
    duration: "2019 – 2020",
    score: "95%",
  },
];

const achievements = [
  "Gold Medal – Section Topper in 2nd Year B.Tech",
  "Gold-Level Java Badge on HackerRank",
  "Second Place – 3-Day Hackathon at Sri City",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const position = window.scrollY + 160;

      let current = "home";

      navigation.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= position) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const closeMenu = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <main>

      {/* NAVBAR */}

      <header className="site-header">
        <nav className="navbar">

          <a
            href="#home"
            className="brand"
            onClick={() => closeMenu("home")}
          >
            <span className="brand-logo">N</span>

            <span className="brand-name">
              Badam Naveen Reddy
            </span>

            <span className="brand-badge">Fresher</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>

            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => closeMenu(item.id)}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
                className={
                  activeSection === item.id ? "nav-link active" : "nav-link"
                }
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download="Badam_Naveen_Reddy_Resume.pdf"
              className="resume-button"
            >
              <span>↓</span> Resume
            </a>

          </div>
        </nav>
      </header>

      {/* HERO SECTION */}

      <section id="home" className="hero-section">
        <div className="hero-container">

          <div className="hero-content">

            <div className="availability-badge">
              <span className="availability-dot" />
              Open to Entry-Level Opportunities
            </div>

            <p className="hero-greeting">HELLO, I'M</p>

            <h1>
              Badam Naveen
              <span>Reddy.</span>
            </h1>

            <h2 className="hero-role">
              Java Full Stack Developer
            </h2>

            <p className="hero-description">
              Information Technology graduate passionate about
              building scalable web applications and exploring
              modern technologies. I work with Java, Spring Boot,
              React and SQL, and enjoy turning ideas into
              practical software solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Projects <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                download="Badam_Naveen_Reddy_Resume.pdf"
                className="secondary-button"
              >
                ↓ Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <span>Connect with me</span>

              <a
                href="https://github.com/Naveenreddybadam"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/naveenbadam/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:badamnaveenreddy2@gmail.com">
                Email ↗
              </a>
            </div>

          </div>

          <div className="hero-visual">

            <div className="photo-decoration" />

            <div className="profile-frame">
              <Image
                src="/profile.jpg"
                alt="Badam Naveen Reddy - Java Full Stack Developer"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 450px"
                className="profile-photo"
              />
            </div>

            <div className="floating-card education-float">
              <span className="floating-icon">✦</span>
              <div>
                <strong>B.Tech IT</strong>
                <small>8.76 CGPA</small>
              </div>
            </div>

            <div className="floating-card skills-float">
              <span className="floating-icon">⌘</span>
              <div>
                <strong>Java & Spring Boot</strong>
                <small>Full Stack Development</small>
              </div>
            </div>

            <div className="hero-image-caption">
              SOFTWARE DEVELOPER · TECHNOLOGY ENTHUSIAST
            </div>

          </div>

        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="section section-soft">
        <div className="container">

          <SectionHeading
            eyebrow="01 — ABOUT ME"
            title="A little about myself."
            description="My background, interests and journey into software development."
          />

          <div className="about-grid">

            <div className="about-description">
              <p>
                I am a Computer Science and Information Technology
                enthusiast who completed my B.Tech in Information
                Technology from Vasireddy Venkatadri Institute of
                Technology with an academic CGPA of 8.76.
              </p>

              <p>
                My technical interests include Java, Spring Boot,
                React, SQL and AI-powered applications. I enjoy
                understanding how applications work from frontend
                interfaces to backend services and databases.
              </p>

              <p>
                During my internship at GISUL Software Private
                Limited, I gained practical exposure to Racko.ai,
                API validation, cloud management workflows and
                software testing.
              </p>

              <p>
                My goal is to grow as a software developer,
                contribute to meaningful products and continuously
                improve through real-world engineering experience.
              </p>
            </div>

            <div className="about-stats">

              <div className="stat-card">
                <strong>8.76</strong>
                <span>B.Tech CGPA</span>
              </div>

              <div className="stat-card">
                <strong>03</strong>
                <span>Featured Projects</span>
              </div>

              <div className="stat-card">
                <strong>04</strong>
                <span>Certifications</span>
              </div>

              <div className="stat-card">
                <strong>Java</strong>
                <span>Primary Language</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section">
        <div className="container">

          <SectionHeading
            eyebrow="02 — TECHNICAL EXPERTISE"
            title="Skills & Technologies."
            description="Tools and technologies I use to design, develop and test applications."
          />

          <div className="skills-grid">

            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>

                <div className="skill-card-top">
                  <span>{group.number}</span>
                  <span className="skill-symbol">✳</span>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section section-soft">
        <div className="container">

          <SectionHeading
            eyebrow="03 — SELECTED WORK"
            title="Projects I've built."
            description="A selection of academic, AI and application development projects."
          />

          <div className="projects-grid">

            {projects.map((project) => (
              <article className="project-card" key={project.number}>

                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-icon">
                  {project.number === "01"
                    ? "◈"
                    : project.number === "02"
                      ? "✧"
                      : "⌘"}
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-footer">

                  <span>
                    {project.featured ? "Featured Project" : "Personal Project"}
                  </span>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub ↗
                    </a>
                  ) : (
                    <span className="repository-pending">
                      Repository unavailable
                    </span>
                  )}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience" className="section">
        <div className="container">

          <SectionHeading
            eyebrow="04 — PROFESSIONAL JOURNEY"
            title="Internship experience."
            description="Practical exposure to real-world software products and development workflows."
          />

          <div className="experience-card">

            <div className="experience-left">
              <span className="experience-label">INTERNSHIP</span>

              <h3>Tech Intern</h3>

              <h4>GISUL Software Private Limited</h4>

              <p>September 2026 – October 2026</p>

              <div className="experience-location">
                Racko.ai · Cloud Management Platform
              </div>
            </div>

            <div className="experience-right">

              <p>
                Worked with Racko.ai, a cloud management platform,
                gaining practical exposure to application functionality,
                cloud resource workflows and software quality assurance.
              </p>

              <ul>
                <li>
                  Worked with Admin and SuperAdmin modules, including
                  VM Management, Machine Manager and Software Catalog.
                </li>

                <li>
                  Used Postman and Swagger for API validation and
                  response verification.
                </li>

                <li>
                  Used Browser DevTools to inspect network requests
                  and frontend-backend communication.
                </li>

                <li>
                  Documented defects, reproduced issues and performed
                  retesting and regression testing.
                </li>
              </ul>

              <div className="experience-tags">
                <span>Manual Testing</span>
                <span>API Testing</span>
                <span>Postman</span>
                <span>Swagger</span>
                <span>DevTools</span>
                <span>Cloud Platforms</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EDUCATION */}

      <section id="education" className="section section-soft">
        <div className="container">

          <SectionHeading
            eyebrow="05 — ACADEMIC JOURNEY"
            title="Education."
            description="My academic background and qualifications."
          />

          <div className="education-timeline">

            {education.map((item, index) => (
              <article className="education-item" key={item.degree}>

                <div className="timeline-marker">
                  {index + 1}
                </div>

                <div className="education-card">

                  <div className="education-card-header">
                    <span>{item.duration}</span>
                    <strong>{item.score}</strong>
                  </div>

                  <h3>{item.degree}</h3>

                  <h4>{item.field}</h4>

                  <p>{item.institution}</p>

                  {item.location && (
                    <small>{item.location}</small>
                  )}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}

      <section id="certifications" className="section">
        <div className="container">

          <SectionHeading
            eyebrow="06 — CERTIFICATIONS"
            title="Learning & credentials."
            description="Professional certifications and courses I have completed."
          />

          <div className="certificates-grid">

            {certificates.map((certificate) => (
              <article
                className="certificate-card"
                key={certificate.number}
              >

                <div className="certificate-header">
                  <span className="certificate-number">
                    {certificate.number}
                  </span>

                  <span className="certificate-type">
                    {certificate.type}
                  </span>
                </div>

                <div className="certificate-icon">✦</div>

                <h3>{certificate.title}</h3>

                <h4>{certificate.organization}</h4>

                <p>{certificate.date}</p>

                <small>{certificate.detail}</small>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-button"
                >
                  View Certificate <span>↗</span>
                </a>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section id="achievements" className="section section-soft">
        <div className="container">

          <SectionHeading
            eyebrow="07 — MILESTONES"
            title="Achievements."
            description="Academic and extracurricular highlights."
          />

          <div className="achievements-grid">

            {achievements.map((achievement, index) => (
              <article className="achievement-card" key={achievement}>

                <span className="achievement-number">
                  0{index + 1}
                </span>

                <span className="achievement-icon">✦</span>

                <h3>{achievement}</h3>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="section contact-section">
        <div className="container">

          <div className="contact-heading">
            <span className="eyebrow">08 — GET IN TOUCH</span>

            <h2>
              Let's create something
              <span> meaningful.</span>
            </h2>

            <p>
              I'm open to entry-level software development
              opportunities, collaborations and technical discussions.
              Feel free to connect with me.
            </p>
          </div>

          <div className="contact-grid">

            <div className="contact-info">

              <a href="mailto:badamnaveenreddy2@gmail.com">
                <span className="contact-icon">✉</span>
                <div>
                  <small>EMAIL</small>
                  <strong>badamnaveenreddy2@gmail.com</strong>
                </div>
              </a>

              <a href="tel:+917396565241">
                <span className="contact-icon">☎</span>
                <div>
                  <small>PHONE</small>
                  <strong>+91 7396565241</strong>
                </div>
              </a>

              <a
                href="https://github.com/Naveenreddybadam"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">⌘</span>
                <div>
                  <small>GITHUB</small>
                  <strong>github.com/Naveenreddybadam</strong>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/naveenbadam/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">in</span>
                <div>
                  <small>LINKEDIN</small>
                  <strong>linkedin.com/in/naveenbadam</strong>
                </div>
              </a>

            </div>

            <div className="contact-action">

              <div className="contact-decoration">N.</div>

              <h3>Have an opportunity?</h3>

              <p>
                I'd be happy to discuss how I can contribute to
                your team and grow as a developer.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=badamnaveenreddy2@gmail.com&su=Career%20Opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-email-button"
              >
                ✉ Send Me an Email →
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer">

        <div className="footer-inner">

          <a href="#home" className="footer-brand">
            Badam Naveen Reddy<span>.</span>
          </a>

          <p>
            Designed & developed with care.
          </p>

          <div className="footer-links">
            <a href="https://github.com/Naveenreddybadam"
              target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/naveenbadam/"
              target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="#home">Back to top ↑</a>
          </div>

          <small>
            © 2026 Badam Naveen Reddy. All rights reserved.
          </small>

        </div>

      </footer>

    </main>
  );
}
