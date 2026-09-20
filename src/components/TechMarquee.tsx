import React from 'react';
import { MARQUEE_TECH } from '../data/portfolioData';

export const TechMarquee: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const duplicatedTech = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div className="relative w-full py-8 bg-[#0B0F14] border-y border-slate-800/80 overflow-hidden">
      {/* Edge Gradient Overlays for smooth fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0F14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0F14] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-3">
        {duplicatedTech.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#111820] border border-slate-800/90 hover:border-slate-700 text-[#F5F7FA] transition-all hover:scale-105 duration-200 cursor-default select-none shadow-sm"
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs sm:text-sm font-mono font-medium whitespace-nowrap">
              {item.name}
            </span>
            <span className="text-[10px] font-sans px-1.5 py-0.5 rounded bg-[#151D26] text-[#94A3B8] border border-slate-800/60 uppercase tracking-wider">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
