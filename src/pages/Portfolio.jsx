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
          description: "AI-powered veterinary practice management system built with Python, FastAPI, Next.js, PostgreSQL, and pgvector. Features intelligent scheduling, learning feedback loops, and comprehensive documentation of the full software development lifecycle.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "Canvas Tracker PWA",
          team: "Amari Bullard",
          description: "A Progressive Web App (PWA) built to track university assignments. The frontend utilizes React with Vite and Tailwind CSS for a responsive UI. The backend is powered by Flask (Python) using SQLAlchemy for database management and APScheduler for timed tasks.",
          links: {
            github: "#"
          }
        },
        {
          title: "US 93 Alerts Service",
          team: "Amari Bullard",
          description: "An automated alerting service for monitoring traffic conditions along U.S. Route 93. Built using Python with the Requests library to fetch real-time data and deliver timely notifications.",
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
          title: "Interpaws - Multi-Language Development",
          team: "Amari Bullard",
          description: "Demonstrates proficiency across multiple languages: Python (FastAPI backend, AI/ML integration), JavaScript/TypeScript (Next.js frontend), SQL (PostgreSQL with pgvector), and Docker containerization.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "React Native Mobile Apps",
          team: "Amari Bullard",
          description: "Mobile application development using React Native and JavaScript, demonstrating cross-platform development skills for iOS and Android environments.",
          links: {
            github: "#"
          }
        },
        {
          title: "Arduino C++ Projects",
          team: "Amari Bullard",
          description: "Embedded systems programming using Arduino and C++ for IoT device development, demonstrating hardware-software integration skills.",
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
          title: "Interpaws - Data-Driven Architecture",
          team: "Amari Bullard",
          description: "Implements PostgreSQL with pgvector for AI-powered vector similarity search, enabling intelligent appointment scheduling and client matching based on historical data patterns.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "Canvas Tracker - Assignment Analytics",
          team: "Amari Bullard",
          description: "Data-driven assignment tracking system using SQLAlchemy ORM with Flask backend, featuring automated data synchronization and analytics for academic planning.",
          links: {
            github: "#"
          }
        }
      ]
    },
    {
      id: 4,
      title: `ACS Objective 4: ${acsTitles[3]}`,
      projects: [
        {
          title: "React Native SOS Emergency App",
          team: "Amari Bullard",
          description: "Cross-platform mobile emergency response application built with React Native, featuring location services, emergency contact integration, and real-time notifications for iOS and Android.",
          links: {
            github: "#"
          }
        },
        {
          title: "React Native Audiobook App",
          team: "Amari Bullard",
          description: "Mobile audiobook player application developed with React Native, featuring audio streaming, offline playback, and cross-platform compatibility.",
          links: {
            github: "#"
          }
        }
      ]
    },
    {
      id: 5,
      title: `ACS Objective 5: ${acsTitles[4]}`,
      projects: [
        {
          title: "Interpaws - OOP Python Architecture",
          team: "Amari Bullard",
          description: "Object-oriented Python backend featuring well-structured classes for appointments, clients, patients, and AI services. Demonstrates encapsulation, inheritance, and polymorphism in a production-ready codebase.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "Animal Hospital C++ System",
          team: "Amari Bullard",
          description: "C++ application demonstrating advanced OOP concepts including abstract classes, inheritance hierarchies, polymorphism, and encapsulation for veterinary record management.",
          links: {
            github: "#"
          }
        }
      ]
    },
    {
      id: 6,
      title: `ACS Objective 6: ${acsTitles[5]}`,
      projects: [
        {
          title: "Interpaws - Data Models & Structures",
          team: "Amari Bullard",
          description: "Implementation of complex data structures including relational models for appointments, clients, and patients, with vector embeddings for AI-powered search and recommendation systems.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "CSC 382 Data Structures Coursework",
          team: "Amari Bullard",
          description: "Academic coursework demonstrating implementation and analysis of fundamental data structures including arrays, linked lists, trees, graphs, and hash tables.",
          links: {
            github: "#"
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
          title: "Interpaws Masterplans v1/v2/v3",
          team: "Amari Bullard",
          description: "Comprehensive technology strategy documentation including product roadmaps, feature specifications, and development timelines across three major planning iterations.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        },
        {
          title: "BUS 200 Business Plan",
          team: "Amari Bullard",
          description: "Formal business plan development covering market analysis, competitive positioning, financial projections, and go-to-market strategy.",
          links: {
            docs: "#"
          }
        }
      ]
    },
    {
      id: 2,
      title: `Business Tech Objective 2: ${btTitles[1]}`,
      projects: [
        {
          title: "Platinum Development - Client Delivery",
          team: "Amari Bullard",
          description: "End-to-end technology delivery for clients, demonstrating the ability to assemble resources, manage infrastructure, and successfully deliver technology products to market.",
          links: {
            docs: "#"
          }
        }
      ]
    },
    {
      id: 3,
      title: `Business Tech Objective 3: ${btTitles[2]}`,
      projects: [
        {
          title: "Interpaws Sprint Methodology",
          team: "Amari Bullard",
          description: "Application of Agile/Lean methodologies in Interpaws development, including sprint planning, iterative development cycles, and continuous improvement practices.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        }
      ]
    },
    {
      id: 4,
      title: `Business Tech Objective 4: ${btTitles[3]}`,
      projects: [
        {
          title: "Interpaws Business Plan",
          team: "Amari Bullard",
          description: "Comprehensive business operations planning including pricing strategies, legal considerations, marketing plans, and operational workflows for veterinary practice management SaaS.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
          }
        }
      ]
    },
    {
      id: 5,
      title: `Business Tech Objective 5: ${btTitles[4]}`,
      projects: [
        {
          title: "Production Studios Leadership",
          team: "Amari Bullard",
          description: "Team leadership experience in production studio environment, coordinating cross-functional teams and managing project deliverables.",
          links: {
            docs: "#"
          }
        },
        {
          title: "Doctor Multimedia Internship",
          team: "Amari Bullard",
          description: "Technology internship experience reporting to CFO Pras Murthy and CEO Ace Rogers, contributing to AWS infrastructure migration and team collaboration.",
          links: {
            docs: "#"
          }
        }
      ]
    },
    {
      id: 6,
      title: `Business Tech Objective 6: ${btTitles[5]}`,
      projects: [
        {
          title: "Interpaws Admin Dashboard",
          team: "Amari Bullard",
          description: "Data visualization dashboard featuring KPI tracking, calendar views, revenue analytics, and performance metrics for veterinary practice management decision-making.",
          links: {
            github: "https://github.com/computerengineeringkid/Interpaws"
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
          title: "NexaTech AWS Architecture Design",
          team: "Amari Bullard",
          description: "Comprehensive network architecture design for AWS cloud infrastructure, analyzing organizational requirements and designing scalable, secure networking solutions.",
          links: {
            docs: "#"
          }
        },
        {
          title: "Doctor Multimedia Infrastructure Migration",
          team: "Amari Bullard",
          description: "Network architecture planning for migration from LiquidWeb to AWS, including requirements analysis and infrastructure design.",
          links: {
            docs: "#"
          }
        }
      ]
    },
    {
      id: 2,
      title: `Network Eng Objective 2: ${neTitles[1]}`,
      projects: [
        {
          title: "NexaTech Cloud Solutions",
          team: "Amari Bullard",
          description: "Cloud infrastructure implementation featuring VPC networking, EC2 compute instances, Lambda serverless functions, RDS database services, and S3 storage solutions on AWS.",
          links: {
            docs: "#"
          }
        }
      ]
    },
    {
      id: 3,
      title: `Network Eng Objective 3: ${neTitles[2]}`,
      projects: [
        {
          title: "Cyber Insurance Gap Analysis",
          team: "Amari Bullard",
          description: "Security assessment identifying network misconfigurations and vulnerabilities, with recommendations for achieving optimal security posture and compliance.",
          links: {
            docs: "#"
          }
        }
      ]
    },
    {
      id: 4,
      title: `Network Eng Objective 4: ${neTitles[3]}`,
      projects: [
        {
          title: "Disaster Recovery Plan",
          team: "Amari Bullard",
          description: "Enterprise network administration documentation including backup recovery procedures, remote deployment strategies, and business continuity planning.",
          links: {
            docs: "#"
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
          description: "IoT networking solution integrating M5StickC devices with traditional networking and mobile applications for emergency response scenarios.",
          links: {
            github: "#"
          }
        }
      ]
    },
    {
      id: 6,
      title: `Network Eng Objective 6: ${neTitles[5]}`,
      projects: [
        {
          title: "Cyber Insurance Policy Implementation",
          team: "Amari Bullard",
          description: "Security principles documentation and implementation based on industry standards for cyber insurance compliance and risk management.",
          links: {
            docs: "#"
          }
        },
        {
          title: "NexaTech Security Architecture",
          team: "Amari Bullard",
          description: "Network security implementation featuring AWS security groups, IAM policies, encryption, and industry-standard security practices.",
          links: {
            docs: "#"
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
