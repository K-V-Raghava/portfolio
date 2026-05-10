// // @flow strict

// import Link from 'next/link';

// function ProjectCard({ project }) {
//   return (
//     <div className="w-full">
//       <Link href={`/projects/${project.slug}`} className="block group">
        
//         {/* Card Container */}
//         <div className="relative overflow-hidden rounded-xl border border-[#2a2e5a] bg-[#1a1443] shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#16f2b3]">
          
//           {/* IMAGE SECTION */}
//           {/* We use a dark background here so the empty space looks seamless */}
//           <div className="relative h-64 lg:h-80 w-full overflow-hidden bg-[#0d1224]"> 
            
//             {project.image ? (
//               <Image
//                 src={project.image}
//                 alt={project.name}
//                 fill
//                 // 'object-contain' = Make sure the whole image fits (no cropping)
//                 className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             ) : (
//               // Fallback if no image
//               <div className="flex h-full w-full items-center justify-center bg-[#0d1224] text-gray-500">
//                 No Image Preview
//               </div>
//             )}

//             {/* OVERLAY (Visible on Hover) */}
//             <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
//               <span className="rounded-full border border-[#16f2b3] bg-[#16f2b3]/20 px-6 py-2 text-[#16f2b3] font-semibold backdrop-blur-md">
//                 View Project
//               </span>
//             </div>
//           </div>

//           {/* TEXT DETAILS */}
//           <div className="p-5">
//             <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#16f2b3] transition-colors">
//               {project.name}
//             </h3>
            
//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 text-xs">
//               {project.tools.slice(0, 4).map((tool, index) => (
//                 <span 
//                   key={index} 
//                   className="rounded-full bg-[#0d1224] px-3 py-1 text-gray-300 border border-[#2a2e5a]"
//                 >
//                   {tool}
//                 </span>
//               ))}
//               {project.tools.length > 4 && (
//                 <span className="px-2 py-1 text-gray-400">+{project.tools.length - 4} more</span>
//               )}
//             </div>
//           </div>

//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProjectCard;

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
          {project.title.substring(0, 2).toUpperCase()}
        </span>

        {/* THE HOVER OVERLAY 
          Opacity is 0 by default, becomes 100 on group-hover.
          Backdrop blur adds a premium glassmorphism effect.
        */}
        <div className="absolute inset-0 bg-[#0d1224]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-10">
          
          {/* Conditionally render Live Demo button if link exists */}
          {project.demoLink && project.demoLink !== "" && (
            <Link 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              <FaExternalLinkAlt size={14} /> 
              <span>Live Demo</span>
            </Link>
          )}

          {/* Conditionally render GitHub button if link exists */}
          {project.githubLink && project.githubLink !== "" && (
            <Link 
              href={project.githubLink} 
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
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        
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
