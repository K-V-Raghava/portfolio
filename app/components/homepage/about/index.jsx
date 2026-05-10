// @flow strict
"use client"; // REQUIRED for React state (carousel arrows) in Next.js 13+

import { useState } from "react";
import { currentProjects } from "@/utils/data/current_proj";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function AboutSection() {
  // State to track the currently active project card
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel navigation logic
  const nextCard = () => {
    setActiveIndex((prev) => (prev === currentProjects.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev === 0 ? currentProjects.length - 1 : prev - 1));
  };

  return (
    <div id="about" className="my-12 lg:my-24 relative z-50">
      
      {/* MASTER ENCLOSING RECTANGLE 
        Contrasting color: #0a0d17 (very dark slate/navy, differs from your #1a1443 theme)
      */}
      <div className="w-full bg-[#0a0d17] border border-[#1b2c68a0] rounded-[3rem] p-6 lg:p-12 shadow-2xl flex flex-col gap-10 relative overflow-hidden">
        
        {/* Subtle background glow effect for the master container */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* --- BOX 1: ABOUT ME --- */}
        <div className="w-full bg-[#1a1443]/60 backdrop-blur-md rounded-[2rem] p-8 lg:p-10 border border-white/5 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am an aspiring AI/ML Engineer and Full-Stack Developer at IIT Jodhpur, specializing in intelligent systems that bridge complex data and real-world impact. I am actively building agentic workflows, computer vision models, and highly scalable web architectures.
          </p>
        </div>

        {/* --- BOX 2: CURRENTLY WORKING ON --- 
            Increased overall height, decreased padding to push content closer to borders 
        */}
        <div className="w-full min-h-[550px] lg:min-h-[600px] bg-[#1a1443]/60 backdrop-blur-md rounded-[2rem] p-6 lg:p-8 border border-white/5 shadow-lg flex flex-col">
          
          {/* Changed Typography: Lighter, larger, tracking-widest, standard sans/serif mix */}
          <div className="mb-2">
            <h2 className="text-3xl lg:text-4xl font-light text-white/90 uppercase tracking-[0.15em] font-serif">
              Currently Working On
            </h2>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative flex-grow flex items-center justify-center w-full mt-4">
            
            {/* Left Navigation Arrow */}
            <button 
              onClick={prevCard} 
              className="absolute left-0 lg:left-4 z-30 p-4 bg-white/5 hover:bg-emerald-500/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-110 backdrop-blur-md"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Cards Container */}
            <div className="relative w-full h-[450px] lg:h-[480px] flex items-center justify-center overflow-hidden perspective-[1000px]">
              
              {currentProjects.map((proj, index) => {
                // Determine positions for the 3D Carousel effect
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex === 0 ? currentProjects.length - 1 : activeIndex - 1);
                const isNext = index === (activeIndex === currentProjects.length - 1 ? 0 : activeIndex + 1);

                // Default state (hidden entirely)
                let positioning = "opacity-0 scale-75 z-0 hidden";
                
                // Active Card (Max size, centered)
                if (isActive) {
                  positioning = "opacity-100 translate-x-0 scale-100 z-20 shadow-[0_0_40px_rgba(27,44,104,0.6)]";
                } 
                // Previous Card (Passive, reduced size, pushed left)
                else if (isPrev) {
                  positioning = "opacity-40 -translate-x-[20%] lg:-translate-x-[30%] scale-90 z-10 hidden md:flex cursor-pointer hover:opacity-60";
                } 
                // Next Card (Passive, reduced size, pushed right)
                else if (isNext) {
                  positioning = "opacity-40 translate-x-[20%] lg:translate-x-[30%] scale-90 z-10 hidden md:flex cursor-pointer hover:opacity-60";
                }

                return (
                  <div 
                    key={proj.id}
                    onClick={() => {
                      if (isPrev) prevCard();
                      if (isNext) nextCard();
                    }}
                    // Card Size: 80% width, ~100% of the container height (which matches the 60% section scale)
                    className={`absolute w-[95%] md:w-[80%] h-full bg-[#0d1224] border border-[#1b2c68a0] rounded-2xl p-6 lg:p-8 transition-all duration-500 ease-out flex flex-col lg:flex-row gap-8 ${positioning}`}
                  >
                    
                    {/* Left: Conditional Image */}
                    {proj.image && proj.image !== "" && (
                      <div className="w-full lg:w-[45%] h-48 lg:h-full relative rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#0a0d17]">
                        <Image 
                          src={proj.image} 
                          alt={proj.title} 
                          fill 
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Right: Text Content */}
                    <div className="flex flex-col flex-grow w-full">
                      
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-3">{proj.title}</h3>
                        <span className="text-xs text-emerald-400 font-mono bg-white/5 border border-emerald-400/20 px-4 py-1.5 rounded-full w-fit">
                          {proj.date}
                        </span>
                      </div>
                      
                      <p className="text-base text-gray-400 mb-6 flex-grow leading-relaxed">
                        {proj.description}
                      </p>
                      
                      {/* UPDATES BLOCK 
                        Bigger, bolder, heavily emphasized background 
                      */}
                      <div className="mt-auto pt-6 border-t-2 border-emerald-500/20 bg-emerald-900/10 rounded-xl p-5 lg:p-6 shadow-inner">
                        <span className="text-xs font-black text-emerald-500 uppercase tracking-widest block mb-2">
                          Latest Update
                        </span>
                        <p className="text-base lg:text-lg font-bold text-emerald-100 leading-snug">
                          {proj.update}
                        </p>
                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

            {/* Right Navigation Arrow */}
            <button 
              onClick={nextCard} 
              className="absolute right-0 lg:right-4 z-30 p-4 bg-white/5 hover:bg-emerald-500/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-110 backdrop-blur-md"
            >
              <FaChevronRight size={20} />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
