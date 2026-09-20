import React from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Zap, 
  BrainCircuit, 
  Cloud, 
  Workflow, 
  Cpu, 
  ShieldCheck, 
  Gauge, 
  GitPullRequest, 
  ServerCog
} from 'lucide-react';
import { ABOUT_CONTENT, GENERAL_RESPONSIBILITIES, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151D26] border border-slate-800 text-xs font-mono text-[#38BDF8] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F7FA] tracking-tight mb-6">
            {ABOUT_CONTENT.heading}
          </h2>
          <p className="text-lg text-[#F5F7FA] font-medium leading-relaxed mb-4">
            {ABOUT_CONTENT.lead}
          </p>
          <div className="space-y-3 text-base text-[#94A3B8] leading-relaxed">
            {ABOUT_CONTENT.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ABOUT_CONTENT.pillars.map((pillar, idx) => {
            const icons = [
              <Gauge className="w-5 h-5 text-[#38BDF8]" key={0} />,
              <Layers className="w-5 h-5 text-[#60A5FA]" key={1} />,
              <Cloud className="w-5 h-5 text-[#818CF8]" key={2} />,
              <BrainCircuit className="w-5 h-5 text-[#8B5CF6]" key={3} />,
              <Zap className="w-5 h-5 text-amber-400" key={4} />,
              <Workflow className="w-5 h-5 text-emerald-400" key={5} />,
            ];

            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#151D26] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#111820] border border-slate-800 flex items-center justify-center mb-4 group-hover:border-[#38BDF8]/40 transition-colors">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-lg font-heading font-semibold text-[#F5F7FA] mb-2 group-hover:text-[#38BDF8] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* General Responsibilities / Engineering Practice Card */}
        <div className="rounded-2xl bg-[#111820] border border-slate-800 p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
            <div>
              <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                Engineering Discipline & Practices
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#F5F7FA]">
                What I Do Across the Software Lifecycle
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151D26] border border-slate-800 text-xs font-mono text-[#94A3B8]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Agile, Scrum & Extreme Programming</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GENERAL_RESPONSIBILITIES.map((resp, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl bg-[#151D26]/70 border border-slate-800/60 hover:border-slate-700 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                  {resp}
                </span>
              </div>
            ))}
          </div>

          {/* Environment Pipeline Banner */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
              <ServerCog className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-semibold text-slate-300">Deployment Environments Managed:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {['Development', 'Test', 'Staging', 'Production', 'Training'].map((env) => (
                <span
                  key={env}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#151D26] border border-slate-800 text-slate-300"
                >
                  {env}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
