import NavBar from './NavBar'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Objectives from '../pages/Objectives'
import SIP from '../pages/SIP'
import About from '../pages/About'
import Contact from '../pages/Contact'

/**
 * Layout component - Single scroll page with anchor navigation
 * Nav order: Home → Projects → Objectives → SIP → About → Contact
 */
const Layout = () => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30">
      <NavBar />
      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 py-12">
          <Home />
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <Projects />
        </section>

        <section id="objectives" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <Objectives />
        </section>

        <section id="sip" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <SIP />
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <About />
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <Contact />
        </section>
      </main>
      <footer className="border-t border-white/5 bg-slate-900 py-12 text-center">
        <div className="space-y-4">
          {/* Quick Access for SMEs */}
          <div className="flex justify-center gap-6 text-sm">
            <a
              href="https://docs.google.com/document/d/1EmJlpqOfpms8y7LcIcwE_At-CgZ-jYeZzMfL4AKdczY/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Statement of Intent
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">© 2025 Amari Bullard. All Rights Reserved.</p>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Website by Saguaro Interactive</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
