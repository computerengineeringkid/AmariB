import { Briefcase, Star } from 'lucide-react'

const Experience = () => {
  const skills = [
    "Python / FastAPI",
    "JavaScript / React / Next.js",
    "PostgreSQL / pgvector",
    "AWS (VPC, EC2, Lambda, RDS, S3)",
    "Docker / Containerization",
    "Network Architecture",
    "Cloud Migration",
    "Agile / Sprint Methodology",
    "Cross-Functional Collaboration",
    "Technical Documentation"
  ]

  return (
    <div className="space-y-20">
      {/* Experience Section */}
      <section>
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-white">
          <Briefcase className="text-blue-500" />
          Experience
        </h2>
        
        <div className="space-y-6">
          {/* Doctor Multimedia Internship */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/50 hover:bg-white/10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Doctor Multimedia</h3>
                <p className="text-lg text-blue-400">Technology Intern</p>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-slate-300">
                Internship
              </span>
            </div>
            <div className="mt-4 text-slate-300">
              <p className="mb-2">Reported to CFO Pras Murthy and CEO Ace Rogers.</p>
              <p>Contributed to AWS infrastructure migration from LiquidWeb, including planning and implementation of cloud architecture solutions.</p>
            </div>
          </div>

          {/* Ann Road Animal Hospital */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/50 hover:bg-white/10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Ann Road Animal Hospital</h3>
                <p className="text-lg text-blue-400">AI Associate</p>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-slate-300">
                2018 – Present
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-white">
          <Star className="text-blue-500" />
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="rounded-xl border border-white/10 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="mb-10 text-3xl font-bold text-white">Recommendations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
              <div>
                <h4 className="font-bold text-white">Pras Murthy</h4>
                <p className="text-sm text-slate-400">CFO, Doctor Multimedia</p>
              </div>
            </div>
            <p className="italic text-slate-300">
              "Placeholder for recommendation text..."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <div>
                <h4 className="font-bold text-white">Ace Rogers</h4>
                <p className="text-sm text-slate-400">CEO, Doctor Multimedia</p>
              </div>
            </div>
            <p className="italic text-slate-300">
              "Placeholder for recommendation text..."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
