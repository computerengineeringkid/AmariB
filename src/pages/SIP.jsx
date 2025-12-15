import { Github, ExternalLink } from 'lucide-react'

const SIP = () => {
  const features = [
    "AI-Powered Intelligent Scheduling",
    "Learning Feedback Loop System",
    "Admin Dashboard with KPIs",
    "Client Portal for Appointments",
    "Vector Search with pgvector",
    "Containerized with Docker"
  ]

  const techStack = [
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Next.js", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "pgvector", category: "AI/ML" },
    { name: "Docker", category: "DevOps" },
    { name: "Ollama", category: "AI/ML" }
  ]

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Student Innovation Project</h2>
        <p className="mt-4 text-slate-400">Interpaws - AI-Powered Veterinary Practice Management System</p>
      </div>

      {/* Large Media Container */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        <div className="aspect-video w-full bg-gradient-to-br from-blue-900/50 to-indigo-900/50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-4">🐾 Interpaws</div>
            <p className="text-xl text-blue-300">AI-Powered Veterinary Practice Management</p>
          </div>
        </div>
      </div>

      {/* GitHub Link */}
      <div className="flex justify-center">
        <a
          href="https://github.com/computerengineeringkid/Interpaws"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 rounded-full bg-slate-800 border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <Github className="h-5 w-5" />
          <span>View on GitHub</span>
          <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
        </a>
      </div>

      {/* Project Description */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h3 className="mb-6 text-2xl font-bold text-white">Project Description</h3>
        <div className="space-y-4 text-lg leading-relaxed text-slate-300">
          <p>
            Interpaws is an AI-powered veterinary practice management system designed to revolutionize 
            how veterinary clinics handle scheduling, client communication, and practice analytics. 
            The system leverages artificial intelligence to optimize appointment scheduling, predict 
            client needs, and provide actionable insights through a comprehensive admin dashboard.
          </p>
          <p>
            Built with a modern tech stack including Python and FastAPI for the backend, Next.js for 
            the frontend, and PostgreSQL with pgvector for AI-powered vector similarity search. The 
            entire application is containerized with Docker for easy deployment and scalability.
          </p>
          <p>
            Key innovations include a learning feedback loop that continuously improves scheduling 
            recommendations based on historical data, and intelligent client matching using vector 
            embeddings powered by Ollama for local AI inference.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h3 className="mb-6 text-2xl font-bold text-white">Technology Stack</h3>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="rounded-xl border border-white/10 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white"
            >
              <span className="text-blue-400">{tech.category}:</span> {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h3 className="mb-6 text-2xl font-bold text-white">Key Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-900/30 px-5 py-4"
            >
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Community Statement */}
      <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-12">
        <h3 className="mb-6 text-2xl font-bold text-blue-400">Community Statement</h3>
        <p className="text-lg leading-relaxed text-slate-300">
          Interpaws addresses a critical need in veterinary practice management by providing 
          affordable, AI-powered tools to small and medium-sized clinics. By automating scheduling 
          and providing data-driven insights, veterinary professionals can focus more on patient 
          care and less on administrative overhead. The system is designed to be accessible, 
          scalable, and aligned with the goal of improving animal healthcare through technology innovation.
        </p>
      </div>
    </div>
  )
}

export default SIP
