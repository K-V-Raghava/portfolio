// @flow strict
"use client";

import { useState } from "react";
// Assuming you created this data file inutils/data/current_proj.js
import { currentProjects } from "@/utils/data/current_proj";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // LOGIC FIX: Non-looping, bounded navigation
  const nextCard = () => {
    // If we are NOT on the last card, we can move next
    if (activeIndex < currentProjects.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevCard = () => {
    // If we are NOT on the first card, we can move previous
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    // Keep the Breakout Trick to ignore layout.js max-width
    <div id="about" className="my-10 lg:my-20 relative z-50 w-[calc(100vw-100px)] left-1/2 -translate-x-1/2">
      
      {/* Master Container (Dark/Slate Contrast Background) */}
      <div className="w-full bg-[#0a0d17] border border-[#1b2c68a0] rounded-[2.5rem] p-5 lg:p-10 shadow-2xl flex flex-col gap-8 relative overflow-hidden">
        
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* --- BOX 1: ABOUT ME (Global Font Reduction) --- */}
        <div className="w-full bg-[#1a1443]/60 backdrop-blur-md rounded-[1.5rem] p-6 lg:p-8 border border-white/5 shadow-lg">
          {/* DECREASED FONT SIZE (was text-2xl) */}
          <h2 className="text-lg lg:text-xl font-bold text-white mb-3 uppercase tracking-wider">About Me</h2>
          {/* DECREASED FONT SIZE (was text-lg/xl) */}
          <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
            I am an aspiring AI/ML Engineer and Full-Stack Developer at IIT Jodhpur, specializing in intelligent systems that bridge complex data and real-world impact. I am actively building agentic workflows, computer vision models, and highly scalable web architectures.
          </p>
        </div>

        {/* --- BOX 2: CURRENTLY WORKING ON --- */}
        <div className="w-full min-h-[500px] lg:min-h-[550px] bg-[#1a1443]/60 backdrop-blur-md rounded-[1.5rem] p-5 lg:p-8 border border-white/5 shadow-lg flex flex-col">
          
          <div className="mb-3">
            {/* MAJOR HEADING REDUCTION (was text-3xl/4xl) 
                Changed style to be smaller, standard tracking, non-bold sans-serif 
            */}
            <h2 className="text-base lg:text-lg font-normal text-white/90 uppercase tracking-wide">
              Currently Working On
            </h2>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative flex-grow flex items-center justify-center w-full">
            
            {/* LOGIC FIX: HIDE arrow if on the first card */}
            {activeIndex > 0 && (
              <button 
                onClick={prevCard} 
                className="absolute left-0 lg:left-4 z-30 p-3 bg-white/5 hover:bg-emerald-500/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-110 backdrop-blur-md"
              >
                <FaChevronLeft size={20} />
              </button>
            )}

            <div className="relative w-full h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden">
              
              {currentProjects.map((proj, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === activeIndex - 1; // Left Card
                const isNext = index === activeIndex + 1; // Right Card

                // ANIMATION FIX: Standard left/right sliding without 3D rotation
                let positioning = "opacity-0 z-0 hidden";
                
                // Active Card (Max size, centered)
                if (isActive) {
                  positioning = "opacity-100 translate-x-0 z-20 shadow-[0_0_40px_rgba(27,44,104,0.6)]";
                } 
                // Previous Card (Passive, reduced size, pushed left 100%)
                else if (isPrev) {
                  positioning = "opacity-40 -translate-x-[100%] scale-90 z-10 md:flex cursor-pointer hover:opacity-60";
                } 
                // Next Card (Passive, reduced size, pushed right 100%)
                else if (isNext) {
                  positioning = "opacity-40 translate-x-[100%] scale-90 z-10 md:flex cursor-pointer hover:opacity-60";
                }

                return (
                  <div 
                    key={proj.id}
                    onClick={() => {
                      if (isPrev) prevCard();
                      if (isNext) nextCard();
                    }}
                    // CARD WIDTH FIX: Now w-[98%] md:w-[90%] (Wider than before)
                    // GLOBAL FONT REDUCTION: Applied text-base/text-sm in cards
                    className={`absolute w-[98%] md:w-[90%] h-full bg-[#0d1224] border border-[#1b2c68a0] rounded-xl p-5 lg:p-8 transition-all duration-500 ease-out flex flex-col lg:flex-row gap-6 lg:gap-10 ${positioning}`}
                  >
                    
                    {proj.image && proj.image !== "" && (
                      <div className="w-full lg:w-[40%] h-40 lg:h-full relative rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#0a0d17]">
                        <Image 
                          src={proj.image} 
                          alt={proj.title} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-col flex-grow w-full">
                      
                      {/* Title & Date (Decreased FONT) */}
                      <div className="mb-5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-white/5 pb-3">
                        {/* DECREASED FONT */}
                        <h3 className="text-xl lg:text-2xl font-bold text-white">{proj.title}</h3>
                        <span className="text-xs text-emerald-400 font-mono bg-white/5 border border-emerald-400/20 px-4 py-1.5 rounded-full whitespace-nowrap">
                          {proj.date}
                        </span>
                      </div>
                      
                      {/* LAYOUT SWAP & Update Prefix FIX */}
                      <div className="flex-grow flex flex-col justify-center bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-5 mb-5 shadow-inner">
                        {/* TEXT PREFIX FIX: Bold, Contrasting prefix text */}
                        <p className="text-lg lg:text-xl font-normal text-emerald-100 leading-snug">
                          <span className="font-bold text-emerald-300">Update! : </span> 
                          {proj.update}
                        </p>
                      </div>

                      {/* SWAPPED: DESCRIPTION (Pushed to bottom, Decreased FONT) */}
                      <div className="mt-auto">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">
                          Project Objective
                        </span>
                        {/* DECREASED FONT (was base/lg) */}
                        <p className="text-sm lg:text-base text-gray-400 leading-relaxed line-clamp-3">
                          {proj.description}
                        </p>
                      </div>

                    </div>
                  </div>
                )
              })}

            </div>

            {/* LOGIC FIX: HIDE arrow if on the last card */}
            {activeIndex < currentProjects.length - 1 && (
              <button 
                onClick={nextCard} 
                className="absolute right-0 lg:right-4 z-30 p-3 bg-white/5 hover:bg-emerald-500/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-110 backdrop-blur-md"
              >
                <FaChevronRight size={20} />
              </button>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
