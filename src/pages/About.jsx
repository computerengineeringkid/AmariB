import { Briefcase, Star, GraduationCap } from 'lucide-react'

/**
 * About Page - Personal information, experience, and skills
 * Note: Does not display personal phone/email per SIP410 guidelines
 */
const About = () => {
  const skills = [
    "Python / FastAPI",
    "JavaScript / React / Next.js",
    "PostgreSQL / pgvector",
    "AWS (VPC, EC2, Lambda, RDS, S3)",
    "Docker / Containerization",
    "Network Architecture",
    "Cisco Networking",
    "Cloud Migration",
    "Agile / Sprint Methodology",
    "Technical Documentation"
  ]

  const education = [
    {
      school: "University of Advancing Technology",
      degrees: [
        "B.S. Advancing Computer Science",
        "B.S. Business Technology",
        "B.S. Network Engineering"
      ],
      status: "Expected 2025"
    }
  ]

  const experience = [
    {
      company: "Doctor Multimedia",
      role: "Technology Intern",
      period: "Internship",
      description: "Reported to CFO Pras Murthy and CEO Ace Rogers. Contributed to AWS infrastructure migration from LiquidWeb, including planning and implementation of cloud architecture solutions."
    },
    {
      company: "Ann Road Animal Hospital",
      role: "Veterinary Assistant & IT Support Specialist",
      period: "2018 – Present",
      description: "Providing veterinary care assistance while managing IT infrastructure, network maintenance, and technical support for the hospital. This experience directly inspired the Interpaws SIP project."
    }
  ]

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Software developer and network engineer with hands-on experience in veterinary technology,
          cloud infrastructure, and full-stack development.
        </p>
      </div>

      {/* Education */}
      <section>
        <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
          <GraduationCap className="text-blue-500" />
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-xl font-semibold text-white">{edu.school}</h4>
                <span className="rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
                  {edu.status}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {edu.degrees.map((degree) => (
                  <span
                    key={degree}
                    className="rounded-lg bg-slate-800/80 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {degree}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
          <Briefcase className="text-blue-500" />
          Experience
        </h3>
        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={job.company}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">{job.company}</h4>
                  <p className="text-blue-400">{job.role}</p>
                </div>
                <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-slate-300">
                  {job.period}
                </span>
              </div>
              <p className="mt-4 text-slate-300 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
          <Star className="text-blue-500" />
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/10 bg-slate-900/50 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
