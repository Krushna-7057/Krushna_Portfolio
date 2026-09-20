import React, { useState } from 'react';
import { Terminal, ExternalLink, ArrowRight, Sparkles, Layers, ShieldCheck, ChevronRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { AIAcceleratorMockup } from './project-mockups/AIAcceleratorMockup';
import { PIPHotelsMockup } from './project-mockups/PIPHotelsMockup';
import { CanadaPlusMockup } from './project-mockups/CanadaPlusMockup';
import { TrainingSystemMockup } from './project-mockups/TrainingSystemMockup';
import { CafePOSMockup } from './project-mockups/CafePOSMockup';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterCategories = ['All', 'AI', 'Enterprise Analytics', 'Commercial Real Estate', 'Internal EdTech', 'Retail POS'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const renderProjectVisual = (id: string) => {
    switch (id) {
      case 'ai-accelerator':
        return <AIAcceleratorMockup />;
      case 'pip-hotels':
        return <PIPHotelsMockup />;
      case 'canada-plus':
        return <CanadaPlusMockup />;
      case 'training-management-system':
        return <TrainingSystemMockup />;
      case 'cafe-pos':
        return <CafePOSMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151D26] border border-slate-800 text-xs font-mono text-[#38BDF8] mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F7FA] tracking-tight">
              Enterprise & AI Solutions
            </h2>
            <p className="mt-3 text-[#94A3B8] text-base max-w-2xl font-normal">
              Production systems engineered with Angular, React, .NET Core, Azure, and modern AI integration.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/40 shadow-sm'
                    : 'bg-[#151D26] text-[#94A3B8] border border-slate-800 hover:text-[#F5F7FA] hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#111820] border border-slate-800/80 hover:border-slate-700 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xl shadow-black/30 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Text Details Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#151D26] text-[#38BDF8] border border-[#38BDF8]/30">
                        {project.category}
                      </span>
                      {project.client && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#151D26] text-[#94A3B8] border border-slate-800">
                          Client: <strong className="text-slate-200">{project.client}</strong>
                        </span>
                      )}
                      {project.highlightBadge && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/50">
                          {project.highlightBadge}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F7FA] mb-2 group-hover:text-[#38BDF8] transition-colors">
                      {project.name}
                    </h3>
                    <div className="text-xs font-mono text-[#94A3B8] mb-4">
                      {project.company} {project.industry && `• ${project.industry}`}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key Contributions Highlights (First 2) */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                        Role & Key Contributions:
                      </div>
                      {project.contributions.slice(0, 2).map((item, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#151D26] text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151D26] hover:bg-[#38BDF8]/15 border border-slate-700/80 hover:border-[#38BDF8]/50 text-[#F5F7FA] hover:text-[#38BDF8] font-medium text-xs sm:text-sm transition-all duration-200 group/btn"
                      >
                        <Eye className="w-4 h-4 text-[#38BDF8]" />
                        <span>View Architecture & Details</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* UI Illustration Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      {/* Ambient card aura */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#38BDF8]/10 to-[#8B5CF6]/10 rounded-2xl blur-lg opacity-50" />
                      <div className="relative">
                        {renderProjectVisual(project.id)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
