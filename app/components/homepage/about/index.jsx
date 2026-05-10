// @flow strict
"use client";

import { useState } from "react";
import { currentProjects } from "@/utils/data/current_proj";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev === currentProjects.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev === 0 ? currentProjects.length - 1 : prev - 1));
  };

  return (
    // 1. THE BREAKOUT TRICK: w-[calc(100vw-100px)] and left-1/2 -translate-x-1/2 
    // forces this section to ignore layout.js max-width and sit exactly 50px from screen edges.
    <div id="about" className="my-12 lg:my-24 relative z-50 w-[calc(100vw-100px)] left-1/2 -translate-x-1/2">
      
      {/* Master Container */}
      <div className="w-full bg-[#0a0d17] border border-[#1b2c68a0] rounded-[3rem] p-6 lg:p-12 shadow-2xl flex flex-col gap-10 relative overflow-hidden">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Box 1: About Me (Width naturally scales up because of the breakout trick) */}
        <div className="w-full bg-[#1a1443]/60 backdrop-blur-md rounded-[2rem] p-8 lg:p-10 border border-white/5 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg lg:text-xl">
            I am an aspiring AI/ML Engineer and Full-Stack Developer at IIT Jodhpur, specializing in intelligent systems that bridge complex data and real-world impact. I am actively building agentic workflows, computer vision models, and highly scalable web architectures.
          </p>
        </div>

        {/* Box 2: Currently Working On */}
        <div className="w-full min-h-[600px] lg:min-h-[650px] bg-[#1a1443]/60 backdrop-blur-md rounded-[2rem] p-6 lg:p-10 border border-white/5 shadow-lg flex flex-col">
          
          <div className="mb-4">
            <h2 className="text-3xl lg:text-4xl font-light text-white/90 uppercase tracking-[0.15em] font-serif">
              Currently Working On
            </h2>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative flex-grow flex items-center justify-center w-full">
            
            <button 
              onClick={prevCard} 
              className="absolute left-0 lg:left-4 z-30 p-4 bg-white/5 hover:bg-emerald-500/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-110 backdrop-blur-md"
            >
              <FaChevronLeft size={24} />
            </button>

            <div className="relative w-full h-[500px] lg:h-[520px] flex items-center justify-center overflow-hidden perspective-[1000px]">
              
              {currentProjects.map((proj, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex === 0 ? currentProjects.length - 1 : activeIndex - 1);
                const isNext = index === (activeIndex === currentProjects.length - 1 ? 0 : activeIndex + 1);

                let positioning = "opacity-0 scale-75 z-0 hidden";
                
                if (isActive) {
                  positioning = "opacity-100 translate-x-0 scale-100 z-20 shadow-[0_0_40px_rgba(27,44,104,0.6)]";
                } else if (isPrev) {
                  positioning = "opacity-40 -translate-x-[20%] lg:-translate-x-[30%] scale-90 z-10 hidden md:flex cursor-pointer hover:opacity-60";
                } else if (isNext) {
                  positioning = "opacity-40 translate-x-[20%] lg:translate-x-[30%] scale-90 z-10 hidden md:flex cursor-pointer hover:opacity-60";
                }

                return (
                  <div 
                    key={proj.id}
                    onClick={() => {
                      if (isPrev) prevCard();
                      if (isNext) nextCard();
                    }}
                    // Card is scaled to take up significant space inside the new expanded container
                    className={`absolute w-[95%] md:w-[85%] h-full bg-[#0d1224] border border-[#1b2c68a0] rounded-2xl p-6 lg:p-10 transition-all duration-500 ease-out flex flex-col lg:flex-row gap-8 lg:gap-12 ${positioning}`}
                  >
                    
                    {proj.image && proj.image !== "" && (
                      <div className="w-full lg:w-[40%] h-48 lg:h-full relative rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#0a0d17]">
                        <Image 
                          src={proj.image} 
                          alt={proj.title} 
                          fill 
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="flex flex-col flex-grow w-full">
                      
                      {/* Title & Date */}
                      <div className="mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">{proj.title}</h3>
                        <span className="text-sm text-emerald-400 font-mono bg-white/5 border border-emerald-400/20 px-5 py-2 rounded-full whitespace-nowrap">
                          {proj.date}
                        </span>
                      </div>
                      
                      {/* SWAPPED: LATEST UPDATE (Takes up max real estate) */}
                      <div className="flex-grow flex flex-col justify-center bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6 lg:p-8 mb-6 shadow-inner">
                        <span className="text-sm font-black text-emerald-500 uppercase tracking-widest block mb-4">
                          🔴 Live Update
                        </span>
                        <p className="text-xl lg:text-2xl font-bold text-emerald-100 leading-snug">
                          {proj.update}
                        </p>
                      </div>

                      {/* SWAPPED: DESCRIPTION (Pushed to bottom) */}
                      <div className="mt-auto">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">
                          Project Objective
                        </span>
                        <p className="text-sm lg:text-base text-gray-400 leading-relaxed line-clamp-3">
                          {proj.description}
                        </p>
                      </div>

                    </div>
                  </div>
                )
              })}

            </div>

            <button 
              onClick={nextCard} 
              className="absolute right-0 lg:right-4 z-30 p-4 bg-white/5 hover:bg-emerald-500/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-110 backdrop-blur-md"
            >
              <FaChevronRight size={24} />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
