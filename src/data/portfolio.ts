import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Naman Malik',
  title: 'Senior Software Engineer',
  tagline: 'Python · Go · Django · FastAPI · Kubernetes · Cloud',
  summary:
    'Platform-focused backend engineer with 6 years building reliable services, security-hardened platforms, and data-heavy systems across healthcare, fintech, and marketplaces.',
  location: 'Noida, India',
  avatar: '/profile.png',
  contact: {
    linkedin: 'https://www.linkedin.com/in/namanmalik',
    github: 'https://github.com/itsnamanmalik',
    portfolio: 'https://namamalik.in',
  },
  experience: [
    {
      role: 'Sr. Platform Engineer',
      company: 'EXL Services (CVS Health)',
      period: '09/2024 – Present · Remote',
      stack: ['Python', 'Snowflake', 'Docker', 'Kubernetes', 'Kubeflow', 'ACR'],
      bullets: [
        'Designed centralized base Docker images with security hardening, cutting platform CVEs by 40%.',
        'Operate Kubernetes and Docker pipelines for consistent delivery across teams.',
        'Platform partner for Fortune 10 healthcare org, enabling data science workloads at scale.',
      ],
    },
    {
      role: 'Sr. Software Developer',
      company: 'Jellyfish Technologies',
      period: '08/2023 – 09/2024 · Remote',
      stack: ['Django', 'DRF', 'PostgreSQL', 'MongoDB', 'Celery', 'RabbitMQ', 'Redis', 'Elasticsearch', 'Docker', 'AWS'],
      bullets: [
        'Led backend for KFM247 CMMS platform, translating business needs into scalable APIs.',
        'Owned feature delivery across modules and guided client discussions on reliability and priorities.',
        'Built enterprise-grade infra on DRF + PostgreSQL + AWS for facility management.',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Cognis Solutions',
      period: '09/2022 – 07/2023 · Noida',
      stack: ['Python', 'Django', 'DRF', 'Go', 'Celery', 'RabbitMQ', 'Redis', 'Selenium', 'React', 'Docker', 'Azure'],
      bullets: [
        'Developed B2C MVPs and production B2B background verification platform handling 10K+ daily checks.',
        'Built scalable APIs and data pipelines powering automated verification workflows.',
        'Cut processing latency by 35% via Redis caching and DB optimizations.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Xation Media',
      period: '09/2020 – 09/2022 · Agra',
      stack: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'DigitalOcean', 'Java', 'Android Studio'],
      bullets: [
        'Built Xation consumer and vendor apps from scratch with Django backend.',
        'Implemented real-time order processing, vendor onboarding, auth, and payments.',
        'Served 10K+ MAUs; delivered order tracking, ratings, and operational dashboards.',
      ],
    },
  ],
  projects: [
    {
      title: 'Front Store Utilities',
      org: 'EXL Services (CVS Health)',
      description: 'Internal Python package for repetitive and privileged tasks used by data teams; hosted on Nexus.',
      stack: ['Python', 'Snowflake', 'Kubernetes', 'Cosmos', 'Azure KeyVault', 'Pandas'],
    },
    {
      title: 'KFM247 (CMMS)',
      org: 'Jellyfish Technologies',
      description: 'Advanced facility maintenance SaaS for work orders, assets, and field ops.',
      stack: ['Python', 'Go', 'Django', 'DRF', 'PostgreSQL', 'MongoDB', 'Celery', 'RabbitMQ', 'Redis', 'Elasticsearch', 'Docker', 'AWS'],
      url: 'https://kfm247.com/',
    },
    {
      title: 'HV-Ops',
      org: 'Cognis Solutions',
      description: 'Operations platform for background verification across investigator, HR, and QC roles with Selenium automations.',
      stack: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'RabbitMQ', 'Redis', 'Selenium', 'React', 'Docker', 'Azure'],
      url: 'https://www.helloverify.com/',
    },
    {
      title: 'Hellov WhatsApp Chatbot',
      org: 'Cognis Solutions',
      description: 'Instant background verification via WhatsApp for document and criminal checks.',
      stack: ['Django', 'DRF', 'MongoDB', 'Celery', 'RabbitMQ', 'Redis', 'Twilio', 'Docker', 'Azure'],
      url: 'https://hellov.in/',
    },
    {
      title: 'Xation',
      org: 'Xation Media',
      description: 'Food delivery and dining discounts app with 50K+ downloads and 20K+ active users in Agra.',
      stack: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'DigitalOcean', 'Java', 'Android'],
    },
    {
      title: 'Get Fixed',
      org: 'Personal Project',
      description: 'Service marketplace with user, vendor apps and admin panel; bookings and dispatch.',
      stack: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'React', 'Java', 'Android'],
    },
  ],
  skills: {
    Languages: ['Python', 'Go'],
    Frameworks: ['Django', 'Django REST Framework', 'Celery', 'FastAPI', 'Flask', 'React'],
    Libraries: ['SQLAlchemy', 'Pydantic', 'Pandas', 'Asyncio'],
    Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    Messaging: ['Redis', 'RabbitMQ', 'Celery', 'Memcached'],
    Cloud: ['AWS (S3, RDS, SNS, EC2, ECS, Lambda, API Gateway, CloudWatch)', 'Azure', 'DigitalOcean'],
    DevOps: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Bitbucket'],
    Integrations: ['Git', 'Jira', 'Twilio', 'Razorpay'],
    'AI / LLM': ['LLaMA', 'OpenAI (GPT, RAG, MCP)', 'GitHub Copilot'],
    Auth: ['OAuth2', 'JWT'],
    Leadership: ['Team Leadership', 'Code Reviews'],
  },
  achievements: [
    { title: 'Kubernetes Certified Application Developer (CKAD) with Tests', time: 'Completed Jan 2026' },
    { title: 'Python & Django Full Stack Web Developer Bootcamp', time: 'Completed May 2020' },
    { title: 'Complete Python Bootcamp: Zero to Hero in Python 3', time: 'Completed May 2020' },
  ],
  education: [
    { degree: 'Master of Computer Applications', inst: 'Chandigarh University (Distance)', meta: '03/2021 – 03/2023' },
    { degree: 'Bachelor of Computer Applications', inst: 'GLA University', meta: '03/2018 – 03/2021' },
  ],
  social: [
    { label: 'Email', url: 'mailto:namamalik06@gmail.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/namanmalik' },
    { label: 'GitHub', url: 'https://github.com/itsnamanmalik' },
    { label: 'Resume', url: 'https://drive.google.com/file/d/1S1pD2ZBOmr7M-T8lmMuMLHV6fIdbxGED/view?usp=sharing' },
  ],
};
