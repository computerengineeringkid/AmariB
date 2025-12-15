import { Sparkles, ArrowRight } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/portfolioData'

/**
 * Projects Page - Best Work Only
 * Showcases featured/strongest projects, distinct from Objectives page
 */
const Projects = () => {
  const handleScrollToObjectives = (e) => {
    e.preventDefault()
    const element = document.getElementById('objectives')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 mb-4">
          <Sparkles size={16} />
          Featured Work
        </div>
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          My strongest and most recent work. These projects represent the culmination
          of my skills across software development, networking, and business technology.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            role={project.role}
            team={project.team}
            description={project.description}
            tools={project.tools}
            links={project.links}
            compact={false}
          />
        ))}
      </div>

      {/* Call to Action - View Objectives */}
      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">
          See How These Projects Meet Degree Requirements
        </h3>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          View the Objectives page to see detailed explanations of how each project
          fulfills specific learning objectives across all three degrees.
        </p>
        <a
          href="#objectives"
          onClick={handleScrollToObjectives}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
        >
          View Objectives
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="text-3xl font-bold text-blue-400">{featuredProjects.length}</div>
          <div className="text-sm text-slate-400 mt-1">Featured Projects</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="text-3xl font-bold text-blue-400">3</div>
          <div className="text-sm text-slate-400 mt-1">Degrees</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="text-3xl font-bold text-blue-400">18</div>
          <div className="text-sm text-slate-400 mt-1">Objectives Covered</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="text-3xl font-bold text-blue-400">10+</div>
          <div className="text-sm text-slate-400 mt-1">Technologies Used</div>
        </div>
      </div>
    </div>
  )
}

export default Projects
