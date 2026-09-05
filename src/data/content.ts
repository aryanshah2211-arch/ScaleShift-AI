import { BuildGroup, OutcomeMapping, CaseStudy, SecondaryProject } from '../types';

export const BUSINESS_INFO = {
  name: 'ScaleShift AI',
  tagline: 'AI, Web & Digital Solutions for Growing Businesses.',
  coreMessage: 'You bring the problem. I build the solution.',
  founder: 'Aryan Shah',
  role: 'Founder & AI Solutions Builder',
  whatsappNumber: '+91 6354537604',
  whatsappRaw: '916354537604',
  whatsappUrl:
    'https://wa.me/916354537604?text=Hi%20Aryan%2C%20I%20came%20across%20ScaleShift%20AI%20and%20I%27d%20like%20to%20discuss%20a%20digital%20solution%20for%20my%20business.',
  email: 'aryanshah2211@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aryan-shah',
  linkedinDisplay: 'linkedin.com/in/aryan-shah',
  year: '2026',
};

// 3 Major Groups for "What I Build"
export const WHAT_I_BUILD_GROUPS: BuildGroup[] = [
  {
    name: 'BUILD',
    subtitle: 'High-performance web platforms and interfaces',
    items: [
      {
        title: 'Website Development',
        description: 'Clean, responsive, and conversion-engineered websites that build immediate authority and turn visitors into enquiries.',
        icon: 'Globe',
      },
      {
        title: 'Web Applications',
        description: 'Custom platforms, customer portals, dashboards, and internal business tools tailored to your operational needs.',
        icon: 'LayoutGrid',
      },
      {
        title: 'Custom Digital Products',
        description: 'End-to-end bespoke digital products built from concept to production with modern, maintainable architectures.',
        icon: 'Layers',
      },
    ],
  },
  {
    name: 'INTELLIGENCE',
    subtitle: 'Context-aware AI agents, chatbots, and models',
    items: [
      {
        title: 'AI Agents',
        description: 'Autonomous reasoning assistants that search your knowledge base, evaluate conditions, and execute multi-step tasks.',
        icon: 'Bot',
      },
      {
        title: 'AI Chatbots',
        description: 'Intelligent conversational systems providing instant 24/7 answers, qualification, and context-rich human escalations.',
        icon: 'MessageSquare',
      },
      {
        title: 'AI-Powered Applications',
        description: 'Interactive software infused with large language models, semantic vector search, and predictive logic.',
        icon: 'Cpu',
      },
      {
        title: 'Custom AI Solutions',
        description: 'Domain-specific prompt orchestration, retrieval systems, and customized model integrations for unique workflows.',
        icon: 'Sparkles',
      },
    ],
  },
  {
    name: 'AUTOMATE',
    subtitle: 'Hands-off workflows and operational efficiency',
    items: [
      {
        title: 'AI Automation',
        description: 'End-to-end intelligent pipelines that connect forms, CRMs, spreadsheets, and databases without manual oversight.',
        icon: 'Zap',
      },
      {
        title: 'WhatsApp Automation',
        description: 'Smart customer intake, instant responses, appointment scheduling, and automated inquiry routing over WhatsApp.',
        icon: 'PhoneCall',
      },
      {
        title: 'Business Process Automation',
        description: 'Eliminating repetitive administrative drag, duplicate data entry, and manual coordination between team tools.',
        icon: 'Repeat',
      },
      {
        title: 'Lead & Workflow Automation',
        description: 'Zero-latency speed-to-lead qualification, automated multi-channel follow-ups, and airtight pipeline synchronization.',
        icon: 'Workflow',
      },
    ],
  },
];

// Interactive Outcome Mapping: "What Are You Trying to Build?"
export const OUTCOME_MAPPINGS: OutcomeMapping[] = [
  {
    prompt: 'I need a professional website.',
    outcome: 'WEBSITE',
    category: 'Build',
  },
  {
    prompt: 'I need a custom platform for my business.',
    outcome: 'WEB APPLICATION',
    category: 'Build',
  },
  {
    prompt: 'I want customers to get instant answers.',
    outcome: 'AI CHATBOT',
    category: 'Intelligence',
  },
  {
    prompt: 'I want an AI assistant for my business.',
    outcome: 'AI AGENT',
    category: 'Intelligence',
  },
  {
    prompt: 'I want to handle enquiries through WhatsApp.',
    outcome: 'WHATSAPP SYSTEM',
    category: 'Automate',
  },
  {
    prompt: 'My team spends too much time doing repetitive work.',
    outcome: 'AUTOMATION',
    category: 'Automate',
  },
  {
    prompt: "I have an idea but don't know how to build it.",
    outcome: 'CUSTOM SOLUTION',
    category: 'Custom',
  },
];

// Friction Points: "What Can We Improve?"
export const FRICTION_POINTS = [
  'Too many manual enquiries',
  "Leads aren't followed up consistently",
  'Customers ask the same questions repeatedly',
  "Website doesn't convert visitors",
  'Team keeps copying data between systems',
  'Business needs a custom internal tool',
  'Customers need a better digital experience',
  'Team spends too much time on repetitive administration',
  "You have an idea but don't know how to turn it into a product",
];

// 4 Steps: "How I Work"
export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand your business, users, workflow, goals and challenges.',
    detail: 'We start with an honest conversation about your current bottlenecks, audience, and actual goals before picking any tools.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Define the right solution before choosing the technology.',
    detail: 'We outline the user journey, system architecture, and interface requirements to make sure what we build truly solves the problem.',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Develop, integrate, test and refine the solution.',
    detail: 'I personally code, configure, and rigorously test every component, keeping communication clear and turnaround rapid.',
  },
  {
    number: '04',
    title: 'LAUNCH',
    description: 'Deploy the solution and make sure it works in the real world.',
    detail: 'We put the system into production, verify real-world performance, and make sure you and your team are confident using it.',
  },
];

// Honest Project Showcase: "Selected Work"
export const FEATURED_CASE_STUDY: CaseStudy = {
  title: 'AI Student Study Planner',
  badge: 'AI Hackathon Project — 2nd Rank',
  achievement: '2nd Rank at BE10x AI Hackathon 2026',
  category: 'AI Hackathon Project',
  problem:
    'Students often spend hours manually assembling study calendars, searching for explanations, and compiling revision materials across fragmented topics before examinations.',
  solution:
    'A fully autonomous AI study-planning system where a student submits one structured form and immediately receives a customized study schedule, in-depth breakdowns of their five hardest topics, and ten targeted practice questions with complete answers.',
  workflow: [
    'Student Form Intake',
    'Google Sheets Sync',
    'n8n Orchestration',
    'Gemini AI Reasoning',
    'Study Plan Generation',
    'Automated Gmail Dispatch',
  ],
  tools: [
    'n8n Orchestrator',
    'Google Gemini AI',
    'Google Sheets',
    'Google Forms',
    'Gmail API',
    'Prompt Engineering',
  ],
  result: 'Working automated end-to-end workflow',
  deliveryTime: 'under 60 seconds',
};

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    category: 'Frontend & Web Application',
    type: 'Interactive Web Application',
    description:
      'Developed a responsive real-time messaging application with an intuitive interface, direct communication flow, and lightweight frontend styling.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Event-Driven Logic'],
  },
  {
    id: 'marine-life',
    title: 'Marine Life Information System',
    category: 'University Project',
    type: 'Console Architecture / C++',
    description:
      'Engineered an academic console-based software system in C++ to catalog, query, filter, and organize biological records using robust file storage and object-oriented principles.',
    skills: ['C++', 'Object-Oriented Programming', 'File I/O Streams', 'Data Structuring'],
  },
];

// Requirement options for the lead form
export const REQUIREMENT_OPTIONS = [
  'Website',
  'Web Application',
  'AI Chatbot',
  'AI Agent',
  'AI WhatsApp Automation',
  'Business Automation',
  'Custom AI Application',
  'Custom Digital Solution',
  'Not Sure Yet',
];
