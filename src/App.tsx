import { useState } from 'react'
import profilePhoto from '@/imports/WhatsApp_Image_2026-08-04_at_11.25.57_AM-1.jpeg'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: '#0a0a1a', color: '#fff', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 2rem', background: 'rgba(10,10,26,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="#" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 700, fontSize: '1.5rem', color: '#4d7fff', textDecoration: 'none', letterSpacing: '-0.01em' }}>
          Manju.
        </a>
        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 400, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(o => !o)} className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '1.4rem', lineHeight: 1 }}>
          ☰
        </button>
        {menuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#0d0d20', padding: '1rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '0.6rem 0', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }}>
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '7rem 2rem 4rem' }}>

        {/* Profile circle */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          {/* Rotating border ring */}
          <div style={{
            width: '240px', height: '240px', borderRadius: '50%',
            border: '2px solid #3355cc',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Photo inside circle */}
            <div style={{ width: '218px', height: '218px', borderRadius: '50%', overflow: 'hidden', background: '#111130' }}>
              <img
                src={profilePhoto}
                alt="Manju DM — Full Stack Developer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>
          {/* Open to Work badge */}
          <div style={{
            position: 'absolute', bottom: '-8px', right: '-16px',
            background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '20px', padding: '0.35rem 0.9rem',
            fontSize: '0.78rem', fontWeight: 600, color: '#fff',
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          }}>
            <span style={{ color: '#f5a623' }}>⚡</span> Open to Work
          </div>
        </div>

        {/* Ticker / role */}
        <p style={{ color: '#4d7fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '1.5rem 0 0.75rem' }}>
          FULL STACK DEVELOPER
        </p>

        {/* Heading */}
        <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
          Hi, I'm{' '}
          <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#4d7fff' }}>Manju</span>
          <br />
          <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#4d7fff' }}>D M</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, maxWidth: '50ch', margin: '0 0 2.5rem' }}>
          I craft beautiful, performant web experiences with clean code and thoughtful design. Passionate about building things that make a difference.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projects"
            style={{ background: '#4d7fff', color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            View Projects
          </a>
          <a href="#contact"
            style={{ color: '#fff', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)', transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}>
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,8vw,6rem)', background: '#0d0d20' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#4d7fff', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>About Me</p>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>Who I Am</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '60ch', margin: '0 auto' }}>
            I'm Manjunath D M, a passionate Full Stack Developer from Karnataka, India. I love turning complex problems into simple, beautiful digital solutions. Always learning, always building.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,8vw,6rem)', background: '#0a0a1a' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#4d7fff', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.6rem', textAlign: 'center' }}>Skills</p>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, margin: '0 0 3rem', letterSpacing: '-0.02em', textAlign: 'center' }}>What I Work With</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { label: 'HTML & CSS', level: 90 },
              { label: 'JavaScript', level: 82 },
              { label: 'React.js', level: 78 },
              { label: 'Node.js', level: 70 },
              { label: 'Python', level: 65 },
              { label: 'Git & GitHub', level: 85 },
            ].map(skill => (
              <div key={skill.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{skill.label}</span>
                  <span style={{ color: '#4d7fff', fontWeight: 600, fontSize: '0.85rem' }}>{skill.level}%</span>
                </div>
                <div style={{ height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${skill.level}%`, background: 'linear-gradient(90deg, #4d7fff, #7ba3ff)', borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,8vw,6rem)', background: '#0d0d20' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#4d7fff', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.6rem', textAlign: 'center' }}>Projects</p>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, margin: '0 0 3rem', letterSpacing: '-0.02em', textAlign: 'center' }}>Selected Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Portfolio Website', desc: 'Personal portfolio built with HTML, CSS and JavaScript.', tags: ['HTML', 'CSS', 'JS'], year: '2024' },
              { title: 'Task Manager App', desc: 'Productivity app with drag-and-drop and local storage.', tags: ['React', 'Tailwind'], year: '2024' },
              { title: 'Weather Dashboard', desc: 'Live weather data via OpenWeatherMap API.', tags: ['JavaScript', 'API'], year: '2023' },
            ].map(p => (
              <div key={p.title}
                style={{ background: '#13132a', borderRadius: '10px', padding: '1.75rem', border: '1px solid rgba(77,127,255,0.15)', transition: 'border-color 0.2s, transform 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(77,127,255,0.45)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(77,127,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', margin: '0 0 0.75rem' }}>{p.year}</p>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 0.6rem' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.65, margin: '0 0 1.25rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ background: 'rgba(77,127,255,0.15)', color: '#7ba3ff', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,8vw,6rem)', background: '#0a0a1a', textAlign: 'center' }}>
        <p style={{ color: '#4d7fff', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Contact</p>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Get In Touch</h2>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', marginBottom: '2.5rem' }}>Open to opportunities, collaborations, and conversations.</p>
        <a href="mailto:manjunathadm12@gmail.com"
          style={{ display: 'inline-block', background: '#4d7fff', color: '#fff', padding: '0.9rem 2.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
          Say Hello
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem' }}>
          <a href="https://github.com/manjunathadm12" target="_blank" rel="noreferrer"
            style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
            GitHub
          </a>
          <a href="#"
            style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
            LinkedIn
          </a>
        </div>
      </section>

      <footer style={{ background: '#0d0d20', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem 2rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', margin: 0 }}>© 2026 Manju D M · Built with passion</p>
      </footer>
    </div>
  )
}
