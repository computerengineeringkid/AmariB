import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('acs')

  const majors = [
    { id: 'acs', label: 'Advancing Computer Science' },
    { id: 'bus', label: 'Business Technology' },
    { id: 'net', label: 'Network Engineering' },
  ]

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
          title: "Interpaws - AI Veterinary Practice Management",
          team: "Amari Bullard",
          description: "Full-stack VPMS with documented 18-day sprint methodology, E2E testing guide, deployment phases, and iterative development. Python/FastAPI backend, Next.js frontend, PostgreSQL with pgvector.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws",
            docs: "/docs/Interpaws_Master_Plan.pdf"
          }
        },
        {
          title: "Canvas Tracker PWA",
          team: "Amari Bullard",
          description: "Assignment tracking PWA with Flask backend, SQLAlchemy ORM, APScheduler for background tasks, and Discord webhook notifications. Full development documentation included.",
          links: {
            github: "https://github.com/computerengineeringkid/canvas-tracker-pwaMAIN"
          }
        }
      ]
    },
    {
      id: 2,
      title: `ACS Objective 2: ${acsTitles[1]}`,
      projects: [
        {
          title: "Multi-Language Portfolio",
          team: "Amari Bullard",
          description: "Demonstrates proficiency across C++ (Visual Studio), Python (PyCharm/VS Code), JavaScript/React (VS Code), and C/Arduino IDE. Projects span embedded systems to full-stack web applications.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "M5StickC Emergency System",
          team: "Amari Bullard",
          description: "IoT emergency alert system built with C++ in Arduino IDE. Uses M5StickC Plus, WiFi library, and HTTP client to send Discord notifications on fall detection.",
          links: {
            github: "https://github.com/computerengineeringkid/emergency-sos-iot"
          }
        }
      ]
    },
    {
      id: 3,
      title: `ACS Objective 3: ${acsTitles[2]}`,
      projects: [
        {
          title: "Interpaws Vector Search",
          team: "Amari Bullard",
          description: "PostgreSQL with pgvector for AI-powered vector similarity search. Implements embedding storage, cosine similarity matching, and an AI feedback loop that learns from successful appointments.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "Canvas Tracker Database",
          team: "Amari Bullard",
          description: "SQLite database with SQLAlchemy ORM tracking courses, assignments, grades, and notification history. Syncs with Canvas LMS API for real-time data updates.",
          links: {
            github: "https://github.com/computerengineeringkid/canvas-tracker-pwaMAIN"
          }
        }
      ]
    },
    {
      id: 4,
      title: `ACS Objective 4: ${acsTitles[3]}`,
      projects: [
        {
          title: "Audiobook World Mobile",
          team: "Amari Bullard",
          description: "React Native cross-platform audiobook app with Expo SDK 51. Features text-to-speech, sentence highlighting, AsyncStorage persistence. Runs on iOS, Android, and Web.",
          links: {
            github: "https://github.com/computerengineeringkid/audiobook-world-mobile"
          }
        },
        {
          title: "M5StickC Emergency IoT",
          team: "Amari Bullard",
          description: "Embedded IoT device using M5StickC Plus microcontroller. Integrates accelerometer for fall detection, WiFi networking, and HTTP webhook integration with Discord.",
          links: {
            github: "https://github.com/computerengineeringkid/emergency-sos-iot"
          }
        },
        {
          title: "Canvas Tracker PWA",
          team: "Amari Bullard",
          description: "Progressive Web App installable on mobile/desktop. Service worker for offline capability, background sync every 30 minutes.",
          links: {
            github: "https://github.com/computerengineeringkid/canvas-tracker-pwaMAIN"
          }
        }
      ]
    },
    {
      id: 5,
      title: `ACS Objective 5: ${acsTitles[4]}`,
      projects: [
        {
          title: "Animal Hospital OOP System",
          team: "Amari Bullard",
          description: "C++ console application demonstrating OOP concepts. Features abstract base class DepartmentAssigner with pure virtual functions, AnimalHospital derived class implementing polymorphic behavior, and encapsulated department logic.",
          links: {
            github: "https://github.com/computerengineeringkid/animalhospitaloop"
          }
        },
        {
          title: "Interpaws SQLAlchemy Models",
          team: "Amari Bullard",
          description: "Python OOP with SQLAlchemy ORM. Class hierarchy for Clinic, Staff, Client, Pet, Booking, and AIFeedbackLog with relationships, inheritance patterns, and encapsulated business logic.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        }
      ]
    },
    {
      id: 6,
      title: `ACS Objective 6: ${acsTitles[5]}`,
      projects: [
        {
          title: "Interpaws Data Architecture",
          team: "Amari Bullard",
          description: "Implements vectors (pgvector embeddings), hash tables (Python dictionaries for caching), linked data (SQLAlchemy relationships), and tree structures (nested JSON responses).",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "Canvas Tracker Relational Models",
          team: "Amari Bullard",
          description: "SQLAlchemy models with foreign key relationships, indexed queries, and efficient data retrieval patterns. Courses → Assignments → Notifications hierarchy.",
          links: {
            github: "https://github.com/computerengineeringkid/canvas-tracker-pwaMAIN"
          }
        }
      ]
    }
  ]

  const busObjectives = [
    {
      id: 1,
      title: `Business Tech Objective 1: ${btTitles[0]}`,
      projects: [
        {
          title: "Interpaws Master Plans v1-v3",
          team: "Amari Bullard",
          description: "Three iterations of product strategy documentation covering feature roadmaps, technical architecture decisions, AI integration plans, and development timelines.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws",
            docs: "/docs/Interpaws_Master_Plan.pdf"
          }
        },
        {
          title: "Interpaws Business Plan",
          team: "Amari Bullard",
          description: "Formal business plan including product/service plan, market analysis, competitive landscape, organization structure, and testing procedures.",
          links: {
            docs: "/docs/Interpaws_Business_Plan.pdf"
          }
        }
      ]
    },
    {
      id: 2,
      title: `Business Tech Objective 2: ${btTitles[1]}`,
      projects: [
        {
          title: "Brand Strategy & Market Launch",
          team: "Amari Bullard",
          description: "Marketing strategy for Interpaws including advertising mix (Google Ads, LinkedIn, conferences), social media strategy (Facebook, Instagram, LinkedIn), launch timeline phases, and KPI definitions.",
          links: {
            docs: "/docs/Brand_Strategy_Interpaws.pdf"
          }
        },
        {
          title: "Interpaws Launch Plan",
          team: "Amari Bullard",
          description: "Pre-launch, beta, pilot expansion, and public launch phases with specific tasks, marketing budget allocation, and conversion tracking.",
          links: {
            docs: "/docs/Interpaws_Business_Plan.pdf"
          }
        }
      ]
    },
    {
      id: 3,
      title: `Business Tech Objective 3: ${btTitles[2]}`,
      projects: [
        {
          title: "Interpaws 18-Day Sprint",
          team: "Amari Bullard",
          description: "AI-assisted sprint methodology with daily goals, context-switching for ADHD optimization, iterative development, daily review/debug sessions, and continuous integration practices.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws",
            docs: "/docs/Interpaws_Master_Plan.pdf"
          }
        }
      ]
    },
    {
      id: 4,
      title: `Business Tech Objective 4: ${btTitles[3]}`,
      projects: [
        {
          title: "Interpaws Business Operations",
          team: "Amari Bullard",
          description: "Saguaro Interactive LLC legal structure, SaaS pricing model ($3000 setup + $300/month), IP protection strategy (trademarks, trade secrets), market analysis, and risk mitigation.",
          links: {
            docs: "/docs/Interpaws_Business_Plan.pdf"
          }
        },
        {
          title: "Brand Strategy Operations",
          team: "Amari Bullard",
          description: "Marketing budget allocation ($100/week for 12 weeks), channel strategy, content themes, lead handling SLA (24-hour reply, 72-hour demo), and CRM implementation.",
          links: {
            docs: "/docs/Brand_Strategy_Interpaws.pdf"
          }
        }
      ]
    },
    {
      id: 5,
      title: `Business Tech Objective 5: ${btTitles[4]}`,
      projects: [
        {
          title: "Interpaws Organization Design",
          team: "Amari Bullard",
          description: "Designed organizational structure including Founder/CEO, Lead Engineer, Product Managers, Marketing Lead, Customer Support, and Advisory Board roles with defined responsibilities.",
          links: {
            docs: "/docs/Interpaws_Business_Plan.pdf"
          }
        },
        {
          title: "Production Studios Experience",
          team: "Amari Bullard",
          description: "Marketing team collaboration in UAT Production Studios, coordinating deliverables and contributing to cross-functional project goals.",
          links: {}
        }
      ]
    },
    {
      id: 6,
      title: `Business Tech Objective 6: ${btTitles[5]}`,
      projects: [
        {
          title: "Interpaws Dashboard & KPIs",
          team: "Amari Bullard",
          description: "Admin dashboard with calendar views, booking analytics, staff utilization metrics, and revenue tracking. Success metrics include activation time, wait time variance, and conversion rates.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "Brand Strategy KPIs",
          team: "Amari Bullard",
          description: "Defined performance metrics including social media engagement, follower growth, CTR, demo sign-ups, conversion rates, and customer satisfaction scores.",
          links: {
            docs: "/docs/Brand_Strategy_Interpaws.pdf"
          }
        }
      ]
    }
  ]

  const netObjectives = [
    {
      id: 1,
      title: `Network Eng Objective 1: ${neTitles[0]}`,
      projects: [
        {
          title: "Enterprise Network Design",
          team: "Amari Bullard",
          description: "Large-scale enterprise network design featuring Cisco Nexus 9000 switches, Cisco 3100 series firewall, dual ISP redundancy, and branch office connectivity. Includes cost analysis and implementation phases.",
          links: {
            docs: "/docs/Enterprise_Network_Design.pdf"
          }
        },
        {
          title: "Disaster Recovery Plan",
          team: "Amari Bullard",
          description: "DR plan for 200-employee IT company with data center, satellite office VPN, backup strategies, failover systems, and emergency response procedures.",
          links: {
            docs: "/docs/Disaster_Recovery_Plan.pdf"
          }
        }
      ]
    },
    {
      id: 2,
      title: `Network Eng Objective 2: ${neTitles[1]}`,
      projects: [
        {
          title: "Interpaws Cloud Deployment",
          team: "Amari Bullard",
          description: "Docker containerization, Vercel frontend deployment, cloud PostgreSQL provisioning, and environment variable management for production infrastructure.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws",
            docs: "/docs/Interpaws_Master_Plan.pdf"
          }
        },
        {
          title: "Disaster Recovery Cloud Strategy",
          team: "Amari Bullard",
          description: "Cloud backup implementation using AWS/Azure for geographic redundancy, on-demand scaling, and offsite data protection.",
          links: {
            docs: "/docs/Disaster_Recovery_Plan.pdf"
          }
        }
      ]
    },
    {
      id: 3,
      title: `Network Eng Objective 3: ${neTitles[2]}`,
      projects: [
        {
          title: "Enterprise Network Optimization",
          team: "Amari Bullard",
          description: "Identified and resolved network issues including latency exceeding 100ms during peak hours, VLAN capacity limitations, and QoS configuration for traffic prioritization.",
          links: {
            docs: "/docs/Enterprise_Network_Design.pdf"
          }
        }
      ]
    },
    {
      id: 4,
      title: `Network Eng Objective 4: ${neTitles[3]}`,
      projects: [
        {
          title: "Disaster Recovery Implementation",
          team: "Amari Bullard",
          description: "Comprehensive backup/recovery procedures including daily incremental backups, weekly full backups, UPS failover, generator integration, and documented escalation paths.",
          links: {
            docs: "/docs/Disaster_Recovery_Plan.pdf"
          }
        },
        {
          title: "Enterprise Access Controls",
          team: "Amari Bullard",
          description: "Cisco Identity Services Engine (ISE) implementation for authentication and policy enforcement, role-based access controls, and audit logging.",
          links: {
            docs: "/docs/Enterprise_Network_Design.pdf"
          }
        }
      ]
    },
    {
      id: 5,
      title: `Network Eng Objective 5: ${neTitles[4]}`,
      projects: [
        {
          title: "M5StickC Emergency System",
          team: "Amari Bullard",
          description: "IoT networking solution integrating embedded device WiFi, HTTP client communication, and Discord webhook API. Demonstrates traditional networking with IoT and mobile notification integration.",
          links: {
            github: "https://github.com/computerengineeringkid/emergency-sos-iot"
          }
        },
        {
          title: "Canvas Tracker Webhook Integration",
          team: "Amari Bullard",
          description: "Discord webhook implementation for real-time notifications, demonstrating API integration between web services and mobile notification platforms.",
          links: {
            github: "https://github.com/computerengineeringkid/canvas-tracker-pwaMAIN"
          }
        }
      ]
    },
    {
      id: 6,
      title: `Network Eng Objective 6: ${neTitles[5]}`,
      projects: [
        {
          title: "Cyber Insurance Policy Evaluation",
          team: "Amari Bullard",
          description: "Comprehensive security assessment for Sentinel Shield including MFA implementation, EDR deployment, incident response procedures, encryption standards, and regulatory compliance (GLBA, PCI DSS).",
          links: {
            docs: "/docs/Cyber_Insurance_Policy.pdf"
          }
        },
        {
          title: "Enterprise Network Security",
          team: "Amari Bullard",
          description: "IPsec VPN tunnels, end-to-end encryption, firewall configuration, and security monitoring with Cisco Secure Network Analytics.",
          links: {
            docs: "/docs/Enterprise_Network_Design.pdf"
          }
        }
      ]
    }
  ]

  const portfolioData = {
    acs: acsObjectives,
    bus: busObjectives,
    net: netObjectives,
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
