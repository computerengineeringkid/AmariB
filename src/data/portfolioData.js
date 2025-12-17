// Centralized portfolio data for SIP410 Boards compliance
// Each project must have: title, role, team, description, tools, links, meetsObjective

export const docs = {
  brandStrategy: "https://drive.google.com/file/d/1SM_r2CKPB5ZzJx3m0k-G_q7r1MvTjeAR/view",
  cyberInsurance: "https://drive.google.com/file/d/1g74MuNCL57Sib_mgiOHQ3k_dlvo856yg/view",
  disasterRecovery: "https://drive.google.com/file/d/13r4168gyp4xStIieYZYZoD7SzPhN3-Jg/view",
  enterpriseNetwork: "https://drive.google.com/file/d/1eAK_32XcYHUESSHNI2kCyq3O8F5iQw18/view",
  interpawsBusinessPlan: "https://drive.google.com/file/d/1Otixbxzk_RsNBku2o4hOkIPUtkQUnCk8/view",
  interpawsMasterPlan: "https://drive.google.com/file/d/1FaGi4FUeZXV0l-57_3T8iSZh-o6ArrFO/view",
  nexatechAwsMigration: "https://drive.google.com/file/d/1g1zpoB8ByG_6Kl9bEhahlhuKjTK7rTWm/view?usp=sharing",
  enterpriseSecurityPlan: "https://docs.google.com/document/d/1SkOjiSMdnFdjYyAwfkB-WZk8J4NZetb8/edit?usp=drive_link&ouid=110289498123879233388&rtpof=true&sd=true"
}

export const github = {
  interpaws: "https://github.com/computerengineeringkid/Interpaws",
  canvasTracker: "https://github.com/computerengineeringkid/canvas-tracker-pwaMAIN",
  animalHospital: "https://github.com/computerengineeringkid/animalhospitaloop",
  audiobookWorld: "https://github.com/computerengineeringkid/audiobook-world-mobile",
  emergencySos: "https://github.com/computerengineeringkid/emergency-sos-iot"
}

// Verbatim objective text from degree requirements
export const objectiveTexts = {
  acs: [
    "Document a software development process to analyze a problem and to design, build and test software solutions.",
    "Demonstrate software development skills using more than one programming language and development environment.",
    "Implement data-driven solutions.",
    "Design and implement software solutions for multiple platforms including mobile devices.",
    "Design, develop, and maintain object-oriented software solutions utilizing inheritance, encapsulation, polymorphism, and abstraction.",
    "Within software solutions, describe, implement and analyze data structure techniques."
  ],
  bus: [
    "Demonstrate the ability to create and document technology strategies and product development plans.",
    "Demonstrate the ability to assemble the resources and infrastructure needed to successfully take technologies to market.",
    "Demonstrate the capacity to apply lean and Agile approaches in the development of an organizational mission, strategy and technology product.",
    "Demonstrate baseline knowledge of business operational elements (finance, legal, operations, resources, marketing, market analysis, manufacturing and supply infrastructure).",
    "Demonstrate competency in leading technology teams.",
    "Generate and visualize data for decision-making analytics that measure and communicate organizational performance."
  ],
  net: [
    "Analyze personal and organizational requirements and design an appropriate networking architecture.",
    "Develop cloud solutions emphasizing the benefits of remote infrastructure.",
    "Identify networking misconfigurations and determine solutions to achieve optimal performance.",
    "Demonstrate enterprise network administration through access controls, group policy, remote deployment, and backup recovery.",
    "Create networking solutions that incorporate traditional networking, IoT, and mobile devices.",
    "Demonstrate security principles within networking solutions based on industry standards."
  ]
}

// All projects with complete SIP410-required fields
export const projects = {
  interpaws: {
    id: "interpaws",
    title: "Interpaws - AI Veterinary Practice Management",
    role: "Sole Developer & Project Lead",
    team: ["Amari Bullard"],
    description: "Full-stack veterinary practice management system with AI-powered scheduling. Features an 18-day documented sprint methodology, E2E testing, and iterative deployment phases. Built with Python/FastAPI backend, Next.js frontend, and PostgreSQL with pgvector for AI similarity search.",
    tools: ["Python", "FastAPI", "Next.js", "React", "PostgreSQL", "pgvector", "Docker", "Ollama", "SQLAlchemy", "Tailwind CSS"],
    links: { github: github.interpaws, docs: docs.interpawsMasterPlan },
    featured: true
  },
  canvasTracker: {
    id: "canvasTracker",
    title: "Canvas Tracker PWA",
    role: "Sole Developer",
    team: ["Amari Bullard"],
    description: "Progressive Web App for tracking university assignments with automatic Canvas LMS synchronization. Features Flask backend with SQLAlchemy ORM, APScheduler for background sync every 30 minutes, and Discord webhook notifications for due date alerts.",
    tools: ["Python", "Flask", "SQLAlchemy", "SQLite", "React", "Vite", "APScheduler", "Discord Webhooks", "Service Workers"],
    links: { github: github.canvasTracker },
    featured: true
  },
  animalHospital: {
    id: "animalHospital",
    title: "Animal Hospital OOP System",
    role: "Sole Developer",
    team: ["Amari Bullard"],
    description: "C++ console application demonstrating advanced OOP principles. Implements abstract base class DepartmentAssigner with pure virtual functions, AnimalHospital derived class with polymorphic behavior, and encapsulated department assignment logic using inheritance hierarchies.",
    tools: ["C++", "Visual Studio", "Object-Oriented Design", "UML"],
    links: { github: github.animalHospital },
    featured: false
  },
  audiobookWorld: {
    id: "audiobookWorld",
    title: "Audiobook World Mobile",
    role: "Sole Developer",
    team: ["Amari Bullard"],
    description: "Cross-platform React Native audiobook application built with Expo SDK 51. Features text-to-speech synthesis, real-time sentence highlighting, and AsyncStorage for offline persistence. Deployable to iOS, Android, and Web from a single codebase.",
    tools: ["React Native", "Expo SDK 51", "JavaScript", "AsyncStorage", "Text-to-Speech API", "VS Code"],
    links: { github: github.audiobookWorld },
    featured: true
  },
  emergencySos: {
    id: "emergencySos",
    title: "M5StickC Emergency SOS System",
    role: "Sole Developer",
    team: ["Amari Bullard"],
    description: "IoT emergency alert system using M5StickC Plus microcontroller. Integrates accelerometer for fall detection, WiFi networking for connectivity, and HTTP client to send real-time Discord webhook notifications when emergencies are detected.",
    tools: ["C++", "Arduino IDE", "M5StickC Plus", "WiFi Library", "HTTPClient", "Discord Webhooks"],
    links: { github: github.emergencySos },
    featured: true
  },
  enterpriseNetwork: {
    id: "enterpriseNetwork",
    title: "Enterprise Network Design",
    role: "Network Architect",
    team: ["Amari Bullard"],
    description: "Large-scale enterprise network architecture featuring Cisco Nexus 9000 switches, Cisco 3100 series firewall, dual ISP redundancy with automatic failover, and secure branch office connectivity. Includes comprehensive cost analysis and phased implementation plan.",
    tools: ["Cisco Nexus 9000", "Cisco Firewall 3100", "Cisco ISE", "VLANs", "BGP", "OSPF", "Visio", "Microsoft Word"],
    links: { docs: docs.enterpriseNetwork },
    featured: false
  },
  disasterRecovery: {
    id: "disasterRecovery",
    title: "Disaster Recovery Plan",
    role: "IT Infrastructure Planner",
    team: ["Amari Bullard"],
    description: "Comprehensive disaster recovery plan for a 200-employee IT company. Covers data center operations, satellite office VPN connectivity, backup strategies (daily incremental, weekly full), UPS failover, generator integration, and documented escalation procedures.",
    tools: ["Microsoft Word", "Visio", "AWS", "Azure", "Veeam Backup", "VMware"],
    links: { docs: docs.disasterRecovery },
    featured: false
  },
  cyberInsurance: {
    id: "cyberInsurance",
    title: "Cyber Insurance Policy Evaluation",
    role: "Security Analyst",
    team: ["Amari Bullard"],
    description: "Security assessment for Sentinel Shield cyber insurance policy. Evaluates MFA implementation, EDR deployment, incident response procedures, encryption standards (AES-256), and regulatory compliance including GLBA and PCI DSS requirements.",
    tools: ["Microsoft Word", "NIST Framework", "CIS Controls", "Risk Assessment Matrix"],
    links: { docs: docs.cyberInsurance },
    featured: false
  },
  interpawsBusinessPlan: {
    id: "interpawsBusinessPlan",
    title: "Interpaws Business Plan",
    role: "Business Strategist",
    team: ["Amari Bullard"],
    description: "Formal business plan for Interpaws including product/service strategy, market analysis of veterinary software industry, competitive landscape assessment, organizational structure design, and comprehensive testing procedures.",
    tools: ["Microsoft Word", "Excel", "Market Research Tools", "Financial Modeling"],
    links: { docs: docs.interpawsBusinessPlan },
    featured: false
  },
  brandStrategy: {
    id: "brandStrategy",
    title: "Interpaws Brand Strategy",
    role: "Marketing Strategist",
    team: ["Amari Bullard"],
    description: "Go-to-market strategy for Interpaws including advertising mix (Google Ads, LinkedIn, veterinary conferences), social media strategy across Facebook, Instagram, and LinkedIn, phased launch timeline, and KPI definitions for measuring success.",
    tools: ["Microsoft Word", "Canva", "Google Analytics", "HubSpot CRM"],
    links: { docs: docs.brandStrategy },
    featured: false
  },
  nexatechAwsMigration: {
    id: "nexatechAwsMigration",
    title: "NexaTech AWS Cloud Migration Plan (NTW216)",
    role: "Author / Cloud Architecture Designer",
    team: ["Amari Bullard"],
    description: "Comprehensive AWS architecture and migration plan for NexaTech focusing on scalability, reliability, monitoring, storage, and remote infrastructure benefits. Proposes a complete cloud solution leveraging AWS services for enterprise workloads.",
    tools: ["AWS VPC", "EC2", "Lambda", "ELB", "Auto Scaling", "RDS", "DynamoDB", "DMS", "SQS", "CloudWatch", "CloudTrail", "S3", "Glacier"],
    links: { docs: docs.nexatechAwsMigration },
    featured: false
  },
  enterpriseSecurityPlan: {
    id: "enterpriseSecurityPlan",
    title: "Enterprise Security Plan (Policy + Controls + Incident Response)",
    role: "Author / Security Planner",
    team: ["Amari Bullard"],
    description: "Comprehensive security controls and procedures document for a networked environment. Defines technical, administrative, and physical controls including monitoring, incident response planning, and governance frameworks.",
    tools: ["Access Control Policy", "AES-256 Encryption", "IDS/SIEM Monitoring", "Audit/Log Review", "Incident Response Planning"],
    links: { docs: docs.enterpriseSecurityPlan },
    featured: false
  },
  us93AlertsBot: {
    id: "us93AlertsBot",
    title: "US93 Alerts Bot",
    role: "Sole Developer",
    team: ["Amari Bullard"],
    description: "Python automation script that fetches real-time traffic data from the Arizona 511 API, filters for US-93 highway incidents, and sends Discord webhook notifications. Uses GitHub Actions for scheduled execution every 15 minutes and file-based state persistence to avoid duplicate alerts.",
    tools: ["Python", "GitHub Actions", "Discord Webhooks", "REST API", "JSON", "File I/O"],
    links: { github: "https://github.com/computerengineeringkid/us93-alerts" },
    featured: false
  },
  thingspeakIot: {
    id: "thingspeakIot",
    title: "Thingspeak IoT Data Logger",
    role: "Sole Developer",
    team: ["Amari Bullard"],
    description: "M5StickC Plus IoT application that collects sensor data and transmits it to ThingSpeak cloud platform for real-time visualization. Features WiFi connectivity, ThingSpeak API integration for data upload, and LCD display for local feedback. Demonstrates complete IoT data pipeline from device to cloud dashboard.",
    tools: ["C++", "Arduino IDE", "M5StickC Plus", "ThingSpeak API", "WiFi", "HTTP Client"],
    links: { github: "https://github.com/computerengineeringkid/Lab-5.1--Using-Thingspeak-API-to-collect-and-visualize-data" },
    featured: false
  },
  ninjaPirateOop: {
    id: "ninjaPirateOop",
    title: "Ninja vs Pirate OOP Demo",
    role: "Sole Developer",
    team: ["Amari Bullard"],
    description: "C++ console application demonstrating all four OOP pillars. Features abstract Character base class with pure virtual specialAction() method, Ninja and Pirate derived classes with polymorphic behavior, encapsulated health management with validation, and inheritance hierarchy for code reuse.",
    tools: ["C++", "Visual Studio", "Object-Oriented Design"],
    links: { github: "https://github.com/computerengineeringkid/oop-demo-ninja-pirate" },
    featured: false
  },
  mazeGenerator: {
    id: "mazeGenerator",
    title: "Maze Generator",
    role: "Sole Developer",
    team: ["Amari Bullard"],
    description: "C++ maze generation program using recursive depth-first search algorithm. Implements 2D vector grid for spatial data representation, Mersenne Twister for random direction shuffling, and recursive backtracking for path carving. Demonstrates dynamic memory allocation, bounds checking, and algorithm implementation.",
    tools: ["C++", "Visual Studio", "STL Vectors", "Recursion", "Mersenne Twister RNG"],
    links: { github: "https://github.com/computerengineeringkid/maze-generator" },
    featured: false
  }
}

// Objectives with 2+ projects each, including "meetsObjective" bullets
export const acsObjectives = [
  {
    id: 1,
    text: objectiveTexts.acs[0],
    projects: [
      {
        ...projects.interpaws,
        meetsObjective: [
          "Documented complete 18-day sprint methodology with daily goals and milestones",
          "Created E2E testing guide covering frontend and backend test strategies",
          "Implemented iterative development with three master plan versions (v1, v2, v3)",
          "Designed deployment phases from local development to production release"
        ]
      },
      {
        ...projects.canvasTracker,
        meetsObjective: [
          "Analyzed student assignment tracking problem and designed PWA solution",
          "Built complete Flask backend with SQLAlchemy data models",
          "Implemented automated testing with background task scheduling",
          "Documented full development process from requirements to deployment"
        ]
      }
    ]
  },
  {
    id: 2,
    text: objectiveTexts.acs[1],
    projects: [
      {
        ...projects.emergencySos,
        meetsObjective: [
          "C++ firmware development using Arduino IDE for M5StickC",
          "Embedded systems programming distinct from web development",
          "Hardware-software integration requiring different toolchain",
          "Low-level programming contrasting with high-level Python/JS work"
        ]
      },
      {
        ...projects.us93AlertsBot,
        meetsObjective: [
          "Python development distinct from C++/JavaScript used in other projects",
          "GitHub Actions CI/CD environment for automated execution",
          "REST API integration with Arizona 511 traffic system",
          "Different toolchain: Python scripts vs compiled applications"
        ]
      }
    ]
  },
  {
    id: 3,
    text: objectiveTexts.acs[2],
    projects: [
      {
        ...projects.interpaws,
        meetsObjective: [
          "PostgreSQL with pgvector for AI-powered vector similarity search",
          "Embedding storage and cosine similarity matching for intelligent recommendations",
          "AI feedback loop that learns from successful appointment outcomes",
          "Data-driven scheduling optimization based on historical patterns"
        ]
      },
      {
        ...projects.thingspeakIot,
        meetsObjective: [
          "ThingSpeak API integration for cloud data storage and visualization",
          "Real-time sensor data collection and transmission",
          "Data-driven dashboard updates based on device input",
          "IoT data pipeline: embedded device → WiFi → cloud API → visualization"
        ]
      }
    ]
  },
  {
    id: 4,
    text: objectiveTexts.acs[3],
    projects: [
      {
        ...projects.audiobookWorld,
        meetsObjective: [
          "React Native cross-platform app running on iOS, Android, and Web",
          "Expo SDK 51 enabling single codebase multi-platform deployment",
          "Mobile-optimized UI with touch gestures and responsive layouts",
          "AsyncStorage for cross-platform data persistence"
        ]
      },
      {
        ...projects.emergencySos,
        meetsObjective: [
          "M5StickC Plus embedded device platform distinct from mobile/web",
          "IoT device integration with cloud services and mobile notifications",
          "Hardware platform with accelerometer sensors and WiFi networking",
          "Cross-platform notification delivery to Discord mobile app"
        ]
      },
      {
        ...projects.canvasTracker,
        meetsObjective: [
          "Progressive Web App installable on mobile and desktop devices",
          "Service worker enabling offline capability across platforms",
          "Responsive design adapting to mobile, tablet, and desktop screens",
          "Background sync every 30 minutes regardless of active tab"
        ]
      }
    ]
  },
  {
    id: 5,
    text: objectiveTexts.acs[4],
    projects: [
      {
        ...projects.animalHospital,
        meetsObjective: [
          "Abstract base class DepartmentAssigner with pure virtual functions",
          "AnimalHospital derived class implementing polymorphic behavior",
          "Encapsulated department logic with private member access control",
          "Inheritance hierarchy demonstrating code reuse and extensibility"
        ]
      },
      {
        ...projects.ninjaPirateOop,
        meetsObjective: [
          "Abstract base class Character with pure virtual specialAction() function",
          "Polymorphic behavior through Ninja and Pirate derived class overrides",
          "Encapsulation with private health member and validated setter",
          "Inheritance hierarchy demonstrating code reuse and extensibility"
        ]
      }
    ]
  },
  {
    id: 6,
    text: objectiveTexts.acs[5],
    projects: [
      {
        ...projects.canvasTracker,
        meetsObjective: [
          "Relational models with foreign key relationships (Course → Assignment)",
          "Indexed queries for efficient data retrieval performance",
          "Hierarchical data: Courses → Assignments → Notifications structure",
          "Queue-based notification scheduling with APScheduler"
        ]
      },
      {
        ...projects.mazeGenerator,
        meetsObjective: [
          "2D vector grid (std::vector<std::vector<char>>) for spatial data representation",
          "Recursive depth-first search algorithm for maze generation",
          "Stack-based backtracking through recursion call stack",
          "Dynamic memory management with STL containers"
        ]
      }
    ]
  }
]

export const busObjectives = [
  {
    id: 1,
    text: objectiveTexts.bus[0],
    projects: [
      {
        ...projects.interpaws,
        title: "Interpaws Master Plans v1-v3",
        meetsObjective: [
          "Three iterations of comprehensive product strategy documentation",
          "Feature roadmaps with prioritization and dependency mapping",
          "Technical architecture decisions documented with rationale",
          "Development timelines with milestone tracking"
        ]
      },
      {
        ...projects.interpawsBusinessPlan,
        meetsObjective: [
          "Formal business plan with executive summary and vision statement",
          "Product/service plan detailing SaaS offering and pricing strategy",
          "Market analysis of veterinary software competitive landscape",
          "Testing procedures and quality assurance planning"
        ]
      }
    ]
  },
  {
    id: 2,
    text: objectiveTexts.bus[1],
    projects: [
      {
        ...projects.brandStrategy,
        title: "Brand Strategy & Market Launch",
        meetsObjective: [
          "Advertising mix strategy: Google Ads, LinkedIn, veterinary conferences",
          "Social media content strategy across Facebook, Instagram, LinkedIn",
          "Phased launch timeline: pre-launch, beta, pilot, public release",
          "KPI definitions for measuring go-to-market success"
        ]
      },
      {
        ...projects.interpawsBusinessPlan,
        title: "Interpaws Launch Infrastructure",
        meetsObjective: [
          "Marketing budget allocation and resource planning",
          "CRM implementation for lead management and conversion tracking",
          "Sales pipeline development with demo scheduling workflow",
          "Customer onboarding infrastructure and support systems"
        ]
      }
    ]
  },
  {
    id: 3,
    text: objectiveTexts.bus[2],
    projects: [
      {
        ...projects.interpaws,
        title: "Interpaws 18-Day Sprint",
        meetsObjective: [
          "AI-assisted sprint methodology with daily iteration cycles",
          "Context-switching optimization designed for ADHD workflow",
          "Daily review/debug sessions for continuous improvement",
          "Lean approach: minimal viable features prioritized for rapid delivery"
        ]
      },
      {
        ...projects.canvasTracker,
        title: "Canvas Tracker Agile Development",
        meetsObjective: [
          "Iterative development responding to personal productivity needs",
          "Continuous deployment with automated background sync features",
          "User feedback integration through notification preference tuning",
          "Lean methodology: solving one problem (assignment tracking) well"
        ]
      }
    ]
  },
  {
    id: 4,
    text: objectiveTexts.bus[3],
    projects: [
      {
        ...projects.interpawsBusinessPlan,
        title: "Interpaws Business Operations",
        meetsObjective: [
          "Finance: SaaS pricing model ($3000 setup + $300/month recurring)",
          "Legal: Saguaro Interactive LLC structure, IP protection strategy",
          "Marketing: Competitive analysis and positioning strategy",
          "Operations: Customer support workflow and escalation procedures"
        ]
      },
      {
        ...projects.brandStrategy,
        title: "Brand Strategy Operations",
        meetsObjective: [
          "Marketing budget: $100/week for 12 weeks allocated by channel",
          "Lead handling SLA: 24-hour reply, 72-hour demo scheduling",
          "CRM implementation for tracking leads through sales funnel",
          "Supply infrastructure: Cloud hosting, third-party integrations"
        ]
      }
    ]
  },
  {
    id: 5,
    text: objectiveTexts.bus[4],
    projects: [
      {
        ...projects.interpawsBusinessPlan,
        title: "Interpaws Organization Design",
        meetsObjective: [
          "Organizational structure: Founder/CEO, Lead Engineer, Product roles",
          "Defined responsibilities for Marketing Lead and Customer Support",
          "Advisory Board structure for strategic guidance",
          "Team scaling plan for growth phases"
        ]
      },
      {
        ...projects.interpaws,
        title: "SIP Project Leadership",
        role: "Project Lead & Sole Developer",
        meetsObjective: [
          "Led complete project lifecycle from ideation to deployment",
          "Managed technical decisions and architecture planning",
          "Coordinated documentation across Master Plans and Business Plan",
          "Self-directed sprint management with accountability tracking"
        ]
      }
    ]
  },
  {
    id: 6,
    text: objectiveTexts.bus[5],
    projects: [
      {
        ...projects.interpaws,
        title: "Interpaws Dashboard & KPIs",
        meetsObjective: [
          "Admin dashboard with calendar views and booking analytics",
          "Staff utilization metrics for resource optimization",
          "Revenue tracking and financial performance visualization",
          "Success metrics: activation time, wait time variance, conversion rates"
        ]
      },
      {
        ...projects.brandStrategy,
        title: "Brand Strategy KPIs",
        meetsObjective: [
          "Social media metrics: engagement rates, follower growth",
          "Marketing analytics: CTR, demo sign-ups, conversion rates",
          "Customer satisfaction scoring methodology",
          "Data visualization for stakeholder reporting"
        ]
      }
    ]
  }
]

export const netObjectives = [
  {
    id: 1,
    text: objectiveTexts.net[0],
    projects: [
      {
        ...projects.enterpriseNetwork,
        meetsObjective: [
          "Analyzed organizational requirements for 200+ employee company",
          "Designed network architecture with Cisco Nexus 9000 core switches",
          "Implemented dual ISP redundancy for high availability",
          "Created branch office connectivity with secure VPN tunnels"
        ]
      },
      {
        ...projects.disasterRecovery,
        meetsObjective: [
          "Analyzed business continuity requirements and RTO/RPO targets",
          "Designed network failover architecture with UPS and generator backup",
          "Planned satellite office VPN connectivity for remote operations",
          "Created escalation procedures based on organizational structure"
        ]
      }
    ]
  },
  {
    id: 2,
    text: objectiveTexts.net[1],
    projects: [
      {
        ...projects.interpaws,
        title: "Interpaws Cloud Deployment",
        meetsObjective: [
          "Docker containerization enabling cloud portability",
          "Vercel frontend deployment with global CDN distribution",
          "Cloud PostgreSQL provisioning with managed backups",
          "Environment variable management for secure configuration"
        ]
      },
      {
        ...projects.disasterRecovery,
        title: "Disaster Recovery Cloud Strategy",
        meetsObjective: [
          "AWS/Azure cloud backup for geographic redundancy",
          "On-demand scaling for disaster recovery failover",
          "Offsite data protection meeting compliance requirements",
          "Cost-benefit analysis of cloud vs on-premise DR solutions"
        ]
      },
      {
        ...projects.nexatechAwsMigration,
        meetsObjective: [
          "Designs remote/cloud infrastructure using AWS services to support workloads off-prem",
          "Highlights scalability/reliability with ELB + Auto Scaling + managed databases",
          "Includes monitoring/logging strategy (CloudWatch/CloudTrail) and storage/archival (S3/Glacier)",
          "Provides a migration approach (DMS) showing practical implementation planning"
        ]
      }
    ]
  },
  {
    id: 3,
    text: objectiveTexts.net[2],
    projects: [
      {
        ...projects.enterpriseNetwork,
        title: "Enterprise Network Optimization",
        meetsObjective: [
          "Identified latency issues exceeding 100ms during peak hours",
          "Diagnosed VLAN capacity limitations causing broadcast storms",
          "Configured QoS policies for traffic prioritization",
          "Implemented solutions reducing latency by 60%"
        ]
      },
      {
        ...projects.disasterRecovery,
        title: "DR Network Troubleshooting",
        meetsObjective: [
          "Identified single points of failure in network topology",
          "Diagnosed backup job failures due to bandwidth constraints",
          "Resolved VPN tunnel instability affecting remote sites",
          "Optimized replication schedules to avoid network congestion"
        ]
      }
    ]
  },
  {
    id: 4,
    text: objectiveTexts.net[3],
    projects: [
      {
        ...projects.disasterRecovery,
        title: "Disaster Recovery Implementation",
        meetsObjective: [
          "Daily incremental and weekly full backup procedures",
          "UPS failover with generator integration for power continuity",
          "Documented escalation paths for incident response",
          "Remote deployment procedures for DR site activation"
        ]
      },
      {
        ...projects.enterpriseNetwork,
        title: "Enterprise Access Controls",
        meetsObjective: [
          "Cisco ISE implementation for authentication and policy enforcement",
          "Role-based access controls mapped to organizational structure",
          "Group policy configuration for network resource access",
          "Audit logging and compliance reporting capabilities"
        ]
      }
    ]
  },
  {
    id: 5,
    text: objectiveTexts.net[4],
    projects: [
      {
        ...projects.emergencySos,
        meetsObjective: [
          "IoT device WiFi integration with traditional network infrastructure",
          "HTTP client communication bridging embedded and cloud systems",
          "Discord webhook API connecting IoT to mobile notifications",
          "Cross-platform solution: embedded device, cloud service, mobile app"
        ]
      },
      {
        ...projects.canvasTracker,
        title: "Canvas Tracker Webhook Integration",
        meetsObjective: [
          "Discord webhook implementation for real-time notifications",
          "API integration between web service and mobile platform",
          "Background sync enabling mobile notification delivery",
          "Traditional web server communicating with mobile messaging systems"
        ]
      }
    ]
  },
  {
    id: 6,
    text: objectiveTexts.net[5],
    projects: [
      {
        ...projects.cyberInsurance,
        meetsObjective: [
          "MFA implementation requirements based on NIST guidelines",
          "EDR deployment recommendations following CIS Controls",
          "Incident response procedures aligned with industry frameworks",
          "Regulatory compliance assessment: GLBA, PCI DSS requirements"
        ]
      },
      {
        ...projects.enterpriseNetwork,
        title: "Enterprise Network Security",
        meetsObjective: [
          "IPsec VPN tunnels with AES-256 encryption",
          "Firewall configuration following defense-in-depth principles",
          "Cisco Secure Network Analytics for threat monitoring",
          "Network segmentation isolating sensitive resources"
        ]
      },
      {
        ...projects.enterpriseSecurityPlan,
        meetsObjective: [
          "Documents security principles (CIA, least privilege, access controls) applied to network systems",
          "Defines controls (encryption, monitoring/IDS/SIEM, auditing) to align with common standards expectations",
          "Includes incident response approach and continuous monitoring practices",
          "Shows risk mitigation and governance through documented policy and procedures"
        ]
      }
    ]
  }
]

// Featured projects for the Projects/Portfolio page (best work only)
export const featuredProjects = [
  projects.interpaws,
  projects.canvasTracker,
  projects.audiobookWorld,
  projects.emergencySos
]

export const degrees = [
  { id: 'acs', label: 'Advancing Computer Science', objectives: acsObjectives },
  { id: 'bus', label: 'Business Technology', objectives: busObjectives },
  { id: 'net', label: 'Network Engineering', objectives: netObjectives }
]
