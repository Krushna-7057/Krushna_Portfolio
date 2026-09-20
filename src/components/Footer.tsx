import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B0F] border-t border-slate-800/90 py-16 text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 mb-8 border-b border-slate-800/80 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <h2 className="text-xl font-heading font-extrabold text-[#F5F7FA] tracking-wider">
                {PERSONAL_INFO.name}
              </h2>
            </div>
            <p className="text-sm font-semibold text-slate-300 mb-1">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs font-mono text-[#38BDF8]">
              Angular • React • .NET • Azure • AI
            </p>
          </div>

          {/* Direct Navigation & Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#94A3B8]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#151D26] hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-[#38BDF8] transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Krushna Belokar. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <span className="text-slate-400">Pune, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
