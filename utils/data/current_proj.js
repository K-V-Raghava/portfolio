export const currentProjects = [
  // Add your newest projects at the TOP of this array so they appear on the left side
  {
    id: 1,
    title: "Local Agent System Architecture",
    date: "May 9, 2026",
    description: "Architecting a production-ready local AI agent with a three-track execution system (Chat, Plan, Refuse). Utilizing a hybrid memory graph with SQLite for exact state retrieval and Chroma for semantic matching.",
    update: "Changing and improving orchestrator logic with better structured output support to reduce incompatibility errors. Also planned to implement Vectorless RAG inspired Graph/Reasoning based vector memory storage for faster and efficient context retrieval.",
    image: "", // Leave empty ("") if you don't have an image for this project
  },
  {
    id: 2,
    title: "Portfolio Refactoring - MPGA (Make Portfolio Great Again)",
    date: "May 10, 2026",
    description: "Upgrading my personal portfolio to a modern Next.js 13+ application with advanced UI/UX, glassmorphism effects, and dynamic data rendering.",
    update: "Implemented horizontally scrollable live-project timelines and refactored the experience section. Big updates to about section and also added recent internship experience.",
    image: "/image/portfolio.png", 
  },
  {
    id: 3,
    title: "Local AI AGENT",
    date: "May 10, 2026",
    description: "Architecting a production-ready local AI agent with a three-track execution system (Chat, Plan, Refuse). Utilizing a hybrid memory graph with SQLite for exact state retrieval and Chroma for semantic matching.",
    update: "Successfully implemented the news agent with tool calling and whatsapp interface for chat.",
    image: "",
  },
  {
    id: 11,
    title: "AI-Agent",
    date: "2026-05-07",
    description: "Built multi agentic system from scratch with local LLM models using LM Studio server.\nUses web search, semantic search, Gmail and Google Calendar API integration.",
    update: "Security-oriented OpenClaw-style build with WhatsApp prompts and responses. The original scope and idea is to have a news agent , email summarizer agent and a calender agent. Implementing google api and related architecture.",
    image: ""
  },
  {
    id: 12,
    title: "Panda_Arts",
    date: "2026-04-05",
    description: "Panda Sleep Arts.\nFront-end repo with React/Vite assets and a portfolio-style structure.",
    update: "Recent work focused on Hero and Work component refactors, project data updates, and background image handling. Better formatting for this project out of love for pandas.",
    image: ""
  },
  {
    id: 13,
    title: "MiPa",
    date: "2026-03-28",
    description: "Research paper Critique and improvement study of Mixed Patch visible-infrared object detection.\nCompares the paper’s training method across CNN and ViT backbones.",
    update: "Experimented with additional comparisons, and analysis for MiPa. The paper misses detailed reasoning of many choices and my experiments showed improved performance using variable learning rate with cosine decay and other adaptive lr techniques. Also better performance using differnt sampling distributions compared to just using uniform like in the paper.",
    image: ""
  },
  {
    id: 4,
    title: "MedTech",
    date: "2026-03-25",
    description: "College project for making ML model on a cancer dataset given by AIIMS doctor. The dataset is curated by the doctor for prakriti analysis of patients and its correlation with cancer growth and treatment effects",
    update: "Early-stage implementation of multiple ML models done. It is observed that signal is inherently leading to poor correlation between prakriti and patient's cancer stage. Further study with temporal data could prove to have an effect.",
    image: ""
  },
  {
    id: 5,
    title: "Cancer-Detection-Model",
    date: "2026-02-22",
    description: "PyTorch implementation of a cancer detection model built from scratch using CNNs.\nFocuses on GPU-optimized training, RAM image caching, mixed precision, and model comparison.",
    update: "Histopathology cancer detection pipeline with confidence-aware evaluation and a two-model CNN setup.",
    image: ""
  },
  {
    id: 6,
    title: "Route-Optimisation",
    date: "2026-02-22",
    description: "Real-time nearest hospital finder with shortest-path routing.\nDual implementation using Flask + OSMnx + NetworkX in Python and a from-scratch C++ Dijkstra engine.",
    update: "Emergency routing project aimed at finding the nearest hospital and computing the fastest route.",
    image: ""
  },
  {
    id: 7,
    title: "SpotEase-Spotify-Widget-for-macOS",
    date: "2026-02-22",
    description: "Lightweight Spotify integration using the full OAuth 2.0 Authorization Code Flow via Flask.\nAutomatically refreshes tokens and retrieves real-time currently playing track data.",
    update: "Two-file Python widget for Spotify login, token refresh, and now-playing tracking. Made this widget cause inbuilt mac os widget was not to my liking.",
    image: ""
  },
  {
    id: 8,
    title: "3D-Motion-Tracking-System",
    date: "2026-01-10",
    description: "Train Keras 3D motion tracking model using IMU measurements.\nConverts the model to TensorFlow Lite for deployment on Arduino microcontrollers.",
    update: "Edge-AI gesture and motion tracking pipeline built for resource-constrained hardware.",
    image: ""
  },
  {
    id: 9,
    title: "Manhwa-agent",
    date: "2025-11-28",
    description: "Offline-first self-hosted dashboard for tracking a personalized reading list on Asura Scans.\nUses browser emulation, Docker, n8n, and a desktop widget for update delivery.",
    update: "Automation-heavy manga/manhwa tracker with containerized scraping and persistent state handling. It tracks and updates all my manhwas and gives me a single interface of app which directly has clickable links that takes manhwas from multiple sources. Improved my quality of life.",
    image: ""
  },
  {
    id: 10,
    title: "Gesture-Controlled-UI-Navigation-Interface",
    date: "2025-07-03",
    description: "Real-time hand-gesture mouse control using webcam input.\nBuilt with Python, OpenCV, MediaPipe, and PyAutoGUI for touchless UI navigation.",
    update: "Accessibility-focused gesture mouse interface with JSON calibration and low-latency recognition. The camera detects hand gestures and decides for navigation controls like selecting , close , open , drag and drop etc. Can be improved with potential use cases in VR products.",
    image: ""
  },
  {
    id: 14,
    title: "Multi agentic system",
    date: "2026-05-11",
    description: "Local AI agent built from scratch with deployment ready professional architecture with multi agentic architecture with planner/worker/feedback models.",
    update: "After Huge effort , I managed to get more robust tool calling and 3 modes of operation : chat , plan , refuse. Chat will only have conversational capabilities while plan will be agentic system with tool calling and refuse mode as safety fall back.\n This lets me have conversation and direct memory retrieval and answering capabilities without having to trigger worker model.",
    image: ""
  },
  
  {
    id: 15,
    title: "Multi agent system",
    date: "2026-05-18",
    description: "Local AI agent built from scratch. Contains multi agentic architecture with planner/worker/feedback models with adaptive context scaling.",
    update: "Architecture behaviour for simple prompts is correct with no fetching of unwanted context but an error has occured where the model is replying with its ability to answer a simple prompt but not the answer itself.",
    image: ""
  }
  {
    id: 16,
    title: "Multi agent system",
    date: "2026-06-02",
    description: "Local AI agent built from scratch. Contains multi agentic architecture with planner/worker/feedback models with adaptive context scaling.",
    update: "Completed with the project along with final tests for latency, token usage, inference times and other metrics. Will post the metrics and related data and findings in github and a video demo in the future.",
    image: ""
  }
  
  // {
  //   id: 17,
  //   title: "",
  //   date: "2026-05-11",
  //   description: ".",
  //   update: ".",
  //   image: ""
  // }
  
  // {
  //   id: 18,
  //   title: "",
  //   date: "2026-05-11",
  //   description: ".",
  //   update: ".",
  //   image: ""
  // }
  // {
  //   id: 19,
  //   title: "",
  //   date: "2026-05-11",
  //   description: ".",
  //   update: ".",
  //   image: ""
  // }
];
