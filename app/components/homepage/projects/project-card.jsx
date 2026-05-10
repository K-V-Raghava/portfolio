// @flow strict

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="w-full">
      <div className="group relative overflow-hidden rounded-xl border border-[#2a2e5a] bg-[#1a1443] shadow-lg transition-all duration-300 hover:border-[#16f2b3] hover:shadow-2xl">
        
        {/* IMAGE SECTION */}
        <div className="relative h-64 w-full overflow-hidden bg-[#0d1224] lg:h-80">
          
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#0d1224] text-gray-500">
              No Image Preview
            </div>
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            
            <div className="flex gap-4">
              
              {/* View Project Button */}
              <Link
                href={`/projects/${project.slug}`}
                className="rounded-full border border-[#16f2b3] bg-[#16f2b3]/20 px-6 py-2 font-semibold text-[#16f2b3] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#16f2b3] hover:text-black"
              >
                View Project
              </Link>

              {/* GitHub Code Button */}
              {project.code && project.code !== '' && (
                <Link
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
                >
                  <FaGithub size={16} />
                  <span>Code</span>
                </Link>
              )}

            </div>
          </div>
        </div>

        {/* TEXT DETAILS */}
        <div className="p-5">
          <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#16f2b3]">
            {project.name}
          </h3>

          {/* Description */}
          <p className="mb-5 line-clamp-3 text-sm text-gray-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 text-xs">
            {project.tools?.slice(0, 4).map((tool, index) => (
              <span
                key={index}
                className="rounded-full border border-[#2a2e5a] bg-[#0d1224] px-3 py-1 text-gray-300"
              >
                {tool}
              </span>
            ))}

            {project.tools?.length > 4 && (
              <span className="px-2 py-1 text-gray-400">
                +{project.tools.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
