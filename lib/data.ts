// Static product data — will be CMS-driven once DB is connected
export const PRODUCTS = [
  {
    slug: "newsforge",
    name: "NewsForge",
    tagline: "AI-Powered Newsroom Management",
    description:
      "The complete newsroom operating system. From story assignment to playout, NewsForge automates every step of your broadcast workflow with enterprise AI.",
    icon: "📡",
    color: "#00d4ff",
    badge: "Flagship",
    features: [
      { icon: "🖊️", title: "Editor", description: "Collaborative script editor with AI writing assistance and real-time co-editing." },
      { icon: "📋", title: "Rundown", description: "Dynamic rundown management with drag-and-drop reordering and live updates." },
      { icon: "🔌", title: "MOS Integration", description: "Full MOS protocol support for seamless integration with broadcast systems." },
      { icon: "📹", title: "PCR & MCR", description: "Programme and Master Control Room automation for broadcast-ready operations." },
      { icon: "▶️", title: "Playout", description: "Automated playout scheduling with AI-assisted timing and traffic management." },
      { icon: "📥", title: "Ingest", description: "Multi-source media ingest with automatic transcoding and quality control." },
      { icon: "🗄️", title: "Archive", description: "Intelligent media archiving with AI-powered metadata tagging and retrieval." },
      { icon: "⚙️", title: "Automation", description: "Workflow automation engine for eliminating repetitive manual tasks." },
      { icon: "🤖", title: "AI Engine", description: "Embedded AI for transcription, translation, summarization, and sentiment analysis." },
    ],
  },
  {
    slug: "ai-tutor",
    name: "AI Tutor",
    tagline: "Personalized Learning at Scale",
    description:
      "Adaptive AI tutoring platform that personalizes education for every student. Built for schools, universities, and EdTech platforms.",
    icon: "🎓",
    color: "#7c3aed",
    badge: null,
    features: [
      { icon: "👩‍🎓", title: "Student Portal", description: "Personalized learning paths, adaptive assessments, and real-time progress tracking." },
      { icon: "👨‍🏫", title: "Teacher Dashboard", description: "AI-assisted lesson planning, assignment creation, and class performance analytics." },
      { icon: "👨‍👩‍👧", title: "Parent Insights", description: "Real-time visibility into child's progress, attendance, and teacher feedback." },
      { icon: "🏫", title: "School Admin", description: "Institution-wide analytics, curriculum management, and compliance reporting." },
      { icon: "📊", title: "Learning Analytics", description: "Deep behavioral and performance analytics to identify learning gaps early." },
      { icon: "📚", title: "Homework AI", description: "AI-powered homework help that guides students without giving away answers." },
    ],
  },
  {
    slug: "mam",
    name: "Media Asset Management",
    tagline: "Intelligent Media at Enterprise Scale",
    description:
      "AI-powered MAM that automatically organizes, tags, and retrieves your media library. From raw footage to finished assets — find anything in seconds.",
    icon: "🗂️",
    color: "#06b6d4",
    badge: null,
    features: [
      { icon: "🏷️", title: "Smart Metadata", description: "Automatic metadata extraction and enrichment from video, audio, and image content." },
      { icon: "👤", title: "Face Recognition", description: "Enterprise-grade facial recognition for rapid talent and subject identification." },
      { icon: "🎙️", title: "Speech Recognition", description: "Automated transcription in 50+ languages with speaker diarization." },
      { icon: "🔡", title: "OCR", description: "Text extraction from graphics, lower thirds, and on-screen text at scale." },
      { icon: "🔍", title: "Semantic Search", description: "Search by concept, emotion, or natural language — not just keywords." },
      { icon: "🤖", title: "Auto Tagging", description: "AI-generated content tags, categories, and content descriptors." },
      { icon: "☁️", title: "Cloud Archive", description: "Tiered cloud storage with intelligent recall and format transcoding." },
    ],
  },
  {
    slug: "ai-editing",
    name: "AI Video Editing",
    tagline: "From Footage to Final in Minutes",
    description:
      "AI-native video editing platform that auto-edits rushes, generates highlight reels, and produces broadcast-ready packages at machine speed.",
    icon: "🎬",
    color: "#f59e0b",
    badge: "New",
    features: [
      { icon: "✂️", title: "Auto-Edit", description: "AI analyzes footage and creates intelligently edited sequences automatically." },
      { icon: "🎯", title: "Highlight Detection", description: "Automatically detects the best moments for highlight reels and clips." },
      { icon: "🎵", title: "Audio Sync", description: "Intelligent music and audio synchronization with beat detection." },
      { icon: "📐", title: "Multi-Format Export", description: "One-click export for broadcast, web, social, and vertical formats." },
      { icon: "🎨", title: "Style Templates", description: "Brand-consistent style templates applied automatically across all content." },
      { icon: "⚡", title: "Real-time Collaboration", description: "Cloud-based collaborative editing with version control and review workflows." },
    ],
  },
  {
    slug: "broadcast-suite",
    name: "Broadcast Automation",
    tagline: "End-to-End Broadcast Control",
    description:
      "Complete broadcast automation suite for TV, OTT, and streaming. Reduce operational costs while maintaining broadcast-quality reliability.",
    icon: "📺",
    color: "#ef4444",
    badge: null,
    features: [
      { icon: "🎙️", title: "Live Production", description: "AI-assisted live production switching, graphics, and replay management." },
      { icon: "📅", title: "Schedule Planner", description: "Intelligent broadcast schedule planning with conflict detection and optimization." },
      { icon: "📡", title: "Signal Management", description: "Multi-signal monitoring, redundancy management, and automatic failover." },
      { icon: "📊", title: "Viewership Analytics", description: "Real-time ratings and audience analytics integrated into editorial decisions." },
      { icon: "🔄", title: "Automation Engine", description: "Event-driven automation for routine broadcast operations and transitions." },
      { icon: "🌐", title: "OTT Distribution", description: "Simultaneous broadcast and OTT delivery with adaptive bitrate streaming." },
    ],
  },
  {
    slug: "knowledge-ai",
    name: "Knowledge AI",
    tagline: "Enterprise Intelligence. Instant Answers.",
    description:
      "RAG-powered knowledge system that turns your organization's documents, policies, and data into an always-available intelligent assistant.",
    icon: "🧠",
    color: "#10b981",
    badge: null,
    features: [
      { icon: "📄", title: "Document Intelligence", description: "Ingest any document type — PDFs, Word docs, presentations, spreadsheets." },
      { icon: "💬", title: "Conversational Q&A", description: "Natural language questions answered with cited sources from your knowledge base." },
      { icon: "🔐", title: "Private Deployment", description: "On-premise or VPC deployment so your data never leaves your infrastructure." },
      { icon: "🔗", title: "System Integration", description: "Connect to your existing tools — SharePoint, Confluence, Notion, databases." },
      { icon: "📈", title: "Usage Analytics", description: "Track what employees search for most to identify knowledge gaps." },
      { icon: "🛡️", title: "Role-Based Access", description: "Granular document access controls aligned with your org structure." },
    ],
  },
];

export const INDUSTRIES = [
  { slug: "news-channels", name: "News Channels", icon: "📺", description: "AI-powered newsroom automation for breaking news, live broadcasts, and digital publishing." },
  { slug: "education", name: "Education", icon: "🎓", description: "Personalized learning at scale for K-12, universities, and EdTech platforms." },
  { slug: "government", name: "Government", icon: "🏛️", description: "Secure, compliant AI solutions for public sector communications and knowledge management." },
  { slug: "corporate", name: "Corporate", icon: "🏢", description: "Enterprise knowledge systems, training, and internal communications automation." },
  { slug: "healthcare", name: "Healthcare", icon: "🏥", description: "HIPAA-compliant media and knowledge management for healthcare organizations." },
  { slug: "broadcast", name: "Broadcast", icon: "📡", description: "Complete broadcast automation from production to multi-platform distribution." },
  { slug: "publishing", name: "Publishing", icon: "📰", description: "AI-assisted content creation, media management, and digital publishing workflows." },
];

export const COMPANY_STATS = [
  { value: 6, suffix: "+", label: "AI Products" },
  { value: 7, suffix: "", label: "Industries Served" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
];

export const WHY_KAYAK = [
  {
    icon: "🏢",
    title: "Enterprise Ready",
    description: "Built for the demands of large-scale enterprise deployments with 99.9% SLA, dedicated support, and compliance-ready infrastructure.",
  },
  {
    icon: "🤖",
    title: "AI First",
    description: "Every product is built AI-native — not AI-bolted-on. Purpose-built models fine-tuned for media, education, and enterprise workflows.",
  },
  {
    icon: "📈",
    title: "Scalable",
    description: "From a single newsroom to a nationwide network. Kayak AI scales with your organization without architectural changes.",
  },
  {
    icon: "🔒",
    title: "Secure",
    description: "End-to-end encryption, role-based access control, private cloud deployment options, and compliance with major data protection frameworks.",
  },
  {
    icon: "🇮🇳",
    title: "Indian Innovation",
    description: "World-class AI engineered in India, with deep domain expertise in Indian media, education, and government contexts.",
  },
  {
    icon: "🌍",
    title: "Global Vision",
    description: "Designed for global scale with multi-language support, regional compliance, and deployment infrastructure across continents.",
  },
];

export const ENTERPRISE_AI_CONCEPTS = [
  {
    icon: "🔍",
    title: "Retrieval-Augmented Generation (RAG)",
    description: "RAG combines your proprietary knowledge base with large language models, grounding AI responses in your actual data rather than training cutoffs.",
    link: "/products/knowledge-ai",
  },
  {
    icon: "🧩",
    title: "Large Language Models (LLMs)",
    description: "We integrate and fine-tune state-of-the-art LLMs — optimized for domain-specific tasks in media, education, and enterprise contexts.",
    link: "/products/knowledge-ai",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description: "Intelligent process automation that learns from patterns, adapts to exceptions, and orchestrates complex multi-step workflows autonomously.",
    link: "/products/broadcast-suite",
  },
  {
    icon: "🔎",
    title: "Knowledge Search",
    description: "Semantic search that understands meaning and context, not just keywords — enabling natural language queries across your entire knowledge base.",
    link: "/products/knowledge-ai",
  },
  {
    icon: "🌐",
    title: "Private AI Deployment",
    description: "On-premise and VPC deployment options ensuring your sensitive data never leaves your infrastructure while still leveraging cutting-edge AI.",
    link: "/products/knowledge-ai",
  },
  {
    icon: "🤖",
    title: "Agentic AI",
    description: "Autonomous AI agents that plan, reason, and execute complex multi-step tasks with minimal human intervention — the next frontier in enterprise AI.",
    link: "/enterprise-ai",
  },
];

export const NAVIGATION = {
  products: PRODUCTS.map((p) => ({ name: p.name, href: `/products/${p.slug}`, icon: p.icon, tagline: p.tagline })),
  solutions: INDUSTRIES.map((i) => ({ name: i.name, href: `/solutions/${i.slug}`, icon: i.icon })),
  main: [
    { name: "About", href: "/about" },
    { name: "Enterprise AI", href: "/enterprise-ai" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};
