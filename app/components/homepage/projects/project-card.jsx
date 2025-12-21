// @flow strict
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ project }) {
  return (
    <div className="w-full">
      <Link href={`/projects/${project.slug}`} className="block group">
        
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a2e5a] bg-[#1a1443] shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#16f2b3]">
          
          {/* IMAGE SECTION */}
          {/* We use a dark background here so the empty space looks seamless */}
          <div className="relative h-64 lg:h-80 w-full overflow-hidden bg-[#0d1224]"> 
            
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                // 'object-contain' = Make sure the whole image fits (no cropping)
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              // Fallback if no image
              <div className="flex h-full w-full items-center justify-center bg-[#0d1224] text-gray-500">
                No Image Preview
              </div>
            )}

            {/* OVERLAY (Visible on Hover) */}
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
              <span className="rounded-full border border-[#16f2b3] bg-[#16f2b3]/20 px-6 py-2 text-[#16f2b3] font-semibold backdrop-blur-md">
                View Project
              </span>
            </div>
          </div>

          {/* TEXT DETAILS */}
          <div className="p-5">
            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#16f2b3] transition-colors">
              {project.name}
            </h3>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tools.slice(0, 4).map((tool, index) => (
                <span 
                  key={index} 
                  className="rounded-full bg-[#0d1224] px-3 py-1 text-gray-300 border border-[#2a2e5a]"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 4 && (
                <span className="px-2 py-1 text-gray-400">+{project.tools.length - 4} more</span>
              )}
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;