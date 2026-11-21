// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

const SKILLS = [
  "React",
  "JavaScript (ES6+)",
  "Redux Toolkit",
  "Tailwind CSS",
  "React Router",
  "HTML5 & CSS3",
  "Git & GitHub",
];

const PROJECTS = [
  {
    title: "Real Image Resizer",
    desc: "Browser-based image resizing tool built for fast and clean dimension adjustments.",
    stack: ["Web", "UI", "Performance"],
    liveUrl: "https://realimgresizer.com",
    repoUrl: "https://github.com/tngdks",
  },
  {
    title: "Fighter PowerLevel & Redux App",
    desc: "Interactive state management app with dark mode, responsive layout, and protected route flow.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "#",
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
            tngdks<span className="text-indigo-400">.dev</span>
          </a>
          <nav className="flex gap-4 sm:gap-6 text-sm text-slate-300">
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Frontend &amp; Web Developer
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
            Clean, responsive interfaces built with React &amp; Tailwind.
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl text-base sm:text-lg">
            Main React, Redux Toolkit, aur Tailwind CSS ka use karke fast, mobile-friendly web apps aur practical tools banata hoon.
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

        {/* Skills */}
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

        {/* Projects */}
        <section id="projects" className="py-12 border-t border-slate-800/80">
          <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14 border-t border-slate-800/80">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Frontend / web developer roles, collaborations, ya project queries ke liye GitHub ya email ke zariye connect kar sakte hain.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <a
                href="https://github.com/tngdks"
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl transition"
              >
                GitHub (@tngdks)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        Built with React, Vite &amp; Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
