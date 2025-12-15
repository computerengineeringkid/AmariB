import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('acs')

  const majors = [
    { id: 'acs', label: 'Advancing Computer Science' },
    { id: 'bus', label: 'Business Technology' },
    { id: 'net', label: 'Network Engineering' },
  ]

  // Helper to generate dummy data for 6 objectives x 2 projects
  const generateObjectives = (majorPrefix, titles) => {
    return titles.map((title, i) => ({
      id: i + 1,
      title: `${majorPrefix} Objective ${i + 1}: ${title}`,
      projects: [
        {
          title: `${majorPrefix} Project ${i + 1}A`,
          team: "Amari Bullard",
          description: "Description of the project, software used, and outcomes achieved.",
          links: {
            github: "#",
            docs: "#",
            youtube: "#",
            artstation: "#"
          }
        },
        {
          title: `${majorPrefix} Project ${i + 1}B`,
          team: "Amari Bullard",
          description: "Description of the project, software used, and outcomes achieved.",
          links: {
            github: "#",
            docs: "#"
          }
        }
      ]
    }))
  }

  const acsTitles = [
    "Document a software development process to analyze a problem and to design, build and test software solutions.",
    "Demonstrate software development skills using more than one programming language and development environment.",
    "Implement data-driven solutions.",
    "Design and implement software solutions for multiple platforms including mobile devices.",
    "Design, develop, and maintain object-oriented software solutions utilizing inheritance, encapsulation, polymorphism, and abstraction.",
    "Within software solutions, describe, implement and analyze data structure techniques."
  ]

  const neTitles = [
    "Analyze personal and organizational requirements and design an appropriate networking architecture.",
    "Develop cloud solutions emphasizing the benefits of remote infrastructure.",
    "Identify networking misconfigurations and determine solutions to achieve optimal performance.",
    "Demonstrate enterprise network administration through access controls, group policy, remote deployment, and backup recovery.",
    "Create networking solutions that incorporate traditional networking, IoT, and mobile devices.",
    "Demonstrate security principles within networking solutions based on industry standards."
  ]

  const btTitles = [
    "Demonstrate the ability to create and document technology strategies and product development plans.",
    "Demonstrate the ability to assemble the resources and infrastructure needed to successfully take technologies to market.",
    "Demonstrate the capacity to apply lean and Agile approaches in the development of an organizational mission, strategy and technology product.",
    "Demonstrate baseline knowledge of business operational elements (finance, legal, operations, resources, marketing, market analysis, manufacturing and supply infrastructure).",
    "Demonstrate competency in leading technology teams.",
    "Generate and visualize data for decision-making analytics that measure and communicate organizational performance."
  ]

  const acsObjectives = [
    {
      id: 1,
      title: `ACS Objective 1: ${acsTitles[0]}`,
      projects: [
        {
          title: "Canvas Tracker PWA",
          team: "Amari Bullard",
          description: "A Progressive Web App (PWA) built to track university assignments. The frontend utilizes React with Vite and Tailwind CSS for a responsive UI. The backend is powered by Flask (Python) using SQLAlchemy for database management and APScheduler for timed tasks.",
          links: {
            github: "#"
          }
        },
        {
          title: "ACS Project 1B",
          team: "Amari Bullard",
          description: "Placeholder for second project in this objective.",
          links: {
            github: "#"
          }
        }
      ]
    },
    {
      id: 2,
      title: `ACS Objective 2: ${acsTitles[1]}`,
      projects: [
        {
          title: "US93 Alerts Service",
          team: "Amari Bullard",
          description: "An automated alerting service tailored for monitoring traffic conditions along U.S. Route 93. Built using Python, it leverages the Requests library to fetch real-time data and delivers timely notifications. Focused on reproducible tooling and documentation.",
          links: {
            github: "#"
          }
        },
        {
          title: "ACS Project 2B",
          team: "Amari Bullard",
          description: "Placeholder for second project in this objective.",
          links: {
            github: "#"
          }
        }
      ]
    },
    {
      id: 3,
      title: `ACS Objective 3: ${acsTitles[2]}`,
      projects: [
        {
          title: "Hair by RA | Luxury Salon Website",
          team: "Saguaro Interactive (Amari Bullard)",
          description: "A high-performance commercial website for a luxury salon. Developed with semantic HTML5, advanced CSS3 (custom properties, keyframes), and Vanilla JavaScript for custom carousels. Features a \"Bento-style\" layout and integrated contact forms.",
          links: {
            github: "#"
          }
        },
        {
          title: "ACS Project 3B",
          team: "Amari Bullard",
          description: "Placeholder for second project in this objective.",
          links: {
            github: "#"
          }
        }
      ]
    },
    // Generate placeholders for 4, 5, 6
    ...Array.from({ length: 3 }, (_, i) => ({
      id: i + 4,
      title: `ACS Objective ${i + 4}: ${acsTitles[i + 3]}`,
      projects: [
        {
          title: `ACS Project ${i + 4}A`,
          team: "Amari Bullard",
          description: "Description of the project, software used, and outcomes achieved.",
          links: { github: "#" }
        },
        {
          title: `ACS Project ${i + 4}B`,
          team: "Amari Bullard",
          description: "Description of the project, software used, and outcomes achieved.",
          links: { github: "#" }
        }
      ]
    }))
  ]

  const portfolioData = {
    acs: acsObjectives,
    bus: generateObjectives('BusTech', btTitles),
    net: generateObjectives('NetEng', neTitles),
  }

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Portfolio</h2>
        <p className="mt-4 text-slate-400">
          Select a major to view the learning objectives and associated projects.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4">
        {majors.map((major) => (
          <button
            key={major.id}
            onClick={() => setActiveTab(major.id)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              activeTab === major.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {major.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="space-y-16">
        {portfolioData[activeTab].map((obj) => (
          <section key={obj.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 font-bold">
                {obj.id}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {obj.title}
              </h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {obj.projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
