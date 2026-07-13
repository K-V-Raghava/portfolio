export const projectsData = [
  {
    id: 1,
    name: 'Cancer-Detection-Model',
    slug: 'Cancer-Detection-Model',
    description: "A machine learning–based cancer detection model designed to analyze histopathology images to identify patterns indicative of malignant disease. The project compares two CNN architectures: a Baseline model (~4M parameters) with three dense layers and a smaller Advanced model (~1.5M parameters) using Global Average Pooling and dropout regularization. Despite having 2.6x fewer parameters, the Advanced model achieves higher validation accuracy (92% vs 83%) while being more memory-efficient and less prone to overfitting. The model leverages supervised learning to distinguish between cancerous and non-cancerous cases, enabling early detection, risk stratification, and decision support for clinicians.",
    tools: ['Python', 'PyTorch', 'torchvision', 'OpenCV', 'NumPy', 'Pandas', 'scikit-learn', 'Pillow', 'Matplotlib', 'Seaborn', 'CUDA'],
    role: 'AI ML Engineer',
    code: 'https://github.com/b23bb1023/Cancer-Detection-Model',
    demo: '',
    image: '/image/cancer.png',
    domain: 'AI/ML',
    highlights: [
      'Built two CNN architectures (Baseline: 4M params vs Advanced: 1.5M params) achieving superior efficiency via Global Average Pooling',
      'Designed GPU-optimized training pipeline with mixed-precision AMP, async CUDA streaming prefetcher, and RAM image caching',
      'Achieved 92% validation accuracy with confidence-tier reliability analysis across 220K histopathology images',
      'Implemented comprehensive model evaluation generating 14 visualizations including ROC curves, confusion matrices, and precision-recall analysis'
    ],
    features: [
      { icon: 'brain', title: 'CNN Architecture Comparison', desc: 'Baseline (4M params, 3 dense layers) vs Advanced (1.5M params, GAP + dropout) — Advanced achieves 92% accuracy with 2.6x fewer parameters' },
      { icon: 'layer', title: 'Data Augmentation Pipeline', desc: 'Rotation, flipping, zoom, and brightness adjustments via torchvision transforms to combat overfitting and improve generalization' },
      { icon: 'search', title: 'GradCAM Visualization', desc: 'Gradient-weighted Class Activation Mapping for interpretable heatmaps showing which regions the model focuses on for diagnosis' },
      { icon: 'chip', title: 'GPU-Optimized Training', desc: 'Mixed-precision AMP, async CUDA streaming prefetcher with pinned memory, and RAM image caching for maximum throughput' },
      { icon: 'chart', title: 'Imbalanced Data Handling', desc: 'Weighted loss function with class-balancing strategies for multi-class histopathology classification across tissue types' },
      { icon: 'data', title: '220K Image Pipeline', desc: 'End-to-end pipeline from raw histopathology slides to confidence-tiered predictions with comprehensive evaluation metrics' }
    ],
    architecture: 'Two CNN architectures were built and compared. The Baseline model uses 3 convolutional blocks (32→64→128 filters) followed by three dense layers (256→128→4). The Advanced model uses 4 convolutional blocks (32→64→128→256) with Global Average Pooling replacing dense layers, plus dropout (0.5) and batch normalization for regularization. Training uses cross-entropy loss with Adam optimizer (lr=0.001, ReduceLROnPlateau). A custom data loader pipeline with async CUDA prefetching maximizes GPU utilization on histopathology patches.',
    outcomes: [
      { value: '92%', label: 'Validation Accuracy' },
      { value: '1.5M', label: 'Params (Advanced)' },
      { value: '220K', label: 'Images Processed' },
      { value: '14', label: 'Evaluation Charts' }
    ]
  },
  {
    id: 2,
    name: 'Personal Portfolio',
    slug: 'portfolio-website',
    description: "A modern, high-performance developer portfolio built with Next.js 13+ App Router and Tailwind CSS. Features a responsive dark-themed design with glassmorphism effects, dynamic project showcases with letterboxed previews, a live project timeline tracking ongoing development, and integrated contact form. Deployed on Cloudflare Pages with Google Tag Manager analytics.",
    tools: ['Next.js', 'Tailwind CSS', 'React', 'SCSS', 'React Icons'],
    role: 'Frontend Developer',
    code: 'https://github.com/K-V-Raghava/portfolio',
    demo: '',
    image: '/image/portfolio.png',
    domain: 'Web Dev',
    highlights: [
      'Built full-stack portfolio with Next.js 13+ App Router, Tailwind CSS, and dynamic project routing via [slug] pages',
      'Designed glassmorphism UI with dark theme, custom gradients, and responsive layouts across mobile/tablet/desktop',
      'Implemented live project timeline component tracking 16+ updates across all projects with date-stamped entries',
      'Integrated Google Tag Manager analytics and deployed on Cloudflare Pages with optimized static generation'
    ],
    features: [
      { icon: 'palette', title: 'Dark Theme Design', desc: 'Glassmorphism UI with dark theme, custom gradients, and responsive cross-device layout optimization' },
      { icon: 'code', title: 'Dynamic Project Routing', desc: 'Next.js App Router with [slug]-based dynamic project detail pages generated from static data' },
      { icon: 'mobile', title: 'Responsive Grid', desc: 'Letterboxed project previews in a two-column domain-based layout with mobile-first responsive design' },
      { icon: 'data', title: 'Live Timeline', desc: 'Date-stamped project timeline component tracking 16+ updates with ongoing development entries' },
      { icon: 'rocket', title: 'Cloudflare Deployment', desc: 'Optimized static generation deployed on Cloudflare Pages with Google Tag Manager analytics' },
      { icon: 'layer', title: 'Sticky Card Layout', desc: 'Sticky-positioned project cards with scroll-based stacking for engaging visual browsing experience' }
    ],
    architecture: 'Next.js 15 App Router with static generation (generateStaticParams). Pages: Homepage (client-side Projects component with domain-based two-column layout) + Dynamic [slug] project detail pages. Data flows from static JS module (utils/data/projects-data.js) into React components. Styling via Tailwind CSS with SCSS for custom components. Deployment via Cloudflare Pages with GTM analytics.',
    outcomes: [
      { value: '11', label: 'Projects' },
      { value: '2', label: 'Domains' },
      { value: '16+', label: 'Timeline Updates' },
      { value: '100', label: 'Lighthouse Score' }
    ]
  },
  {
    id: 3,
    name: 'Route Optimisation (Google Maps Clone)',
    slug: 'Route-Optimisation',
    description: "A real-time route optimization algorithm integrated into a web-based application that computes the shortest and most efficient paths using live data. The system dynamically processes factors such as distance, travel time, and routing constraints to deliver optimal navigation results. Paired with a user-friendly interface and interactive map features comparable to Google Maps, it enables seamless route visualization, turn-by-turn guidance, and responsive updates to enhance usability and decision-making.",
    tools: ['Python', 'C++', 'JavaScript', 'Flask', 'NetworkX', 'OSMnx', 'Geopy', 'Folium', 'Leaflet.js', 'HTML/CSS'],
    role: 'Web Developer',
    code: 'https://github.com/b23bb1023/Route-Optimisation',
    demo: '',
    image: '/image/Route.png',
    domain: 'Web Dev',
    highlights: [
      'Built dual-implementation system: Flask web app (OSMnx/NetworkX) + 650-line from-scratch C++ Dijkstra engine',
      'Implemented hand-built data structures: binary min-heap with decrease-key, adjacency-list graph, and QuickSort',
      'Engineered real-time hospital POI search with dynamic radius expansion (5km to 10km fallback)',
      'Integrated interactive Leaflet maps via Folium with turn-by-turn route visualization and ETA computation'
    ],
    features: [
      { icon: 'network', title: 'Dijkstra Algorithm', desc: 'Dual implementation: Python (NetworkX library) + 650-line from-scratch C++ with hand-built binary min-heap and adjacency-list graph' },
      { icon: 'globe', title: 'OSM Integration', desc: 'Real-world road network data via OSMnx — downloads, parses, and converts OpenStreetMap data into navigable graph structures' },
      { icon: 'data', title: 'POI Search Engine', desc: 'Hospital/landmark search with dynamic radius expansion (5km → 10km fallback) and proximity ranking' },
      { icon: 'code', title: 'Hand-Built Data Structures', desc: 'Binary min-heap with decrease-key operation, adjacency-list graph representation, and QuickSort for path post-processing' },
      { icon: 'server', title: 'Flask Web App', desc: 'Python Flask backend with route computation API, interactive Folium map rendering, and Leaflet.js frontend' },
      { icon: 'chart', title: 'Turn-by-Turn Navigation', desc: 'Route visualization with waypoint markers, distance labels, and estimated travel time at each segment' }
    ],
    architecture: 'Dual-architecture system: (1) Python/Flask web app uses OSMnx to fetch road networks from OpenStreetMap, NetworkX for graph construction and Dijkstra routing, Folium for Leaflet map rendering with turn-by-turn visualization. (2) Standalone C++ engine with hand-built binary min-heap, adjacency-list graph, and Dijkstra implementation. Both compute shortest paths from weighted graphs using edge distance as cost. Hospital POI search uses KD-tree spatial indexing with progressive radius expansion.',
    outcomes: [
      { value: '2x', label: 'Implementations' },
      { value: '650', label: 'C++ Lines' },
      { value: 'Real-time', label: 'Routing' },
      { value: 'OSM', label: 'Data Source' }
    ]
  },
  {
    id: 4,
    name: 'Manhwa Agent Bot',
    slug: 'Manhwa-agent',
    description: "An automated offline-first dashboard that tracks personalized reading lists from Asura Scans. Uses a Playwright-based browser emulation layer to detect new unread chapters and displays them in a Flet desktop widget. An n8n workflow orchestrates 6-hourly scans with Docker containerization, automatically opening new chapters in the browser.",
    tools: ['Python', 'FastAPI', 'Playwright', 'BeautifulSoup', 'Flet', 'Uvicorn', 'Docker', 'Docker Compose', 'n8n'],
    role: 'Full Stack Developer',
    code: 'http://github.com/b23bb1023/Manhwa-agent',
    demo: '',
    image: '/image/Manhwa.png',
    domain: 'Web Dev',
    highlights: [
      'Architected 3-tier containerized system: Playwright/FastAPI scraper + n8n orchestrator + Flet desktop GUI',
      'Implemented anti-bot bypass with headless Chromium, User-Agent spoofing, and 4-second rate-limit throttling',
      'Designed 12-node n8n automation workflow with dual-trigger (6-hour schedule + on-demand webhook)',
      'Engineered base64 image pipeline to bypass CDN hotlink protection on Cloudflare-protected sources'
    ],
    features: [
      { icon: 'server', title: 'Offline-First Dashboard', desc: 'Self-hosted with Docker Compose — fully air-gapped operation with no external service dependencies' },
      { icon: 'bot', title: 'Browser Emulation', desc: 'Playwright-based headless Chromium scraper with User-Agent spoofing and 4-second rate-limit throttling to avoid detection' },
      { icon: 'code', title: 'n8n Automation', desc: '12-node n8n workflow with dual-trigger (6-hour cron schedule + on-demand webhook) for tracking reading list updates' },
      { icon: 'mobile', title: 'Flet Desktop Widget', desc: 'Cross-platform desktop GUI built with Python Flet — real-time reading list updates with one-click chapter launch' },
      { icon: 'data', title: 'CDN Bypass Pipeline', desc: 'Base64-encoded image pipeline to circumvent Cloudflare hotlink protection while maintaining visual previews' },
      { icon: 'layer', title: '3-Tier Architecture', desc: 'Scraper tier (Playwright/FastAPI) → Orchestrator tier (n8n in Docker) → Presentation tier (Flet desktop app)' }
    ],
    architecture: 'Three-tier containerized architecture: (1) Scraper tier — Playwright headless Chromium controlled via FastAPI REST API scrapes Asura Scans for chapter updates, bypasses Cloudflare with User-Agent rotation and rate-limit throttling. (2) Orchestrator tier — n8n automation platform running in Docker with 12-node workflow triggered every 6 hours or via webhook; compares current chapter list against stored state and triggers notification on new chapters. (3) Presentation tier — Flet desktop app displays reading list with chapter status (read/unread/new) and one-click browser launch.',
    outcomes: [
      { value: '3', label: 'Docker Tiers' },
      { value: '12', label: 'n8n Nodes' },
      { value: '6hr', label: 'Auto-Scan' },
      { value: '0', label: 'Cloud Deps' }
    ]
  },
  {
    id: 5,
    name: 'Spotify Widget for macOS',
    slug: 'Spotify_Widget',
    description: "A learning-focused macOS widget that integrates with the Spotify Web API via OAuth 2.0 to display and control currently playing music. Built as a utility project to explore OAuth Authorization Code Flow, automatic token refresh mechanisms, and REST API integration patterns. The widget retrieves real-time playback state (track title, artist, album art, progress), enables play/pause/skip controls, and displays recently played tracks. Note: This is a learning/utility project exploring Spotify API integration patterns — not a production-grade macOS widget.",
    tools: ['Python', 'Flask', 'Requests', 'Spotify Web API', 'OAuth 2.0'],
    role: 'Product Engineer',
    code: 'https://github.com/b23bb1023/SpotEase-Spotify-Widget-for-macOS',
    demo: '',
    image: '/image/Spotify.png',
    domain: 'Web Dev',
    highlights: [
      'Implemented full OAuth 2.0 Authorization Code Flow with Spotify Web API including automatic token refresh',
      'Built Flask web server handling login redirect, callback token exchange, and real-time currently-playing retrieval',
      'Designed stateless two-file architecture separating OAuth handshake from API consumption logic',
      'Enabled cross-platform compatibility via PyAutoGUI with macOS-specific and Windows-specific hotkey support'
    ],
    features: [
      { icon: 'lock', title: 'OAuth 2.0 Flow', desc: 'Authorization Code Flow with PKCE — handles login redirect, callback token exchange, and automatic token refresh every 60 minutes' },
      { icon: 'code', title: 'Spotify Web API', desc: 'REST API integration for currently-playing, playback control (play/pause/skip), recently played, and user profile endpoints' },
      { icon: 'mobile', title: 'Desktop Widget', desc: 'PyAutoGUI-powered overlay widget with macOS and Windows hotkey support for seamless media control' },
      { icon: 'server', title: 'Flask Auth Server', desc: 'Lightweight Flask server handling the OAuth callback, token storage, and API proxy requests' },
      { icon: 'data', title: 'Stateless Architecture', desc: 'Two-file design cleanly separates OAuth handshake logic from Spotify API consumption — saves tokens as JSON' },
      { icon: 'layer', title: 'Token Refresh Pipeline', desc: 'Automatic 401 detection triggers token refresh using refresh_token — seamless uninterrupted playback tracking' }
    ],
    architecture: 'Stateless two-file architecture: (1) spotify_oauth.py handles the OAuth 2.0 Authorization Code Flow — redirects user to Spotify login, exchanges authorization code for access/refresh tokens, and automatically refreshes expired tokens. (2) spotify_widget.py consumes the Spotify Web API using stored tokens — polls /v1/me/player/currently-playing every 5 seconds, displays track info in a PyAutoGUI overlay, and supports media control via keyboard shortcuts. No database required — tokens stored as JSON in user config directory.',
    outcomes: [
      { value: 'OAuth 2.0', label: 'Auth Flow' },
      { value: '60min', label: 'Token Refresh' },
      { value: '5s', label: 'Poll Interval' },
      { value: '2', label: 'Files Total' }
    ]
  },
  {
    id: 6,
    name: 'Gesture-Based Mouse Control',
    slug: 'Gesture',
    description: "A real-time touchless human-computer interaction system that uses a webcam to capture hand gestures and control mouse functions. The system recognizes a 5-gesture vocabulary — Cursor Control (open hand with index finger extended), Left Click (index-middle finger tap), Right Click (middle-ring finger tap), Drag & Drop (closed fist with movement), and Mission Control (all five fingers spread). A calibration system uses adaptive skin detection and background subtraction to work across different lighting conditions and skin tones. Achieves 94.7% recognition accuracy with 95-100ms end-to-end latency using a custom 5D nearest-neighbor classifier on MediaPipe hand landmarks.",
    tools: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI', 'Matplotlib'],
    role: 'Computer Vision Engineer',
    code: 'https://github.com/b23bb1023/Gesture-Controlled-UI-Navigation-Interface',
    demo: '',
    image: '/image/Gesture.png',
    domain: 'AI/ML',
    highlights: [
      'Achieved 94.7% gesture recognition accuracy in bright lighting with 95-100ms end-to-end latency',
      'Built custom 5D nearest-neighbor classifier using MediaPipe hand landmarks with no GPU required',
      'Implemented JSON-based calibration persistence enabling cross-session zero-setup usage',
      'Designed 5-gesture vocabulary with state-machine-driven UI navigation (cursor, click, drag, mission control, exit)'
    ],
    features: [
      { icon: 'cube', title: '21-Point Hand Tracking', desc: 'MediaPipe landmark detection maps 21 3D hand keypoints at 30fps — no GPU required, runs entirely on CPU' },
      { icon: 'code', title: '5-Gesture Vocabulary', desc: 'Cursor (index extended), Click (finger tap), Drag (fist + move), Mission Control (5-finger spread), and Exit (peace sign)' },
      { icon: 'camera', title: 'Touchless HCI', desc: 'Complete mouse control via webcam — movement, clicking, dragging, and system navigation without physical contact' },
      { icon: 'layer', title: 'Calibration System', desc: 'Adaptive skin detection with background subtraction and JSON-based persistence for zero-setup across sessions' },
      { icon: 'chart', title: 'Performance Metrics', desc: '94.7% accuracy in bright lighting, 95-100ms latency, robust to varying backgrounds and hand orientations' },
      { icon: 'brain', title: '5D NN Classifier', desc: 'Custom nearest-neighbor classifier on MediaPipe landmarks — no deep learning needed on client side' }
    ],
    architecture: 'Pipeline: Webcam capture → OpenCV preprocessing (color space conversion, histogram equalization) → MediaPipe Hand landmark detection (21 keypoints) → Feature vector (5D: inter-finger distances + wrist proximity) → Custom k-NN classifier → Gesture state machine → PyAutoGUI system command. The state machine tracks gesture transitions with debouncing to prevent accidental triggers.',
    outcomes: [
      { value: '94.7%', label: 'Accuracy' },
      { value: '~97ms', label: 'Avg Latency' },
      { value: '5', label: 'Gestures' },
      { value: '0 GPU', label: 'Required' }
    ]
  },

  {
    id: 7,
    name: '3D Motion Tracking System',
    slug: '3D-Motion-Tracking-System',
    description: "End-to-end gesture recognition pipeline for Arduino Nano 33 BLE Sense using TensorFlow Lite Micro. Captures 6-axis IMU data at 100Hz, trains a Keras neural network (714→50→15→4), and deploys quantized TFLite inference in under 2ms on an ARM Cortex-M4 microcontroller with 92% accuracy across 4 gesture classes.",
    tools: ['Python', 'TensorFlow', 'Keras', 'TensorFlow Lite Micro', 'Arduino C/C++', 'NumPy', 'Pandas', 'scikit-learn', 'Matplotlib'],
    role: 'Embedded ML Engineer',
    code: 'https://github.com/b23bb1023/3D-Motion-Tracking-System',
    image: '/image/3DMTS.png',
    domain: 'AI/ML',
    highlights: [
      'Deployed full ML model in 12.3KB on ARM Cortex-M4 with only 256KB RAM — 36.5KB to 12.3KB via post-training quantization',
      'Achieved <2ms inference latency and 92% accuracy across 4 gesture classes (punch, upper, slash, stab)',
      'Built complete embedded ML pipeline: data collection firmware → Keras training → TFLite conversion → Arduino deployment',
      'Designed 70% confidence threshold achieving <2% false positive rate with only 7.9% RAM utilization'
    ],
    features: [
      { icon: 'chip', title: 'Edge AI on MCU', desc: 'Full ML inference on ARM Cortex-M4 with 256KB RAM — model compressed to 12.3KB via post-training quantization' },
      { icon: 'layer', title: 'TFLite Quantization', desc: '36.5KB float32 model → 12.3KB int8 quantized — 66% size reduction with <1% accuracy loss' },
      { icon: 'cube', title: '6-Axis IMU Fusion', desc: '100Hz accelerometer + gyroscope data capture on Arduino Nano 33 BLE Sense with onboard LSM9DS1 sensor' },
      { icon: 'rocket', title: '2ms Inference', desc: 'Sub-2ms per inference on Cortex-M4 — model architecture: 714→50→15→4 with int8 quantized operations' },
      { icon: 'data', title: 'Data Collection Firmware', desc: 'Custom Arduino firmware for IMU data capture, labeling, and serial transmission to host for training' },
      { icon: 'search', title: 'Confidence Gating', desc: '70% confidence threshold eliminates uncertain predictions — <2% false positive rate at only 7.9% RAM utilization' }
    ],
    architecture: 'Data collection: Arduino Nano 33 BLE Sense captures 6-axis IMU (accelerometer + gyroscope) at 100Hz → serial transmission to host. Training: Python/Keras pipeline normalizes IMU data and trains a 4-layer DNN (714→50→15→4) with ReLU activations and 20% dropout. Deployment: Model converted to TFLite int8 via post-training quantization → flashed to Arduino via Arduino IDE. Inference: TFLite Micro interpreter runs on Cortex-M4 with <2ms latency and 7.9% RAM usage. A 70% confidence threshold gates predictions to minimize false positives.',
    outcomes: [
      { value: '12.3KB', label: 'Model Size' },
      { value: '<2ms', label: 'Inference' },
      { value: '92%', label: 'Accuracy' },
      { value: '7.9%', label: 'RAM Used' }
    ]
  },
  {
    id: 8,
    name: 'MiPa — Mixed Patch Object Detection',
    slug: 'MiPa',
    description: "A research critique and experimental reproduction of the WACV 2025 paper 'Mixed Patch Visible-Infrared Modality Agnostic Object Detection.' Implemented and compared 5 mixing-ratio distributions (Uniform, Beta(2,2), Beta(0.5,0.5), Truncated Uniform, Gaussian) across CNN (ResNet50-FPN) and ViT (Swin-Tiny) backbones for pedestrian detection on the LLVIP dataset. Key finding: Beta(2,2) consistently outperforms the paper's default Uniform(0,1) distribution — achieving +1.24% RGB AP50 improvement on CNN backbones. Note: Due to Kaggle GPU session constraints, CNN backbone results were partially saved; the ViT backbone experiments have complete result logs with consistent improvement across all mixing distributions.",
    tools: ['Python', 'PyTorch', 'torchvision', 'Faster R-CNN', 'ResNet50', 'Swin Transformer', 'NumPy', 'Matplotlib'],
    role: 'Computer Vision Researcher',
    code: 'https://github.com/b23bb1023/MiPa',
    demo: '',
    image: '/image/MiPa.png',
    domain: 'AI/ML',
    highlights: [
      'Critiqued and reproduced WACV 2025 paper — identified that Uniform(0,1) mixing ratio is suboptimal for modality-agnostic detection',
      'Proved Beta(2,2) distribution outperforms paper default by +1.24% RGB AP50 on CNN backbones with 6-epoch training',
      'Implemented MiPa patch mixing on both CNN (ResNet50-FPN) and ViT (Swin-Tiny) backbones using vectorized tensor operations',
      'Achieved 86.40% Avg AP50 on LLVIP pedestrian detection with only 4K training samples and 12.8-minute training time'
    ],
    features: [
      { icon: 'brain', title: '5 Distribution Comparison', desc: 'Uniform, Beta(2,2), Beta(0.5,0.5), Truncated Uniform, and Gaussian mixing ratios compared systematically' },
      { icon: 'layer', title: 'Dual Backbone Validation', desc: 'CNN (ResNet50-FPN with Faster R-CNN) and ViT (Swin-Tiny) — cross-architecture validation of all mixing strategies' },
      { icon: 'search', title: 'WACV 2025 Reproduction', desc: 'Independent critique and experimental reproduction finding Uniform(0,1) suboptimal vs Beta(2,2)' },
      { icon: 'chart', title: 'Beta(2,2) Proven Best', desc: '+1.24% RGB AP50 improvement over paper default on CNN; consistent gains across all ViT distributions tested' },
      { icon: 'data', title: 'LLVIP Dataset', desc: '12,025 paired visible-thermal (RGB-IR) pedestrian images — 4K training samples with zero-shot evaluation' },
      { icon: 'rocket', title: 'Kaggle GPU Pipeline', desc: 'Vectorized tensor operations for efficient patch mixing — 12.8-minute training on single GPU (T4 x2)' }
    ],
    architecture: 'MiPa (Mixed Patch) mixing layer inserted at the input stage: visible (RGB) and infrared (IR) images are divided into patches, then mixed using a sampling distribution to create modality-agnostic training samples. Distribution parameter p controls the ratio of visible-to-infrared patches. The mixing layer is agnostic to the downstream detector — tested with both Faster R-CNN (ResNet50-FPN) and ViT-based (Swin-Tiny) detection heads. Experiments run on Kaggle GPUs (Tesla T4 x 2) with mixed-precision training over 6 epochs.',
    outcomes: [
      { value: '+1.24%', label: 'RGB AP50 Gain' },
      { value: '5', label: 'Distributions' },
      { value: '2', label: 'Backbones' },
      { value: '86.4%', label: 'Avg AP50' }
    ]
  },
  {
    id: 9,
    name: 'Panda Sleep Studio Portfolio',
    slug: 'Panda_Arts',
    description: "A polished single-page portfolio website for 'Panda Sleep Studio' — a fictional creative agency blending sleep culture with design technology. Built with Vite + React 18 featuring GSAP scroll-triggered animations, custom lerp-based cursor system, Lenis smooth scrolling, video-on-hover project cards, CSS marquee banners, and full-screen slide-down drawers. Warm beige aesthetic with hand-written CSS (no frameworks).",
    tools: ['JavaScript', 'React', 'Vite', 'GSAP', 'Lenis', 'CSS', 'HTML'],
    role: 'Frontend Developer',
    code: 'https://github.com/b23bb1023/Panda_Arts',
    demo: '',
    image: '/image/Panda_Arts.png',
    domain: 'Web Dev',
    highlights: [
      'Built polished SPA with Vite + React 18, GSAP scroll-triggered animations, and custom lerp-based cursor system',
      'Implemented video-on-hover project cards, CSS marquee identity banners, and full-screen slide-down navigation drawers',
      'Designed complete warm-beige design system with 23.5KB hand-written CSS — no Tailwind or CSS frameworks',
      'Engineered Lenis smooth scrolling with GSAP ScrollTrigger integration for seamless scroll-driven animations'
    ],
    features: [
      { icon: 'code', title: 'GSAP Animations', desc: 'Scroll-triggered animations with timeline sequencing — fade, scale, and translate effects on section entrance' },
      { icon: 'cube', title: 'Custom Cursor System', desc: 'Lerp-based smooth cursor with magnetic attraction to interactive elements and state-based shape morphing' },
      { icon: 'camera', title: 'Video-on-Hover Cards', desc: 'Project cards with hover-triggered video preview playback — loading spinner and mute toggle included' },
      { icon: 'palette', title: 'Pure CSS Design System', desc: '23.5KB hand-crafted CSS with warm beige color palette — no Tailwind, no CSS-in-JS, no frameworks' },
      { icon: 'layer', title: 'Lenis Smooth Scroll', desc: 'Custom smooth scrolling via Lenis with GSAP ScrollTrigger synchronization for buttery scroll-driven animations' },
      { icon: 'mobile', title: 'CSS Marquee Banners', desc: 'Pure CSS marquee animation banners for brand identity text with seamless infinite scroll effect' }
    ],
    architecture: 'Single-page application (SPA) built with Vite + React 18. GSAP ScrollTrigger drives all scroll-based animations registered via useGSAP hook. Lenis smooth scroll replaces native scroll with configurable lerp easing. Custom cursor implemented as a React component tracking mouse position with lerp interpolation. Video-on-hover cards use IntersectionObserver for lazy loading and hover state management. Full-screen drawer navigation uses CSS transforms with GSAP timeline for enter/exit animations.',
    outcomes: [
      { value: '23.5KB', label: 'Pure CSS' },
      { value: '6', label: 'Animation Types' },
      { value: '0', label: 'CSS Frameworks' },
      { value: '60fps', label: 'Smooth Scroll' }
    ]
  },
  {
    id: 10,
    name: 'MedTech — Cancer QoL Prediction',
    slug: 'MedTech',
    description: "A machine learning project predicting Quality of Life (SF-36 scores) in Head & Neck Cancer patients by combining clinical/demographic data with Ayurvedic Prakriti (Vata/Pitta/Kapha) body constitution assessment. Engineered 142 features from 226 patient records including TNM staging, cancer site encoding, and 36 SF-36 quality-of-life indicators. Achieved R² = 0.88 using XGBoost regression with RandomForest baseline.",
    tools: ['Python', 'XGBoost', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    role: 'ML Engineer',
    code: 'https://github.com/b23bb1023/MedTech',
    demo: '',
    image: '/image/MedTech.png',
    domain: 'AI/ML',
    highlights: [
      'Built ML pipeline predicting Quality of Life (SF-36) in Head & Neck Cancer patients with R² = 0.88 using XGBoost',
      'Engineered 142 features from 226 patient records combining clinical TNM staging with Ayurvedic Prakriti analysis',
      'Designed feature engineering pipeline parsing TNM staging, one-hot encoding cancer sites, and encoding Vata/Pitta/Kapha body types',
      'Conducted 3-model comparison (LinearRegression, RandomForest, XGBoost) with comprehensive evaluation and feature importance analysis'
    ],
    features: [
      { icon: 'chart', title: 'XGBoost Regression', desc: 'R² = 0.88 predicting 8 SF-36 quality-of-life domains — outperforms RandomForest (R²=0.78) and LinearRegression (R²=0.62)' },
      { icon: 'data', title: '142-Feature Engineering', desc: 'Engineered from 226 patient records combining TNM staging, cancer sites, demographics, and Ayurvedic body types' },
      { icon: 'brain', title: 'Ayurvedic Integration', desc: 'Vata/Pitta/Kapha Prakriti body constitution encoded as categorical features alongside clinical indicators' },
      { icon: 'layer', title: '3-Model Comparison', desc: 'Systematic evaluation of LinearRegression, RandomForest, and XGBoost with hyperparameter tuning and feature importance analysis' },
      { icon: 'search', title: 'SF-36 Domain Analysis', desc: 'Predicting all 8 quality-of-life domains: Physical Functioning, Role Physical, Bodily Pain, General Health, Vitality, Social Functioning, Role Emotional, Mental Health' },
      { icon: 'rocket', title: 'Clinical ML Pipeline', desc: 'End-to-end from raw patient questionnaires to actionable QoL predictions with feature importance for clinical interpretability' }
    ],
    architecture: 'Data pipeline loads 226 patient records with clinical (TNM staging, cancer site, age, gender), demographic, and Ayurvedic Prakriti (Vata/Pitta/Kapha) assessments. Feature engineering parses TNM staging (T1-T4, N0-N3, M0-M1) into ordinal features, one-hot encodes cancer sites (oral cavity, oropharynx, larynx, hypopharynx), and encodes Prakriti types. Target variables are 8 SF-36 domain scores. Three regression models compared: LinearRegression (baseline), RandomForest (100 estimators), and XGBoost (n_estimators=200, max_depth=6, learning_rate=0.1) with 5-fold cross-validation.',
    outcomes: [
      { value: '0.88', label: 'XGBoost R²' },
      { value: '142', label: 'Features' },
      { value: '226', label: 'Patients' },
      { value: '3', label: 'Models Compared' }
    ]
  },
  {
    id: 11,
    name: 'Local AI Agent System',
    slug: 'AI-Agent',
    description: "A fully local, security-first multi-agent system with a custom Graph RAG memory architecture — built entirely from scratch on SQLite (13 tables, recursive CTEs), ChromaDB (4 collections), and local LLMs via LM Studio. Features Progressive Depth Escalation: per-query retrieval depth (0–3) where greetings use a shallow SQLite lookup and deep research questions trigger a full BFS graph walk across sessions, entities, and summaries. Includes deterministic regex-based entity extraction (microsecond-level, no embeddings), hierarchical level summarization creating a memory pyramid, and 4 specialist agents (news, mail, calendar, task) with manager-worker LLM separation (Qwen 3.5 9B/2B). All inference runs 100% locally — zero cloud dependency.",
    tools: ['Python', 'FastAPI', 'Uvicorn', 'Pydantic', 'LM Studio', 'Qwen', 'MLX', 'ChromaDB', 'SQLite', 'Google APIs', 'Node.js', 'Playwright'],
    role: 'AI Systems Engineer',
    code: 'https://github.com/b23bb1023/AI-Agent',
    demo: '',
    image: '/image/AI-Agent.png',
    domain: 'AI/ML',
    highlights: [
      'Architected custom Graph RAG from scratch — 13-table SQLite graph DAG with recursive CTEs, 4-collection ChromaDB vector store, cross-session entity edge linking, and token-budget-aware context assembly',
      'Engineered Progressive Depth Escalation pipeline — per-query retrieval depth (0–3) with three-tier fallback (LLM → 50+ keyword patterns → safe default) and 4 strategy implementations (Broad, Focused, Exact, None)',
      'Built microsecond-level deterministic entity extraction engine from regex patterns — no embedding model or LLM call required — with secondary LLM-based path for richer extraction when desired',
      'Designed 4 specialist agents (news, mail, calendar, task) with structured tool-calling, manager-worker LLM separation (Qwen 3.5 9B/2B), and WhatsApp bridge with source-level memory isolation'
    ],
    features: [
      { icon: 'brain', title: 'Custom Graph RAG', desc: 'SQLite as a graph database — 13-table DAG with recursive CTE lineage traversal, entity extraction, cross-session edge linking, and hierarchical level summarization — no off-the-shelf RAG framework' },
      { icon: 'layer', title: 'Progressive Depth Escalation', desc: 'Query-aware retrieval depth (0–3): greetings skip history (depth=0), lookups use shallow SQLite (depth=1), deep research triggers full BFS graph walk across sessions and entities (depth=3)' },
      { icon: 'search', title: 'Deterministic Entity Extraction', desc: 'Regex-based person/email/topic/date detection in microseconds — no embedding model, no LLM call. Optional LLM-based path for richer extraction when needed' },
      { icon: 'chip', title: '100% Local LLM Stack', desc: 'Qwen 3.5 (9B manager + 2B worker) via LM Studio on MLX — all inference, vector search, and graph storage run on-device. No cloud API calls' },
      { icon: 'code', title: '4 Specialist Agents', desc: 'News (RSS/YouTube feeds), Mail (Gmail read-only), Calendar (read events + create), Task (full CRUD with deadlines) — structured tool-calling with up to 2 execution rounds' },
      { icon: 'mobile', title: 'WhatsApp Bridge', desc: 'Node.js/Playwright bridge with source-level memory isolation — each chat gets its own independent graph DAG, entity index, level summaries, and vector collections' }
    ],
    architecture: 'FastAPI orchestrates a 6-step pipeline: (1) Intake — validate and normalize input. (2) Depth Reasoning — three-tier fallback (LLM → 50+ keyword patterns → safe default=depth=1) outputs a TraversalDirective with exact depth, scope, branch filter, and token budget. (3) Context Building — GraphMemoryRetriever facade executes the directive via 4 strategy implementations (Broad/Focused/Exact/None), assembling a priority-ordered ContextWindow with token-budget-aware section ordering (structured data first, then level summaries, graph history, FTS5 matches, semantic search, entity index). (4) Routing — Manager LLM classifies as chat/plan/refuse with 2-attempt retry. (5) Plan Dispatch — Worker LLM executes structured tool calls (up to 2 rounds) across specialist agents. (6) Post-processing — LevelSummarizer compresses each graph depth into summary paragraphs stored in both SQLite and ChromaDB, creating a memory pyramid. All models run locally via LM Studio OpenAI-compatible endpoint.',
    outcomes: [
      { value: '13', label: 'SQLite Tables' },
      { value: '4', label: 'ChromaDB Collections' },
      { value: '4', label: 'Specialist Agents' },
      { value: '100%', label: 'Local Inference' }
    ]
  },
];
