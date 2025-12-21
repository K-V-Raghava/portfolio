import { projectsData } from '@/utils/data/projects-data';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetails({ params }) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white bg-[#0d1224]">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/#projects" className="text-[#16f2b3] hover:underline">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1224] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-[#16f2b3] mb-8 hover:underline pt-20 lg:pt-2">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#16f2b3] mb-6">{project.name}</h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Image */}
          {/* Left Column: Image */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden border border-[#2a2e5a] shadow-2xl bg-[#0d1224]">
            {/* If you have a real image, it shows here */}
            {project.image ? (
                <Image 
                src={project.image} 
                alt={project.name} 
                fill 
                className="object-contain p-4" 
                />
            ) : (
                <div className="w-full h-full bg-[#0d1224] flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
                </div>
            )}
            </div>
          {/* Right Column: Details */}
          <div className="flex flex-col gap-6">
            
            {/* Description */}
            <div className="bg-[#1b203e] p-6 rounded-xl border border-[#2a2e5a]">
              <h3 className="text-xl font-bold mb-4 text-pink-500">Overview</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Tools Used */}
            <div className="bg-[#1b203e] p-6 rounded-xl border border-[#2a2e5a]">
              <h3 className="text-xl font-bold mb-4 text-pink-500">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, i) => (
                  <span key={i} className="px-4 py-2 bg-[#0d1224] rounded-full text-sm text-[#16f2b3] border border-[#2a2e5a]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {project.code && (
                <Link href={project.code} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-[#16f2b3] text-black font-bold rounded-full hover:scale-105 transition-transform">
                  <FaGithub size={20} /> View Code
                </Link>
              )}
              {project.demo && (
                <Link href={project.demo} target="_blank" className="flex items-center gap-2 px-6 py-3 border border-[#16f2b3] text-[#16f2b3] font-bold rounded-full hover:bg-[#16f2b3] hover:text-black transition-all">
                  <FaExternalLinkAlt size={18} /> Live Demo
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}