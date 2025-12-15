import { useState } from 'react'
import { GraduationCap, Target } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { degrees } from '../data/portfolioData'

/**
 * Objectives Page - SIP410 Boards Compliance
 * Displays verbatim degree objectives with 2+ projects per objective
 */
const Objectives = () => {
  const [activeDegree, setActiveDegree] = useState('acs')

  const currentDegree = degrees.find(d => d.id === activeDegree)

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 mb-4">
          <GraduationCap size={16} />
          Degree Objectives
        </div>
        <h2 className="text-4xl font-bold text-white">Learning Objectives</h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Each objective below is typed verbatim from degree requirements.
          Every objective includes 2+ projects demonstrating mastery.
        </p>
      </div>

      {/* Degree Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {degrees.map((degree) => (
          <button
            key={degree.id}
            onClick={() => setActiveDegree(degree.id)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              activeDegree === degree.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {degree.label}
          </button>
        ))}
      </div>

      {/* Objectives List */}
      <div className="space-y-16">
        {currentDegree?.objectives.map((objective) => (
          <section key={objective.id} className="scroll-mt-24">
            {/* Objective Header */}
            <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Target size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-400 mb-1">
                    Objective {objective.id}
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-relaxed">
                    {objective.text}
                  </h3>
                </div>
              </div>
            </div>

            {/* Projects for this Objective */}
            <div className="grid gap-6 lg:grid-cols-2">
              {objective.projects.map((project, index) => (
                <ProjectCard
                  key={`${objective.id}-${index}`}
                  title={project.title}
                  role={project.role}
                  team={project.team}
                  description={project.description}
                  tools={project.tools}
                  links={project.links}
                  meetsObjective={project.meetsObjective}
                />
              ))}
            </div>

            {/* Project Count Indicator */}
            <div className="mt-4 text-center text-sm text-slate-500">
              {objective.projects.length} project{objective.projects.length !== 1 ? 's' : ''} demonstrating this objective
            </div>
          </section>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-lg font-semibold text-white mb-6">Degree Summary</h3>
        <div className="grid grid-cols-3 gap-6">
          {degrees.map((degree) => {
            const totalProjects = degree.objectives.reduce((sum, obj) => sum + obj.projects.length, 0)
            const minProjects = Math.min(...degree.objectives.map(obj => obj.projects.length))
            return (
              <div key={degree.id} className="text-center">
                <div className="text-2xl font-bold text-blue-400">{degree.objectives.length}</div>
                <div className="text-sm text-slate-400">{degree.label}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {totalProjects} projects total
                  {minProjects >= 2 && (
                    <span className="text-green-400 ml-1">✓</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Objectives
