import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  // 1. Get a list of unique domains from your data
  const uniqueDomains = [...new Set(projectsData.map(p => p.domain))];

  return (
    // Added 'scroll-mt-24' so clicking the Navbar link doesn't hide the title
    <div id="projects" className="relative z-50 my-12 lg:my-24 scroll-mt-24">
      
      {/* Decorative Top Section */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* 2. The Multi-Column Layout */}
      <div className="pt-24 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start">
        
        {uniqueDomains.map((domain, domainIndex) => (
          <div key={domainIndex} className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Domain Title */}
            <h3 className="text-2xl font-bold text-center text-[#16f2b3] uppercase tracking-widest mb-4">
              {domain}
            </h3>

            {/* Filter projects for this specific domain */}
            <div className="flex flex-col gap-6">
              {projectsData
                .filter((project) => project.domain === domain)
                .map((project, index) => (
                  // 3. FIXED: changed 'top-0' to 'top-24' so it sticks BELOW the navbar
                  <div 
                    id={`sticky-card-${project.id}`} 
                    key={index} 
                    className="sticky top-24"
                  >
                    <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                      <ProjectCard project={project} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;