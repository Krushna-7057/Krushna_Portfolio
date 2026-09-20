import React, { useState } from 'react';
import { Terminal, Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Layers, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section id="experience" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151D26] border border-slate-800 text-xs font-mono text-[#38BDF8] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F7FA] tracking-tight">
            Work History & Engineering Roles
          </h2>
          <p className="mt-3 text-[#94A3B8] text-base font-normal">
            4 years of focused engineering experience in enterprise full-stack development, cloud pipelines, and AI integration.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isPrimary = exp.isPrimary;
            const isExpanded = expandedIndex === index;

            return (
              <div key={exp.company} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                  isPrimary
                    ? 'bg-[#0B0F14] border-[#38BDF8] shadow-lg shadow-[#38BDF8]/20'
                    : 'bg-[#0B0F14] border-slate-700'
                }`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${isPrimary ? 'bg-[#38BDF8]' : 'bg-slate-500'}`} />
                </div>

                {/* Experience Card */}
                <div className={`rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
                  isPrimary
                    ? 'bg-[#111820] border-slate-700/90 shadow-xl'
                    : 'bg-[#151D26]/70 border-slate-800/80'
                }`}>
                  {/* Top Details Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F7FA]">
                          {exp.role}
                        </h3>
                        {isPrimary && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-[#38BDF8]">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94A3B8]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-slate-700">•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Projects Tagged to this role */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mb-6 p-4 rounded-xl bg-[#0B0F14] border border-slate-800/80">
                      <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Featured Projects Built in this Tenure:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((proj) => (
                          <span
                            key={proj}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#151D26] text-slate-200 border border-slate-800"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Toggle Responsibilities */}
                  <div className="space-y-4">
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                      className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] hover:text-[#60A5FA] transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Key Responsibilities' : 'Show All Responsibilities'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 animate-in fade-in duration-200">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0B0F14]/70 border border-slate-800/70"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-300 leading-normal">
                              {resp}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies footer */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0B0F14] text-slate-400 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
