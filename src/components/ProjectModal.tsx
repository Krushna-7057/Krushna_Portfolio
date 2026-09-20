import React from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, Sparkles, Building, Layers, Cpu } from 'lucide-react';
import { ProjectItem } from '../types';
import { AIAcceleratorMockup } from './project-mockups/AIAcceleratorMockup';
import { PIPHotelsMockup } from './project-mockups/PIPHotelsMockup';
import { CanadaPlusMockup } from './project-mockups/CanadaPlusMockup';
import { TrainingSystemMockup } from './project-mockups/TrainingSystemMockup';
import { CafePOSMockup } from './project-mockups/CafePOSMockup';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const renderVisual = () => {
    switch (project.id) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#111820] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B0F14] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#151D26] text-[#38BDF8] border border-[#38BDF8]/30">
              {project.category}
            </span>
            {project.client && (
              <span className="text-xs font-mono text-[#94A3B8]">
                Client: <strong className="text-slate-200">{project.client}</strong>
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#151D26] hover:bg-slate-800 text-[#94A3B8] hover:text-[#F5F7FA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title & Tagline */}
          <div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F7FA] mb-2">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base font-mono text-[#38BDF8]">
              {project.company} {project.industry && `• ${project.industry}`}
            </p>
          </div>

          {/* Abstract UI Visual */}
          <div className="rounded-xl overflow-hidden">
            {renderVisual()}
          </div>

          {/* Description */}
          <div className="p-4 rounded-xl bg-[#151D26] border border-slate-800">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* AI Architecture Pipeline (Only if defined, e.g. AI-Accelerator) */}
          {project.architectureFlow && (
            <div className="p-5 rounded-xl bg-[#0B0F14] border border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-[#38BDF8]" />
                <h4 className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                  AI Architecture Pipeline Flow
                </h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {project.architectureFlow.map((flow) => (
                  <div
                    key={flow.step}
                    className="p-3 rounded-lg bg-[#151D26] border border-slate-800/80 flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-[#38BDF8] mb-1">{flow.step}</span>
                    <span className="text-xs font-semibold text-slate-200">{flow.label}</span>
                    <span className="text-[10px] text-slate-400 mt-1">{flow.sublabel}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contributions and Responsibilities */}
          <div>
            <h4 className="text-sm font-mono text-[#38BDF8] uppercase tracking-wider mb-3">
              Key Contributions & Engineering Execution
            </h4>
            <div className="space-y-2.5">
              {project.contributions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#151D26]/70 border border-slate-800/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#151D26] border border-slate-800 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#0B0F14] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Engineered by Krushna Belokar
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#151D26] hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
