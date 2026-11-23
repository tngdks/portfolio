const PROFILE = {
  brand: "Devendra Kumar Sharma",
  role: "Frontend & Web Developer",
  headline: "Clean, responsive interface built with React & Tailwind.",
  bio: "Main React, Redux Toolkit, aur tailwind CSS ka use karke fast, mobile-friendly web apps aur practical tools banata hoon.",
  githubUrl: "https://github.com/tngdks",
  email: "devendrasharma9519@gmail.com",
};

const SKILLS = [
  "React",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "React Router",
  "HTML5 & CSS3",
  "Git & Github",
];

const PROJECTS = [
  {
    title: "Real Image Resizer",
    desc: "Browser-based image resizing tool built for fast and clean dimension adjustments.",
    stack: ["Web", "UI", "Preformance"],
    liveUrl: "https://realimgresizer.com",
    repoUrl: "https://github.com/tngdks/Real-IMG-Resizer-App",
  },
  {
    title: "Fighter PowerLevel & Redux App",
    desc: "Interactive state management app with dark mode, responsive layout and protected route flow",
    stack: ["React", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "",
    repoUrl: "https://github.com/tngdks/portfolio",
  },
];

function App() {
  return ( 
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight text-white">
            {PROFILE.brand}
            <span className="text-indigo-400">.dev</span>
          </a>
          <nav className="flex gap-4 sm:gap-6 text-sm text-slate-300">
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
            {PROFILE.role}
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
            {PROFILE.headline}
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl text-base sm:text-lg">
            {PROFILE.bio}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-3 rounded-xl text-center transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-5 py-3 rounded-xl text-center transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 border-t border-slate-800/80">
          <h2 className="text-2xl font-bold text-white mb-5">Skills</h2>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-slate-900 border border-slate-800 text-slate-200 px-3.5 py-2 rounded-xl text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t border-slate-800/80">
          <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-950 border border-slate-800 text-indigo-300 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800 text-sm font-medium">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-400 hover:text-indigo-300"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-white"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-14 border-t border-slate-800/80">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Frontend / web developer roles, collaborations, ya project queries ke liye GitHub ya email ke zariye connect kar sakte hain.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl transition"
              >
                GitHub (@{PROFILE.brand})
              </a>
              {PROFILE.email && (
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-100 px-4 py-2.5 rounded-xl transition"
                >
                  Email Me
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        {PROFILE.brand} • Built with React, Vite &amp; Tailwind CSS
      </footer>
    </div>
  );
}

export default App;