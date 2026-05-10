
// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="relative group flex flex-col rounded-xl overflow-hidden border border-[#1b2c68a0] bg-[#1a1443] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(27,44,104,0.3)]">
      
      <div className="relative h-48 w-full bg-[#0d1224] flex items-center justify-center border-b border-[#1b2c68a0]">
        
        {/* Project Title Placeholder (If no image) */}
        <span className="text-2xl font-bold text-white/20 tracking-wider">
          {project.name.substring(0, 2).toUpperCase()}
        </span>

        {/* THE HOVER OVERLAY 
          Opacity is 0 by default, becomes 100 on group-hover.
          Backdrop blur adds a premium glassmorphism effect.
        */}
        <div className="absolute inset-0 bg-[#0d1224]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-10">
          
          {/* Conditionally render Live Demo button if link exists */}
          {project.demo && project.demo !== "" && (
            <Link 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              <FaExternalLinkAlt size={14} /> 
              <span>Live Demo</span>
            </Link>
          )}

          {/* Conditionally render GitHub button if link exists */}
          {project.code && project.code !== "" && (
            <Link 
              href={project.code} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-[#1a1443] hover:bg-[#2a225e] border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              <FaGithub size={16} /> 
              <span>Code</span>
            </Link>
          )}

        </div>
      </div>

      {/* BOTTOM SECTION: Project Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
        
        {/* Description line-clamp ensures cards stay a uniform height even with long text */}
        <p className="text-sm text-gray-400 mb-5 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tools?.map((tool, i) => (
            <span 
              key={i} 
              className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-emerald-400 font-mono"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;
