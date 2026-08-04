import { useState, useEffect, useRef } from 'react'
import profilePhoto from '@/imports/WhatsApp_Image_2026-08-04_at_11.25.57_AM.jpeg'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const SKILLS = [
  { name: 'HTML5', icon: '🌐', level: 90 },
  { name: 'CSS3', icon: '🎨', level: 85 },
  { name: 'JavaScript', icon: '⚡', level: 80 },
  { name: 'React', icon: '⚛️', level: 75 },
  { name: 'Python', icon: '🐍', level: 70 },
  { name: 'Git & GitHub', icon: '🔧', level: 85 },
  { name: 'Tailwind CSS', icon: '💨', level: 80 },
  { name: 'Node.js', icon: '🟢', level: 65 },
]

const PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website crafted with HTML, CSS, and JavaScript featuring smooth animations, responsive design, and dynamic project showcasing.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=380&fit=crop&auto=format',
    github: 'https://github.com/manjunathadm12',
    live: '#',
    color: 'from-blue-500/20 to-violet-500/20',
    accent: '#60a5fa',
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'A real-time weather application that fetches live data from OpenWeatherMap API. Search any city to view temperature, humidity, wind speed, and 5-day forecast.',
    tags: ['JavaScript', 'REST API', 'CSS'],
    image:
      'https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?w=600&h=380&fit=crop&auto=format',
    github: 'https://github.com/manjunathadm12',
    live: '#',
    color: 'from-sky-500/20 to-cyan-400/20',
    accent: '#38bdf8',
  },
  {
    id: 3,
    title: 'Task Manager Dashboard',
    description:
      'A full-featured productivity dashboard to create, organize, and track tasks. Includes priority labels, progress tracking, due dates, and a clean kanban-style board.',
    tags: ['React', 'Tailwind CSS', 'LocalStorage'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&auto=format',
    github: 'https://github.com/manjunathadm12',
    live: '#',
    color: 'from-violet-500/20 to-pink-500/20',
    accent: '#a78bfa',
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-xl italic" style={{ color: '#60a5fa' }}>
          Manju<span style={{ color: '#a78bfa' }}>.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active === link.toLowerCase()
                    ? 'text-gradient'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
            color: '#fff',
          }}
        >
          Hire Me
        </a>
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white font-medium"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: '#60a5fa' }}
            >
              Full Stack Developer
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
              style={{ color: '#e2e8f0' }}
            >
              Hi, I'm{' '}
              <span className="text-gradient italic">Manju D M</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8 mx-auto md:mx-0">
              I craft beautiful, performant web experiences with clean code and thoughtful design.
              Passionate about turning ideas into reality through technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  boxShadow: '0 4px 24px rgba(96,165,250,0.3)',
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold text-slate-300 glass border border-white/10 transition-all duration-200 hover:border-blue-400/40 hover:text-white"
              >
                Get In Touch
              </a>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-5 mt-10 justify-center md:justify-start">
              <a
                href="https://github.com/manjunathadm12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-200"
                title="GitHub"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="mailto:dmmanju32@gmail.com"
                className="text-slate-500 hover:text-white transition-colors duration-200"
                title="Email"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/manju-d-m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-200"
                title="LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative animate-float">
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden animate-pulse-ring"
                style={{
                  border: '3px solid transparent',
                  background:
                    'linear-gradient(#0e1521, #0e1521) padding-box, linear-gradient(135deg, #60a5fa, #a78bfa) border-box',
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Manju D M - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-2 -right-2 glass rounded-xl px-3 py-2 text-xs font-semibold"
                style={{ color: '#60a5fa', border: '1px solid rgba(96,165,250,0.25)' }}
              >
                ⚡ Open to Work
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto md:mx-0">
          {[
            { val: '3+', label: 'Projects' },
            { val: '1+', label: 'Year Coding' },
            { val: '100%', label: 'Passion' },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="glass rounded-2xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-gradient">{val}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const { ref, inView } = useInView()
  return (
    <section id="about" className="py-24 relative">
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }}
      />
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#a78bfa' }}>
            Who I Am
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-slate-100 mb-12">
            About <span className="italic" style={{ color: '#60a5fa' }}>Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm <span className="font-semibold text-white">Manju D M</span>, a passionate web developer
                dedicated to building elegant and efficient web applications. I love the intersection of
                design and engineering — where beautiful UI meets solid code.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I'm constantly learning and experimenting with new technologies. My goal is to create
                digital experiences that are not only visually stunning but also accessible, fast, and meaningful.
              </p>
              <p className="text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me exploring nature trails, reading about tech trends,
                or collaborating on open-source projects on GitHub.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: '📍', text: 'Karnataka, India' },
                  { icon: '🎓', text: 'Computer Science' },
                  { icon: '💼', text: 'Available for Hire' },
                ].map(({ icon, text }) => (
                  <span
                    key={text}
                    className="glass px-4 py-2 rounded-full text-sm text-slate-300"
                  >
                    {icon} {text}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const { ref, inView } = useInView()
  return (
    <section id="skills" className="py-24 relative grid-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(96,165,250,0.05), transparent)',
        }}
      />
      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#38bdf8' }}>
            What I Know
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-slate-100 mb-12">
            My <span className="italic" style={{ color: '#38bdf8' }}>Skills</span>
          </h2>

          <div className="flex flex-col gap-4 max-w-2xl">
            {SKILLS.map((skill, i) => (
              <div
                key={skill.name}
                className="glass rounded-2xl px-6 py-4 flex items-center gap-5 hover:border-blue-400/25 transition-all duration-300 group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease ${i * 60}ms`,
                }}
              >
                <div className="text-2xl flex-shrink-0 w-9">{skill.icon}</div>
                <div className="text-slate-200 font-semibold text-sm flex-shrink-0 w-32">{skill.name}</div>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: inView ? `${skill.level}%` : '0%',
                      background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                      transitionDelay: `${i * 60 + 400}ms`,
                    }}
                  />
                </div>
                <div className="text-xs text-slate-500 flex-shrink-0 w-9 text-right">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const { ref, inView } = useInView()
  return (
    <section id="projects" className="py-24 relative">
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }}
      />
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#60a5fa' }}>
            My Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-slate-100 mb-12">
            Featured <span className="italic" style={{ color: '#60a5fa' }}>Projects</span>
          </h2>

          <div className="flex flex-col gap-8 max-w-3xl">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className="glass rounded-3xl overflow-hidden group transition-all duration-400 hover:shadow-xl flex flex-col sm:flex-row"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.7s ease ${i * 120}ms`,
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.05)`,
                }}
              >
                {/* Image */}
                <div className="relative sm:w-64 flex-shrink-0 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} via-transparent`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-slate-100 font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: `${project.accent}18`,
                            color: project.accent,
                            border: `1px solid ${project.accent}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105"
                      style={{ background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}30` }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass text-slate-300 hover:text-white border border-white/10 transition-all duration-200 hover:scale-105"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://github.com/manjunathadm12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-slate-300 hover:text-white border border-white/10 hover:border-blue-400/30 transition-all duration-200 font-medium text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 relative grid-bg">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }}
      />
      <div ref={ref} className="max-w-5xl mx-auto px-6 relative">
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-center" style={{ color: '#a78bfa' }}>
            Let's Talk
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-slate-100 mb-4 text-center">
            Get In <span className="italic" style={{ color: '#a78bfa' }}>Touch</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-md mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop a message below.
          </p>

          <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
            {/* Contact cards stacked */}
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                ),
                label: 'Email',
                value: 'dmmanju32@gmail.com',
                href: 'mailto:dmmanju32@gmail.com',
                color: '#60a5fa',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
                label: 'GitHub',
                value: 'github.com/manjunathadm12',
                href: 'https://github.com/manjunathadm12',
                color: '#a78bfa',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'linkedin.com/in/manju-d-m',
                href: 'https://www.linkedin.com/in/manju-d-m',
                color: '#38bdf8',
              },
            ].map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-white/20 transition-all duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}20`, color }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5 font-medium tracking-wider uppercase">{label}</div>
                  <div className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">
                    {value}
                  </div>
                </div>
                <svg className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}

            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5 font-medium tracking-wider uppercase">Response Time</div>
                <div className="text-slate-200 text-sm font-medium">Within 24 hours</div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Available Now</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 space-y-4">
              {sent && (
                <div
                  className="rounded-xl p-4 text-sm font-medium text-center"
                  style={{ background: 'rgba(96,165,250,0.1)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.2)' }}
                >
                  Message sent! I'll get back to you soon.
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:ring-2 focus:ring-blue-400/30"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:ring-2 focus:ring-blue-400/30"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:ring-2 focus:ring-blue-400/30 resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  boxShadow: '0 4px 20px rgba(96,165,250,0.25)',
                }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


function Footer() {
  return (
    <footer
      className="py-8 text-center border-t"
      style={{ borderColor: 'rgba(96,165,250,0.1)' }}
    >
      <p className="text-slate-500 text-sm">
        Designed & Built by{' '}
        <span className="font-semibold text-gradient">Manju D M</span> · 2026
      </p>
      <div className="flex items-center justify-center gap-4 mt-2">
        <a href="mailto:dmmanju32@gmail.com" className="text-slate-600 hover:text-slate-400 transition-colors text-xs">
          dmmanju32@gmail.com
        </a>
        <span className="text-slate-700">·</span>
        <a href="https://github.com/manjunathadm12" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 transition-colors text-xs">
          github.com/manjunathadm12
        </a>
        <span className="text-slate-700">·</span>
        <a href="https://www.linkedin.com/in/manju-d-m" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 transition-colors text-xs">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ background: '#080c14', minHeight: '100vh' }}>
      <Navbar active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
