// Navigation items
export const NAV_ITEMS = ['Home', 'About', 'Skills'];

// Personal Info
export const PERSONAL_INFO = {
  name: 'Mallikarjuna S Danduba',
  titles: ['AI Developer', 'Full Stack Developer', 'Generative AI Enthusiast'],
  location: 'Bengaluru, Karnataka, India',
  email: 'mallikarjuns5995@gmail.com',
  bio: 'Passionate software engineer building intelligent AI applications and scalable web solutions, specializing in Generative AI and full-stack development.',
  aboutMe: "I'm a software engineer with hands-on experience in Full Stack Development and Artificial Intelligence. My professional journey started as a Full Stack Developer at Wakin Softwares and evolved into AI application development, where I currently build intelligent solutions for recruitment and automation systems. I have worked on end-to-end product development, including frontend interfaces, backend APIs, databases, AI model integrations, and scalable architectures. My interests lie in Generative AI, NLP, Large Language Models, and building innovative products that make technology more accessible and efficient.",
  socials: {
    linkedin: 'https://www.linkedin.com/in/mallikarjuna2002',
    github: 'https://github.com/mallikarjunadanduba',
    instagram: 'https://www.instagram.com/mallikarjun_danduba',
    youtube: 'https://youtube.com/@mallikarjundandubaofficial279',
  }
};

// Education History
export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'SEA College of Science, Commerce and Arts',
    period: '2022 – 2024',
    performance: 'CGPA: 8.09',
    description: 'Specialized in Advanced Software Engineering, Database Systems, Web Application Development, and AI Concepts.'
  },
  {
    degree: 'Bachelor of Science (Computer Science)',
    institution: 'Government Degree College, Yadgir',
    period: '2019 – 2022',
    performance: 'CGPA: 7.02',
    description: 'Foundational studies in Computer Science, Mathematics, Physics, and Programming Logic.'
  }
];

// Professional Experience
export const EXPERIENCE = [
  {
    role: 'AI Developer',
    company: 'iFocus Systec Pvt. Ltd.',
    location: 'JP Nagar, Bengaluru',
    period: 'January 2026 – Present',
    responsibilities: [
      'Designing and developing AI-powered applications and automation systems.',
      'Building intelligent recruitment and interview platforms.',
      'Integrating Large Language Models (LLMs) and Generative AI capabilities.',
      'Developing REST APIs and backend services using Flask and Spring Boot.',
      'Working with speech-to-text (Whisper) and NLP technologies for audio-visual assessments.',
      'Collaborating with cross-functional teams to deliver scalable and production-ready solutions.'
    ],
    technologies: ['Python', 'Flask', 'React.js', 'Spring Boot', 'SQL', 'LLMs', 'Generative AI', 'Hugging Face', 'Whisper', 'REST APIs']
  },
  {
    role: 'Full Stack Developer',
    company: 'Wakin Softwares',
    location: 'Remote / Hybrid',
    period: 'June 2025 – December 2025',
    responsibilities: [
      'Joined Wakin Softwares on 2nd June 2025 and contributed to the development of enterprise web applications.',
      'Developed responsive, accessible, and user-friendly web interfaces using React.js.',
      'Designed and implemented robust RESTful APIs and backend services using Java and Spring Boot.',
      'Integrated relational databases (MySQL) and optimized database queries with Hibernate ORM.',
      'Collaborated with teams throughout the software development lifecycle to debug, test, and deploy features.'
    ],
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Hibernate', 'HTML', 'CSS', 'JavaScript', 'REST APIs']
  }
];

// Technical Skills
export const SKILLS = [
  {
    category: 'UI/UX',
    items: [
      { name: 'React JS', level: 90, subSkills: ['Redux', 'React Router', 'Next.js', 'Hooks', 'Context API'] },
      { name: 'JavaScript', level: 90, subSkills: ['ES6+', 'Promises', 'DOM Manipulation', 'Async/Await'] },
      { name: 'TypeScript', level: 85, subSkills: ['Interfaces', 'Generics', 'Strict Typing', 'Decorators'] },
      { name: 'HTML5', level: 95, subSkills: ['Semantic HTML', 'Web Accessibility (a11y)', 'SEO Optimization'] },
      { name: 'CSS3', level: 90, subSkills: ['Flexbox', 'CSS Grid', 'Animations', 'Responsive Design'] },
      { name: 'Tailwind CSS', level: 95, subSkills: ['Utility Classes', 'Custom Themes', 'Responsive Modifiers'] },
      { name: 'Figma', level: 85, subSkills: ['Wireframing', 'Prototyping', 'Auto Layout', 'Design Systems'] }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Java', level: 90, subSkills: ['Spring Framework', 'Collections', 'Streams API', 'Multithreading', 'JVM'] },
      { name: 'Spring Boot', level: 90, subSkills: ['Spring MVC', 'Spring Security', 'Spring Data JPA', 'Microservices', 'Hibernate'] },
      { name: 'Node JS', level: 85, subSkills: ['Express.js', 'Middleware', 'Async Programming', 'Event Loop'] },
      { name: 'Python', level: 92, subSkills: ['Flask', 'Django', 'Pandas', 'Data Processing', 'Scripting'] },
      { name: 'REST API', level: 90, subSkills: ['HTTP Methods', 'JSON', 'Authentication', 'JWT', 'Rate Limiting'] }
    ]
  },
  {
    category: 'AI Integration',
    items: [
      { name: 'ChatGPT', level: 90, subSkills: ['Prompt Engineering', 'OpenAI API', 'Function Calling', 'Fine-tuning'] },
      { name: 'Claude AI', level: 85, subSkills: ['Anthropic API', 'Context Windows', 'Opus & Sonnet Models'] },
      { name: 'Gemini AI', level: 85, subSkills: ['Google AI Studio', 'Multimodal Processing', 'Gemini Pro API'] },
      { name: 'OpenAI', level: 90, subSkills: ['GPT-4 API', 'Embeddings', 'DALL-E 3', 'Whisper'] },
      { name: 'AssemblyAI', level: 80, subSkills: ['Speech-to-Text', 'Audio Intelligence', 'Real-time Transcription'] },
      { name: 'Deepgram', level: 80, subSkills: ['Voice AI', 'Streaming Audio', 'Language Models'] },
      { name: 'Groq', level: 80, subSkills: ['LPU Inference', 'Ultra-low Latency AI', 'LLM Acceleration'] }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', level: 85, subSkills: ['Relational Design', 'Joins', 'Stored Procedures', 'SQL Optimization'] },
      { name: 'PostgreSQL', level: 85, subSkills: ['Advanced Queries', 'JSONB Data', 'Indexing', 'Triggers'] },
      { name: 'MongoDB', level: 80, subSkills: ['NoSQL', 'Document Structure', 'Aggregation Pipeline', 'Mongoose'] },
      { name: 'Redis', level: 75, subSkills: ['In-Memory Caching', 'Key-Value Store', 'Pub/Sub', 'Low Latency'] }
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', level: 80, subSkills: ['Containerization', 'Dockerfile', 'Docker Compose', 'Image Optimization'] },
      { name: 'Kubernetes', level: 70, subSkills: ['Pods', 'Deployments', 'Services', 'Scaling Clusters'] },
      { name: 'Git', level: 90, subSkills: ['Version Control', 'Branching Strategies', 'Merge Conflict Resolution', 'Rebase'] },
      { name: 'Linux', level: 80, subSkills: ['Shell Scripting', 'File Permissions', 'SSH', 'Cron Jobs'] },
      { name: 'Google GCP', level: 75, subSkills: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'IAM'] },
      { name: 'Vercel', level: 85, subSkills: ['Serverless Functions', 'Edge Computing', 'CI/CD Pipelines'] },
      { name: 'Postman', level: 90, subSkills: ['API Testing', 'Collections', 'Environments', 'Automated Testing'] },
      { name: 'Jira', level: 85, subSkills: ['Agile Workflows', 'Scrum', 'Sprint Planning', 'Ticket Tracking'] }
    ]
  }
];

// Featured Projects
export const PROJECTS = [
  {
    title: 'QwikHire ATS',
    description: 'An AI-powered recruitment platform designed for automated candidate screening, deep resume parsing, smart interview management, and hiring workflow automation.',
    techStack: ['Python', 'React.js', 'Spring Boot', 'SQL', 'Generative AI', 'LLMs'],
    category: 'AI / Full Stack'
  },
  {
    title: 'KareerGrowth',
    description: 'An intelligent resume parsing and job matching system that evaluates uploaded resumes against job descriptions, returning precise ATS compatibility scores and formatting recommendations.',
    techStack: ['Python', 'Flask', 'NLP', 'React.js', 'LLMs'],
    category: 'Natural Language Processing'
  },
  {
    title: 'InterviewMitra',
    description: 'An AI-driven mock interview preparation platform featuring real-time speech-to-text transcription, dynamic situational question generation, visual monitoring, and performance scorecards.',
    techStack: ['Python', 'Whisper', 'Transformers', 'Flask', 'React.js', 'Material UI'],
    category: 'Speech & AI'
  },
  {
    title: 'ValidProfile',
    description: 'A professional employee digital profile and testing ecosystem with profile management, interactive MCQ assessment modules, and dynamic automated resume builders.',
    techStack: ['React.js', 'Spring Boot', 'MySQL'],
    category: 'Full Stack'
  }
];

// Styling configuration
export const COLORS = {
  primary: '#090e1a',
  accent: '#2563eb',
  accentLight: '#3b82f6',
  background: '#f8fafc',
  white: '#ffffff',
  slate50: '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate400: '#cbd5e1',
  slate500: '#64748b',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1e293b',
  slate900: '#0f172a',
  blue50: '#eff6ff',
  blue100: '#dbeafe',
};

// Feature data
export const FEATURES = [
  {
    id: 1,
    title: 'Fast Performance',
    description: 'Optimized code and best practices',
    icon: 'zap',
  },
  {
    id: 2,
    title: 'Scalable Solutions',
    description: 'Built for growth and long-term success',
    icon: 'shield',
  },
  {
    id: 3,
    title: 'Responsive Design',
    description: 'Pixel-perfect across all devices',
    icon: 'smartphone',
  },
  {
    id: 4,
    title: 'Clean & Modern',
    description: 'Minimal, intuitive and user-focused',
    icon: 'user',
  },
];

