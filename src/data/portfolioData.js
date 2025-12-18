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
        id: "bus1-project1",
        title: "Management Presentation",
        role: "Business Strategist",
        team: ["Amari Bullard"],
        description: "Developed a strategic management framework outlining the necessity of planning (\"Plan out what you are going to do\") to prevent organizational chaos. Defined the strategy for monitoring business practices to prevent inefficiencies from running \"wild\".",
        tools: ["Microsoft PowerPoint", "Strategic Planning", "Business Analysis"],
        links: { docs: "https://docs.google.com/presentation/d/1RynUtyBCjJbf7rDyouT_A98ow73kqvDq/edit?usp=sharing&ouid=115978480032856245481&rtpof=true&sd=true" },
        meetsObjective: [
          "Created strategic management framework for organizational planning",
          "Defined planning protocols to prevent organizational chaos",
          "Established monitoring strategy for business practices",
          "Documented strategies to prevent operational inefficiencies"
        ]
      },
      {
        id: "bus1-project2",
        title: "Saguaro Interactive (Software Division)",
        role: "Business Strategist",
        team: ["Amari Bullard"],
        description: "Authored a comprehensive Business Plan strategy that defines the product vision (\"Fewer bottlenecks, More care\") and the strategic roadmap for market entry. Documented the launch timeline across six distinct phases, from prototype refinement to public launch.",
        tools: ["Microsoft Word", "Business Planning", "Market Strategy", "Product Roadmap"],
        links: { 
          live: "https://saguarointeractive.com/", 
          demo: "https://interpaws.com/", 
          docs: "https://docs.google.com/document/d/1NAa1nzV8lcNk9fwD24V-8Hpa-V0BvmEe/edit?usp=sharing&ouid=115978480032856245481&rtpof=true&sd=true" 
        },
        meetsObjective: [
          "Authored comprehensive Business Plan with product vision",
          "Defined strategic roadmap for market entry",
          "Documented six-phase launch timeline",
          "Created product development plan from prototype to public launch"
        ]
      }
    ]
  },
  {
    id: 2,
    text: objectiveTexts.bus[1],
    projects: [
      {
        ...projects.emergencySos,
        title: "M5StickC SOS System",
        description: "Assembled a hardware and network infrastructure using IoT microcontrollers (M5StickC Plus) and WiFi telemetry to support real-time emergency data transmission. Integrated accelerometer sensors and HTTP clients to create a functional safety device infrastructure.",
        meetsObjective: [
          "Assembled hardware infrastructure using IoT microcontrollers",
          "Established WiFi telemetry for real-time data transmission",
          "Integrated accelerometer sensors and HTTP clients",
          "Created functional safety device infrastructure"
        ]
      },
      {
        ...projects.canvasTracker,
        title: "Canvas Tracker PWA",
        description: "Built the backend infrastructure required for data synchronization, assembling Python APScheduler resources and Discord Webhooks to automate alerts. Established a service worker infrastructure to ensure the application functioned as a Progressive Web App (PWA).",
        meetsObjective: [
          "Built backend infrastructure for data synchronization",
          "Assembled Python APScheduler and Discord Webhook resources",
          "Automated alert systems for notifications",
          "Established service worker infrastructure for PWA functionality"
        ]
      }
    ]
  },
  {
    id: 3,
    text: objectiveTexts.bus[2],
    projects: [
      {
        ...projects.emergencySos,
        title: "M5StickC SOS System",
        description: "Applied lean prototyping principles to rapidly develop a Minimum Viable Product (MVP) for fall detection, iterating on sensor algorithms to minimize false positives. Utilized C++ and Arduino libraries to quickly test and validate the connectivity strategy.",
        meetsObjective: [
          "Applied lean prototyping principles for rapid MVP development",
          "Iterated on sensor algorithms to minimize false positives",
          "Utilized C++ and Arduino for quick testing and validation",
          "Validated connectivity strategy through agile iteration"
        ]
      },
      {
        ...projects.canvasTracker,
        title: "Canvas Tracker PWA",
        description: "Utilized iterative development to build a Progressive Web App, continuously integrating features like background sync and service workers to enhance the user experience. Adapted the product mission to solve immediate personal time-management needs through rapid software iteration.",
        meetsObjective: [
          "Utilized iterative development for continuous feature integration",
          "Implemented background sync and service workers incrementally",
          "Adapted product mission through rapid software iteration",
          "Applied agile approach to solve time-management needs"
        ]
      }
    ]
  },
  {
    id: 4,
    text: objectiveTexts.bus[3],
    projects: [
      {
        ...projects.interpaws,
        title: "Interpaws (SIP)",
        description: "Defined the operational financial model, establishing a $3,000 setup fee and $300 monthly subscription structure to ensure business viability. Conducted market analysis to identify the \"average age of 43\" for target practice owners and developed a marketing operations plan.",
        meetsObjective: [
          "Defined operational financial model with pricing structure",
          "Established $3,000 setup fee and $300 monthly subscription",
          "Conducted market analysis identifying target demographics",
          "Developed comprehensive marketing operations plan"
        ]
      },
      {
        id: "bus4-project2",
        title: "Apple Portfolio Project",
        role: "Financial Analyst",
        team: ["Amari Bullard"],
        description: "Conducted a deep-dive financial analysis of Apple's balance sheets and cash flow statements to evaluate operational margins and organizational performance. Analyzed \"Operating activities,\" \"Investing activities,\" and \"Financing activities\" to assess the company's fiscal health.",
        tools: ["Financial Analysis", "Excel", "Balance Sheet Analysis", "Cash Flow Analysis"],
        links: { docs: "https://drive.google.com/file/d/1l-0apNQxIjutKFPgpUwzvXx6n7KRrWha/view?usp=sharing" },
        meetsObjective: [
          "Conducted financial analysis of balance sheets and cash flow",
          "Evaluated operational margins and organizational performance",
          "Analyzed operating, investing, and financing activities",
          "Assessed company fiscal health through financial modeling"
        ]
      }
    ]
  },
  {
    id: 5,
    text: objectiveTexts.bus[4],
    projects: [
      {
        id: "bus5-project1",
        title: "Management Presentation",
        role: "Leadership Strategist",
        team: ["Amari Bullard"],
        description: "Formulated a leadership strategy focused on employee motivation and risk assessment, defining clear communication protocols to maintain team cohesion. Emphasized the importance of \"getting to know those who work with you\" to build a comfortable and productive work environment.",
        tools: ["Microsoft PowerPoint", "Leadership Strategy", "Team Management"],
        links: { docs: "https://docs.google.com/presentation/d/1RynUtyBCjJbf7rDyouT_A98ow73kqvDq/edit?usp=sharing&ouid=115978480032856245481&rtpof=true&sd=true" },
        meetsObjective: [
          "Formulated leadership strategy for employee motivation",
          "Defined risk assessment and communication protocols",
          "Emphasized team relationship building for cohesion",
          "Created framework for productive work environment"
        ]
      },
      {
        id: "bus5-project2",
        title: "Interpaws Business Plan",
        role: "Organizational Designer",
        team: ["Amari Bullard"],
        description: "Defined the organizational leadership structure (CEO, Product Managers) and established an advisory board of veterinary professionals to validate technical features. Created protocols for training employees and assessing risk to ensure safe and effective team operations.",
        tools: ["Organizational Design", "Microsoft Word", "Risk Assessment", "Training Protocols"],
        links: { docs: "https://drive.google.com/file/d/10E6DYumzkdaWeUPdSevo4k1AKo5enjZF/view?usp=sharing" },
        meetsObjective: [
          "Defined organizational leadership structure",
          "Established advisory board for technical validation",
          "Created employee training protocols",
          "Developed risk assessment procedures for team operations"
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
        title: "Interpaws (SIP)",
        description: "Engineered an \"Admin Dashboard with KPIs\" that generates actionable analytics on scheduling and client needs to support practice management decisions. The system provides insights to solve \"over or underscheduling problems\" based on data.",
        meetsObjective: [
          "Engineered Admin Dashboard with actionable KPIs",
          "Generated analytics on scheduling and client needs",
          "Supported practice management decision-making",
          "Provided data-driven insights for scheduling optimization"
        ]
      },
      {
        id: "bus6-project2",
        title: "Apple Portfolio Project",
        role: "Data Analyst",
        team: ["Amari Bullard"],
        description: "Analyzed \"Historical Data & Analytic Decision Models\" to interpret sales trends across regions (Americas, Europe, China), using data to drive strategic business decisions. Evaluated KPIs like annual iPhone sales objectives to measure strategy effectiveness.",
        tools: ["Data Analytics", "Excel", "Sales Trend Analysis", "KPI Evaluation"],
        links: { docs: "https://drive.google.com/file/d/1l-0apNQxIjutKFPgpUwzvXx6n7KRrWha/view?usp=sharing" },
        meetsObjective: [
          "Analyzed historical data and analytic decision models",
          "Interpreted sales trends across global regions",
          "Used data to drive strategic business decisions",
          "Evaluated KPIs to measure strategy effectiveness"
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
        id: "net1-project1",
        title: "Small Office Network Configuration",
        role: "Network Engineer",
        team: ["Amari Bullard"],
        description: "Designed a dual-subnet network topology for a medium-sized business using Cisco Packet Tracer. Configured routers, switches, and firewalls to segment traffic between departments (192.168.1.0/24 and 192.168.2.0/24).",
        tools: ["Cisco Packet Tracer", "Router Configuration", "Switch Configuration", "Firewall Rules", "VLAN Segmentation"],
        links: { docs: "https://docs.google.com/document/d/1W8vsx51I_V4ufXuEPHk67XDgV5DFUHM7/edit?usp=sharing&ouid=115978480032856245481&rtpof=true&sd=true" },
        meetsObjective: [
          "Analyzed business requirements for network segmentation between departments",
          "Designed dual-subnet architecture (192.168.1.0/24 and 192.168.2.0/24)",
          "Configured routers and switches for inter-VLAN routing",
          "Implemented firewall rules to control traffic flow between subnets"
        ]
      },
      {
        ...projects.interpaws,
        title: "Interpaws - AI Veterinary Management",
        description: "Architected a containerized application system using Docker to isolate the Next.js frontend from the FastAPI backend, ensuring scalable deployment and clean separation of concerns.",
        meetsObjective: [
          "Designed containerized architecture separating frontend and backend services",
          "Implemented Docker networking for secure inter-container communication",
          "Created scalable deployment topology with isolated service components",
          "Established clean separation of concerns through network architecture"
        ]
      }
    ]
  },
  {
    id: 2,
    text: objectiveTexts.net[1],
    projects: [
      {
        ...projects.nexatechAwsMigration,
        title: "NexaTech Cloud Migration Strategy",
        description: "Developed a comprehensive migration plan moving on-premise infrastructure to AWS. Architected a solution using AWS VPC for network isolation, EC2 with Auto Scaling for load management, and CloudEndure for disaster recovery.",
        meetsObjective: [
          "Designed AWS VPC architecture for network isolation and security",
          "Planned EC2 deployment with Auto Scaling for dynamic load management",
          "Integrated CloudEndure for disaster recovery and business continuity",
          "Emphasized benefits of remote infrastructure including scalability and cost optimization"
        ]
      },
      {
        ...projects.us93AlertsBot,
        title: "Serverless Traffic Incident Monitor (US93 Alerts)",
        description: "Deployed a Python-based automation tool using GitHub Actions (CI/CD) to run on a serverless schedule. Consumes the Arizona 511 API to monitor road conditions and pushes real-time alerts via Discord Webhooks.",
        meetsObjective: [
          "Implemented serverless architecture using GitHub Actions scheduled workflows",
          "Leveraged cloud-based CI/CD pipeline for automated execution",
          "Consumed external REST API (Arizona 511) for real-time data",
          "Demonstrated remote infrastructure benefits through zero-maintenance deployment"
        ]
      }
    ]
  },
  {
    id: 3,
    text: objectiveTexts.net[2],
    projects: [
      {
        id: "net3-project1",
        title: "Legacy Infrastructure Migration & DNS Remediation",
        role: "Network Administrator",
        team: ["Amari Bullard"],
        description: "Resolved a critical service outage for client 'PR Development Group' following a registrar migration. Identified stale DNS zone records pointing to decommissioned hosts and restored functionality by reconfiguring A, CNAME, and MX records for Google Workspace.",
        tools: ["DNS Management", "Google Workspace", "A Records", "CNAME Records", "MX Records", "Domain Registrar"],
        links: { docs: "https://drive.google.com/drive/folders/1KwFyo8fMAk3yGi0cuSUwFuClKjDekvN_?usp=sharing" },
        meetsObjective: [
          "Identified stale DNS zone records causing service outage",
          "Diagnosed misconfiguration pointing to decommissioned hosts",
          "Reconfigured A, CNAME, and MX records for proper resolution",
          "Restored Google Workspace functionality through DNS remediation"
        ]
      },
      {
        ...projects.enterpriseNetwork,
        title: "Enterprise Network Design Evaluation",
        description: "Conducted a performance analysis of a large-scale enterprise network. Identified latency bottlenecks in WAN links and proposed an optimized architecture using Content Delivery Networks (CDNs) and QoS policies to prioritize business-critical traffic.",
        meetsObjective: [
          "Analyzed enterprise network performance and identified bottlenecks",
          "Evaluated WAN link latency issues affecting business operations",
          "Proposed CDN implementation for content delivery optimization",
          "Designed QoS policies to prioritize business-critical traffic"
        ]
      }
    ]
  },
  {
    id: 4,
    text: objectiveTexts.net[3],
    projects: [
      {
        id: "net4-project1",
        title: "Linux Server Administration & Firewall Hardening",
        role: "Systems Administrator",
        team: ["Amari Bullard"],
        description: "Performed systems administration on Ubuntu servers by configuring UFW (Uncomplicated Firewall) to enforce strict access control policies, explicitly allowing SSH (Port 22) traffic while blocking unauthorized ingress.",
        tools: ["Ubuntu Server", "UFW", "SSH", "iptables", "Access Control", "Security Hardening"],
        links: { docs: "https://docs.google.com/document/d/1jzftMWrT-l26Ikttl_Qe-vJCFGEVGSfw/edit?usp=sharing&ouid=115978480032856245481&rtpof=true&sd=true" },
        meetsObjective: [
          "Configured UFW firewall for strict access control enforcement",
          "Implemented SSH access policies on Port 22",
          "Blocked unauthorized ingress through firewall rules",
          "Demonstrated enterprise-level server security administration"
        ]
      },
      {
        ...projects.disasterRecovery,
        title: "Enterprise Business Continuity Planning (BCP)",
        description: "Designed a disaster recovery strategy for a multinational hospitality firm. Implemented AWS Backup policies for S3 and RDS to ensure data durability and defined RTO/RPO objectives for enterprise resilience.",
        meetsObjective: [
          "Designed comprehensive disaster recovery strategy",
          "Implemented AWS Backup policies for S3 and RDS data protection",
          "Defined RTO/RPO objectives for enterprise resilience",
          "Demonstrated backup recovery and business continuity administration"
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
        title: "M5StickC Emergency SOS System",
        description: "Developed a hardware-based IoT alert system using the M5StickC Plus ESP32. Integrated accelerometer sensors to detect falls and programmed WiFi-based HTTP requests to trigger remote emergency notifications.",
        meetsObjective: [
          "Developed IoT solution using M5StickC Plus ESP32 microcontroller",
          "Integrated accelerometer sensors for fall detection",
          "Programmed WiFi-based HTTP requests for network connectivity",
          "Demonstrated IoT device integration with traditional networking"
        ]
      },
      {
        ...projects.thingspeakIot,
        title: "Cloud-Based IoT Data Telemetry",
        description: "Engineered a networked telemetry system using ThingSpeak API. Programmed an ESP32 microcontroller to transmit real-time sensor state data via REST API, allowing for remote monitoring and data visualization on mobile devices.",
        meetsObjective: [
          "Engineered IoT telemetry system with cloud connectivity",
          "Programmed ESP32 for real-time sensor data transmission",
          "Integrated REST API for remote data upload",
          "Enabled mobile device access for remote monitoring and visualization"
        ]
      }
    ]
  },
  {
    id: 6,
    text: objectiveTexts.net[5],
    projects: [
      {
        ...projects.enterpriseSecurityPlan,
        title: "Corporate Security Architecture Plan",
        description: "Authored a comprehensive security policy for a major corporation (Apple, Inc context). Defined physical security controls (biometrics), administrative controls (least-privilege access), and technical encryption standards (AES-256) for data at rest.",
        meetsObjective: [
          "Defined physical security controls including biometric authentication",
          "Established administrative controls with least-privilege access policies",
          "Specified technical encryption standards (AES-256) for data at rest",
          "Created comprehensive security policy aligned with industry standards"
        ]
      },
      {
        ...projects.cyberInsurance,
        title: "Cyber Risk & Insurance Compliance Analysis",
        description: "Evaluated cyber insurance policies against industry standards (PCI-DSS and GLBA). Assessed organizational risk posture and recommended coverage limits for ransomware, third-party liability, and data breach response.",
        meetsObjective: [
          "Evaluated cyber insurance policies against PCI-DSS and GLBA standards",
          "Assessed organizational risk posture for security compliance",
          "Recommended coverage limits for ransomware and data breach scenarios",
          "Demonstrated security principles application within industry frameworks"
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
