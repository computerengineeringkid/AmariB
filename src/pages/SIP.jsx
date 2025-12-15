const SIP = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Student Innovation Project</h2>
        <p className="mt-4 text-slate-400">A showcase of innovation and technical mastery.</p>
      </div>

      {/* Large Media Container */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        <div className="aspect-video w-full bg-slate-800 flex items-center justify-center">
            <span className="text-slate-600">Media Container (Image/Video/Diagram)</span>
        </div>
      </div>

      {/* Project Description */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h3 className="mb-6 text-2xl font-bold text-white">Project Description</h3>
        <div className="space-y-4 text-lg leading-relaxed text-slate-300">
          <p>
            This section contains the detailed description of the Student Innovation Project. 
            It explains the problem statement, the proposed solution, and the technologies used to implement it.
          </p>
          <p>
            The project demonstrates proficiency in multiple disciplines, integrating software development, 
            network engineering, and business technology principles.
          </p>
        </div>
      </div>

      {/* Community Statement */}
      <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-12">
        <h3 className="mb-6 text-2xl font-bold text-blue-400">Community Statement</h3>
        <p className="text-lg leading-relaxed text-slate-300">
          Placeholder text for the Community Statement. This section outlines the impact of the project 
          on the community and how it addresses specific needs or challenges.
        </p>
      </div>
    </div>
  )
}

export default SIP
