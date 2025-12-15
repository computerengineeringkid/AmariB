import { useState, useEffect } from 'react'
import { Linkedin } from 'lucide-react'

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About/Experience', href: '#experience' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'SIP', href: '#sip' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'portfolio', 'sip', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-3 group">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-lg font-semibold shadow-lg group-hover:shadow-blue-500/20 transition-all">
            AB
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
            <p className="text-base font-semibold text-white">Amari Bullard</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-white/5 p-1 text-sm text-slate-200 shadow-lg md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`rounded-full px-4 py-2 transition-all duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="hidden rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 md:inline-flex"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/amari-b-ab932b176/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-full bg-blue-500/10 text-blue-400 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 bg-slate-900/95 px-6 py-3 md:hidden">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-3 text-sm text-slate-200 justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`rounded-full border border-white/10 px-3 py-2 transition ${
                activeSection === link.href.replace('#', '')
                  ? 'border-blue-500 text-white bg-blue-500/10'
                  : 'hover:border-blue-500 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default NavBar
