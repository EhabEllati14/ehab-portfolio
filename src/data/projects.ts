import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Real-Time STT & Voice AI Agent',
    description:
      'Designed a real-time speech and conversational AI system integrating Speech-to-Text, speaker diarization, turn-taking, RAG, LLMs, and Text-to-Speech. Built for production-grade performance with optimized inference pipelines on cloud GPUs.',
    tags: ['Python', 'PyTorch', 'Whisper', 'Pyannote', 'NeMo', 'vLLM', 'CUDA', 'Docker', 'Kubernetes', 'Google Cloud'],
    github: 'https://github.com/EhabEllati14',
    featured: true,
  },
  {
    id: 2,
    name: 'RAG-Based AI Chatbot',
    description:
      'Built an end-to-end Retrieval-Augmented Generation chatbot with document ingestion, vector search, and LLM-based question answering. Supports multiple document formats and context-aware multi-turn conversations.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'MCP', 'OpenAI API', 'Ollama'],
    github: 'https://github.com/EhabEllati14',
    featured: true,
  },
  {
    id: 3,
    name: 'Full-Stack Booking Platform',
    description:
      'Built a full-stack booking system implementing authentication, service management, multi-service booking, real-time availability, conflict detection, dashboards, reports, and notifications.',
    tags: ['React', 'FastAPI', 'REST APIs', 'SQL', 'Authentication', 'TypeScript'],
    github: 'https://github.com/EhabEllati14',
    featured: true,
  },
  {
    id: 4,
    name: 'Stress Level Detection System',
    description:
      'Developed a machine learning model for stress-level prediction achieving 88–90% accuracy. Applied feature engineering, cross-validation, and model comparison across multiple classifiers.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
    github: 'https://github.com/EhabEllati14',
  },
  {
    id: 5,
    name: 'RESTful Task Management System',
    description:
      'Designed and implemented a secure task-management backend with REST APIs, JWT authentication, and role-based access control (RBAC). Containerized for consistent deployments.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'RBAC', 'JWT'],
    github: 'https://github.com/EhabEllati14',
  },
  {
    id: 6,
    name: 'Car Maintenance Application',
    description:
      'Developed a car-maintenance application supporting user authentication, service booking, maintenance tracking, and backend/database integration using object-oriented programming and client-server architecture.',
    tags: ['OOP', 'Client-Server', 'Authentication', 'Service Booking', 'Database'],
    github: 'https://github.com/EhabEllati14',
  },
]
