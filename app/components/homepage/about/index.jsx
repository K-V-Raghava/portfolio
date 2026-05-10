// @flow strict
import { currentProjects } from "@/utils/data/current_proj";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-24 relative z-50 flex flex-col gap-8">
      
      {/* Box 1: Short Summary (Curved Rectangle) */}
      <div className="w-full bg-[#1a1443]/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-[#25213b] shadow-[0_0_30px_rgba(27,44,104,0.2)]">
        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">About Me</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          I am an aspiring AI/ML Engineer and Full-Stack Developer at IIT Jodhpur, specializing in intelligent systems that bridge complex data and real-world impact. I am actively building agentic workflows, computer vision models, and highly scalable web architectures.
        </p>
      </div>

      {/* Box 2: Horizontally Scrollable Current Projects (Curved Rectangle) */}
      <div className="w-full bg-[#1a1443]/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-[#25213b] shadow-[0_0_30px_rgba(27,44,104,0.2)]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Currently Working On</h2>
          {/* Subtle hint for desktop users */}
          <span className="hidden sm:block text-sm text-gray-500 animate-pulse">Swipe / Scroll &rarr;</span>
        </div>

        {/* Scroll Container - Hides scrollbar but allows snap scrolling */}
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {currentProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="snap-start shrink-0 w-[85vw] md:w-[600px] bg-[#0d1224] border border-[#1b2c68a0] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(27,44,104,0.3)] flex flex-col sm:flex-row gap-6"
            >
              
              {/* Conditional Image (Left Side) */}
              {proj.image && proj.image !== "" && (
                <div className="w-full sm:w-2/5 h-48 sm:h-auto relative rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}

              {/* Text Content (Right Side) */}
              <div className="flex flex-col flex-grow">
                {/* Title & Date */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                  <span className="text-xs text-emerald-400 font-mono bg-white/5 border border-emerald-400/20 px-3 py-1.5 rounded-full w-fit">
                    {proj.date}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
                  {proj.description}
                </p>
                
                {/* Update Block */}
                <div className="mt-auto pt-4 border-t border-[#1b2c68a0] bg-white/5 rounded-lg p-3">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-1">Latest Update</span>
                  <p className="text-sm text-gray-300 italic">
                    "{proj.update}"
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default AboutSection;
