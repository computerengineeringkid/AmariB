import NavBar from './NavBar'
import Home from '../pages/Home'
import Experience from '../pages/Experience'
import Portfolio from '../pages/Portfolio'
import SIP from '../pages/SIP'
import Contact from '../pages/Contact'

const Layout = () => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30">
      <NavBar />
      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 py-12">
          <Home />
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <Experience />
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <Portfolio />
        </section>

        <section id="sip" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <SIP />
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-20">
          <Contact />
        </section>
      </main>
      <footer className="border-t border-white/5 bg-slate-900 py-12 text-center">
        <div className="space-y-2">
          <p className="text-sm text-slate-400">@2025 Amari Bullard All Rights Reserved</p>
          <p className="text-xs text-slate-500 uppercase tracking-widest">Website by Saguaro Interactive</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
