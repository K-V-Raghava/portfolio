// @flow strict

import { experienceData } from "@/utils/data/experience";
import Image from "next/image";
import experienceAnimation from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";

function Experience() {
  const safeData = experienceData || [];
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experienceAnimation} />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* 3. MAP FIX: Use the safe array we defined above */}
            {safeData.map((exp) => (
              <div key={exp.id} className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-emerald-400 font-medium">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-400 font-mono bg-white/5 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  {exp.details?.map((point, index) => (
                    <li key={index} className="text-sm leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                
                {exp.certificateLink && (
                  <a 
                    href={exp.certificateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-xs font-semibold text-white bg-emerald-600/80 hover:bg-emerald-500 px-4 py-2 rounded transition-colors"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
