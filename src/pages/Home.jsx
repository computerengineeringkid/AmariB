import { Linkedin } from 'lucide-react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="relative mb-8">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-75 blur-lg"></div>
        <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-slate-900 bg-slate-800 shadow-2xl">
          {/* Placeholder for headshot */}
          <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-600">
            <span className="text-4xl">AB</span>
          </div>
        </div>
      </div>

      <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
        Amari Bullard
      </h1>

      <div className="mb-8 flex flex-wrap justify-center gap-3 text-lg font-medium text-blue-400 sm:text-xl">
        <span>Advancing Computer Science</span>
        <span className="text-slate-600">•</span>
        <span>Business Technology</span>
        <span className="text-slate-600">•</span>
        <span>Network Engineering</span>
      </div>

      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
        My name is Amari Bullard. I am a student at the University of Advancing Technology. I study Computer Science, Network Engineering, and Business Technology.
      </p>

      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
      >
        <Linkedin className="h-5 w-5" />
        <span>Connect on LinkedIn</span>
      </a>
    </div>
  )
}

export default Home
