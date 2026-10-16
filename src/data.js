// Add verified repository / demo URLs here when you are ready to publish them.
// Leave a URL as an empty string until it is real; the UI will not show a dead link.
export const projects = [
  {
    id: 'file-server',
    number: '01',
    title: 'Multithreaded File Server',
    subtitle: 'Concurrency · Networking · Access control',
    description:
      'A high-performance C++ file server designed for concurrent client requests, with synchronization primitives, authentication, and role-based access control.',
    detail: '100+ simultaneous connections',
    category: 'systems',
    categoryLabel: 'Systems',
    year: '2026',
    stack: ['C++', 'POSIX threads', 'TCP/IP', 'Reader–writer locks'],
    github: '',
    demo: '',
    visual: 'server',
  },
  {
    id: 'memory-simulator',
    number: '02',
    title: 'Memory Management Simulator',
    subtitle: 'Operating systems · Performance analysis',
    description:
      'A C++ simulator for allocation strategies, paging-based virtual memory, multi-level caches, and real-time fragmentation analytics.',
    detail: '4 allocation strategies',
    category: 'systems',
    categoryLabel: 'Systems',
    year: '2026',
    stack: ['C++', 'First / Best / Worst Fit', 'Buddy allocator', 'FIFO / LRU'],
    github: '',
    demo: '',
    visual: 'memory',
  },
  {
    id: 'docunova',
    number: '03',
    title: 'DocuNova',
    subtitle: 'PDF intelligence · Retrieval-augmented generation',
    description:
      'A smart PDF reader combining semantic retrieval, vector embeddings, persona-aware ranking, multi-document reasoning, and citation-grounded generation.',
    detail: 'Vision and Language Group · IIT Roorkee',
    category: 'ai',
    categoryLabel: 'Applied AI',
    year: '2025',
    stack: ['RAG', 'Embeddings', 'LLMs', 'Adobe Embed API'],
    github: '',
    demo: '',
    visual: 'docunova',
  },
  {
    id: 'ewaste',
    number: '04',
    title: 'E-Waste Screening System',
    subtitle: 'Computer vision · Intelligent recycling',
    description:
      'An embedded vision workflow for real-time e-waste detection and classification across categories such as mobile phones, PCBs, and batteries.',
    detail: '93.4% classification accuracy · 97.9% mAP',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    year: '2024',
    stack: ['YOLOv9', 'ResNet', 'VGG', 'Transfer learning'],
    github: '',
    demo: '',
    visual: 'vision',
  },
];

export const highlights = [
  { value: 'Top 100', label: 'National ranking · Adobe India Hackathon', icon: 'spark' },
  { value: '#782', label: 'Meta Hacker Cup 2025 · Round 2', icon: 'trophy' },
  { value: '#635', label: 'Codeforces Round 1080', icon: 'terminal' },
  { value: '8.825', label: 'CGPA · Mathematics & Computing', icon: 'academic' },
];

export const roles = [
  {
    date: 'SEP 2025 — PRESENT',
    role: 'Executive Member',
    org: 'Team Wellness · IIT Roorkee',
    description: 'Supported student well-being initiatives, including the Inter IIT Wellness Meet 2026 hosted at IIT Roorkee.',
  },
  {
    date: 'AUG 2025 — FEB 2026',
    role: 'Coordinator',
    org: 'Placement and Internship Cell · IIT Roorkee',
    description: 'Coordinated recruitment operations for 20+ companies, including company interactions, candidate coordination, and drive execution.',
  },
  {
    date: 'OCT 2024 — PRESENT',
    role: 'Competitive Programmer',
    org: 'Online Judges',
    description: 'Codeforces Expert (max rating 1724) and CodeChef 4-Star (max rating 1818).',
  },
];
