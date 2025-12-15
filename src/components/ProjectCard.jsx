import { ArrowUpRight, FileText, Github, User, Users, Wrench, CheckCircle } from 'lucide-react'

/**
 * ProjectCard component for SIP410 Boards compliance
 * Required fields: title, role, team, description, tools, links, meetsObjective (for objectives page)
 */
const ProjectCard = ({
  title,
  role,
  team,
  description,
  tools = [],
  links = {},
  meetsObjective = [],
  compact = false
}) => {
  const linkConfig = [
    { key: 'github', label: 'GitHub', icon: Github, style: 'border-white/15 bg-white/5 hover:border-blue-400' },
    { key: 'docs', label: 'Documentation', icon: FileText, style: 'border-amber-400/40 bg-amber-500/10 text-amber-200 hover:border-amber-300/80' },
  ]

  const teamNames = Array.isArray(team) ? team.join(', ') : team

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30 hover:bg-white/[0.07]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white leading-tight">{title}</h4>

          {/* Role */}
          {role && (
            <div className="mt-2 flex items-center gap-2 text-sm text-blue-400">
              <User size={14} />
              <span>{role}</span>
            </div>
          )}

          {/* Team Members */}
          {teamNames && (
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
              <Users size={14} />
              <span>{teamNames}</span>
            </div>
          )}
        </div>

        {Object.keys(links).length > 0 && (
          <span className="shrink-0 rounded-full bg-blue-500/10 p-2 text-blue-400">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>

      {/* Description */}
      <p className={`mt-4 text-sm leading-relaxed text-slate-300 ${compact ? 'line-clamp-3' : ''}`}>
        {description}
      </p>

      {/* Tools/Software */}
      {tools.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
            <Wrench size={12} />
            <span>Tools & Technologies</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* How This Meets the Objective */}
      {meetsObjective.length > 0 && (
        <div className="mt-4 rounded-xl bg-blue-500/5 border border-blue-500/10 p-4">
          <div className="flex items-center gap-2 text-xs font-medium text-blue-400 mb-2">
            <CheckCircle size={12} />
            <span>How This Meets the Objective</span>
          </div>
          <ul className="space-y-1.5">
            {meetsObjective.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      {Object.keys(links).length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {linkConfig.map(({ key, label, icon: Icon, style }) =>
            links[key] ? (
              <a
                key={key}
                href={links[key]}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition duration-200 hover:-translate-y-0.5 ${style}`}
              >
                <Icon size={14} />
                {label}
              </a>
            ) : null
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
