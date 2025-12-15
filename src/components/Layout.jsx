import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <Outlet />
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
