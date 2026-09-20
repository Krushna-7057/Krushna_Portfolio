import React from 'react';
import { Terminal, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151D26] border border-slate-800 text-xs font-mono text-[#38BDF8] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F7FA] tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-[#94A3B8] text-base font-normal">
            Formal computer application degrees and industry credentials from Microsoft and Google Developer Experts.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-[#38BDF8]" />
              <h3 className="text-xl font-heading font-bold text-[#F5F7FA]">
                Academic Education
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-2xl bg-[#111820] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 shadow-lg shadow-black/20"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#151D26] text-[#38BDF8] border border-[#38BDF8]/30">
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{edu.location}</span>
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-heading font-bold text-[#F5F7FA] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-slate-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 font-sans">
                    Specialized coursework in Computer Applications, Software Architecture, Database Management, and Advanced Web Engineering.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Award className="w-5 h-5 text-[#8B5CF6]" />
              <h3 className="text-xl font-heading font-bold text-[#F5F7FA]">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.code}
                  className="p-6 rounded-2xl bg-[#111820] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 shadow-lg shadow-black/20 group"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: cert.badgeColor }}
                      />
                      <span className="text-xs font-mono font-bold text-[#F5F7FA]">
                        {cert.code}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#38BDF8] bg-[#151D26] px-2.5 py-0.5 rounded border border-slate-800">
                      {cert.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-heading font-bold text-[#F5F7FA] mb-1 group-hover:text-[#38BDF8] transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Issuer: <strong className="text-slate-200">{cert.issuer}</strong></span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
