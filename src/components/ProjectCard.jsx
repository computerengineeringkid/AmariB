import { ArrowUpRight, FileText, Github, Palette, Youtube } from 'lucide-react'

const ProjectCard = ({ title, team, description, links }) => {
  const badges = [
    { key: 'github', label: 'GitHub', icon: Github, style: 'border-white/15 bg-white/5 hover:border-accent' },
    { key: 'artstation', label: 'ArtStation', icon: Palette, style: 'border-accent/30 bg-accent/10 text-accent hover:border-accent/60 hover:text-white' },
    { key: 'youtube', label: 'YouTube', icon: Youtube, style: 'border-rose-400/40 bg-rose-500/10 text-rose-200 hover:border-rose-300/80 hover:text-white' },
    { key: 'docs', label: 'Google Docs', icon: FileText, style: 'border-gold/40 bg-gold/10 text-gold hover:border-gold/70 hover:text-ink' },
  ]

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
      <div className="absolute inset-px rounded-2xl border border-white/5" aria-hidden />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Project</p>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-300">Team Members: {team}</p>
        </div>
        <span className="rounded-full bg-accent/10 p-2 text-accent">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-slate-200 line-clamp-4">{description}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {badges.map(({ key, label, icon: Icon, style }) =>
          links?.[key] ? (
            <a
              key={key}
              href={links[key]}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${style}`}
            >
              <Icon size={14} />
              {label}
            </a>
          ) : null,
        )}
      </div>
    </div>
  )
}

export default ProjectCard
