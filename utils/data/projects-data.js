export const projectsData = [
  {
    id: 1,
    name: 'AI Powered Financial App',
    slug: 'ai-financial-app', // <--- NEW: Unique URL ID
    description: "Built an AI app to track expenses...",
    tools: ['React', 'NextJS', 'Tailwind CSS', 'Firebase'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: '/image/crefin.jpg', // <--- NEW: Path to image (put images in public/image folder)
    domain: 'AI/ML', // <--- NEW: The column category
  },
  {
    id: 2,
    name: 'Personal Portfolio',
    slug: 'portfolio-website',
    description: "My personal portfolio website...",
    tools: ['Next.js', 'Tailwind', 'React'],
    role: 'Frontend Developer',
    code: '',
    demo: '',
    image: '/image/portfolio.png',
    domain: 'Web Dev', // <--- Different domain = Different column
  },
  // Add more projects...
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },