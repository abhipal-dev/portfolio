export const portfolioData = {
  personal: {
    name: "Abhishek",
    role: "Full-Stack Software Developer",
    tagline: "Building scalable web applications, robust backend architectures, and modern user experiences.",
    bio: "I am a passionate Full-Stack Developer with a deep interest in building modern web applications that solve real-world problems. Experienced in the JavaScript/TypeScript ecosystem, React, Node.js, and cloud deployments, I focus on clean code, intuitive UI/UX, and high-performance system design.",
    email: "abhishek.dev@example.com", // Replace with your email
    location: "India (Open to Remote Worldwide)",
    availability: "Available for Full-time Roles & Freelance",
    resumeUrl: "#", // Add your Google Drive or PDF link here
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },

  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Core Technologies", value: "20+" },
    { label: "Code Commits", value: "500+" },
    { label: "Client / User Satisfaction", value: "100%" },
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "Code2" },
      { name: "TypeScript", level: "Advanced", icon: "FileCode" },
      { name: "Next.js", level: "Intermediate", icon: "Layers" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Terminal" },
      { name: "HTML5 & Modern CSS", level: "Advanced", icon: "Layout" },
      { name: "Redux / Zustand", level: "Intermediate", icon: "Database" },
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Cpu" },
      { name: "RESTful APIs", level: "Advanced", icon: "Network" },
      { name: "Python", level: "Intermediate", icon: "FileCode" },
      { name: "GraphQL", level: "Intermediate", icon: "Layers" },
      { name: "JWT & OAuth2", level: "Advanced", icon: "ShieldCheck" },
    ],
    database: [
      { name: "PostgreSQL", level: "Intermediate", icon: "Database" },
      { name: "MongoDB", level: "Advanced", icon: "Database" },
      { name: "Redis", level: "Intermediate", icon: "Zap" },
      { name: "Supabase", level: "Intermediate", icon: "Cloud" },
      { name: "Prisma ORM", level: "Intermediate", icon: "Layers" },
    ],
    devops: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Docker", level: "Intermediate", icon: "Box" },
      { name: "GitHub Actions / CI/CD", level: "Intermediate", icon: "Workflow" },
      { name: "Vercel & Netlify", level: "Advanced", icon: "CloudLightning" },
      { name: "Postman & API Testing", level: "Advanced", icon: "CheckCircle" },
    ],
  },

  projects: [
    {
      id: "devflow",
      title: "DevFlow - AI Developer Platform",
      category: "Full Stack",
      tagline: "Collaborative developer workspace with code generation and smart insights.",
      description:
        "A full-stack collaborative developer platform that assists developers in writing, testing, and debugging code using modern AI LLM integrations. Features real-time multiplayer editing, syntax highlighting, and instant cloud execution.",
      highlights: [
        "Real-time synchronized editor powered by WebSockets",
        "Secure microservice execution backend in Docker containers",
        "JWT-based user authentication and role-based access control",
        "Responsive, dark-themed UI built with Tailwind CSS",
      ],
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB", "Docker"],
      github: "https://github.com",
      demo: "https://github.com",
      featured: true,
    },
    {
      id: "shopsphere",
      title: "ShopSphere - Modern E-Commerce Suite",
      category: "Full Stack",
      tagline: "Scalable digital storefront with Stripe payments and live inventory sync.",
      description:
        "An enterprise-ready e-commerce solution featuring server-side rendered product catalogs, cart state management, Stripe payment gateway, and an administrative dashboard for inventory and order management.",
      highlights: [
        "End-to-end checkout flow with Stripe webhooks",
        "Admin analytics dashboard for revenue and orders",
        "Optimized image loading and sub-second page transitions",
        "Full database indexing with PostgreSQL for quick searches",
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://github.com",
      featured: true,
    },
    {
      id: "taskpulse",
      title: "TaskPulse - Agile Project Hub",
      category: "Frontend",
      tagline: "Kanban board & sprint planner with drag-and-drop workflow tracking.",
      description:
        "A streamlined project management tool inspired by Trello and Linear. Offers intuitive drag-and-drop task boards, activity logs, priority tags, and automated progress metrics.",
      highlights: [
        "Smooth drag-and-drop interface with keyboard accessibility",
        "Customizable Kanban boards with column filtering",
        "Dark/light mode support with responsive layouts",
        "Local state persistence and offline support",
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "Zustand", "Lucide React"],
      github: "https://github.com",
      demo: "https://github.com",
      featured: true,
    },
    {
      id: "apigatekeeper",
      title: "GateKeeper - Auth & Rate-Limiter API",
      category: "Backend",
      tagline: "High-throughput API gateway service with Redis-backed rate limiting.",
      description:
        "A production-grade backend authentication and rate limiting service. Protects downstream microservices with sliding-window rate limiting, token rotation, and anomaly detection.",
      highlights: [
        "Sliding window counter algorithm implemented in Redis",
        "Zero-trust JWT verification with refresh token rotation",
        "Comprehensive unit and integration test suite with Jest",
        "Pre-configured Docker container and automated CI pipeline",
      ],
      technologies: ["Node.js", "Express", "Redis", "TypeScript", "Jest", "Docker"],
      github: "https://github.com",
      demo: "https://github.com",
      featured: false,
    },
    {
      id: "cloudmetrics",
      title: "CloudMetrics - Live System Monitor",
      category: "Full Stack",
      tagline: "Real-time infrastructure health and latency monitoring dashboard.",
      description:
        "An intuitive observability dashboard providing real-time telemetry metrics for server clusters, memory usage, CPU load, and network latencies with interactive SVG charts.",
      highlights: [
        "Live WebSocket telemetry stream updates under 50ms",
        "Interactive charting with customizable thresholds",
        "Automated email and Discord alert triggers",
        "Extensible plugin architecture for custom metrics",
      ],
      technologies: ["React", "Node.js", "WebSockets", "Chart.js", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://github.com",
      featured: false,
    },
  ],

  experience: [
    {
      period: "2024 - Present",
      role: "Full-Stack Software Engineer",
      company: "Tech Innovations / Projects",
      location: "Remote",
      description:
        "Architecting and shipping responsive web apps, designing secure REST APIs, and optimizing database performance for high traffic workloads.",
      achievements: [
        "Engineered scalable microservices handling thousands of requests daily",
        "Reduced bundle size by 40% and improved Core Web Vitals to 98+",
        "Implemented CI/CD deployment pipelines using GitHub Actions",
      ],
    },
    {
      period: "2023 - 2024",
      role: "Software Developer Intern",
      company: "Digital Solutions Lab",
      location: "Hybrid",
      description:
        "Collaborated with cross-functional teams to build client-facing frontend features, API endpoints, and comprehensive unit tests.",
      achievements: [
        "Built responsive UI components using React and Tailwind CSS",
        "Integrated third-party APIs and streamlined database queries",
        "Participated in agile code reviews and sprint planning sessions",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "University / Institute of Technology",
      period: "2020 - 2024",
      description:
        "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering.",
    },
  ],
};
