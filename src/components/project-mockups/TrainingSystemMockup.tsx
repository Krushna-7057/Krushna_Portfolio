import React from 'react';
import { GraduationCap, BookOpen, CheckCircle, Code, Award, ArrowRight } from 'lucide-react';

export const TrainingSystemMockup: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-[#0E151D] border border-slate-800 p-4 sm:p-5 text-left font-mono select-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />
          <span className="text-xs text-[#F5F7FA] font-semibold uppercase tracking-wider">
            IMRIEL // Enterprise Training Platform
          </span>
        </div>
        <span className="text-[10px] text-purple-400 bg-purple-950/40 border border-purple-800/50 px-2 py-0.5 rounded-full font-sans">
          EdTech System
        </span>
      </div>

      {/* Modules List */}
      <div className="space-y-2 mb-3">
        <div className="p-2.5 rounded-lg bg-[#151D26] border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs">
              01
            </div>
            <div>
              <div className="text-xs font-sans font-medium text-slate-200">
                Advanced Angular & RxJS Architecture
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                Mentor: Engineering Lead • 8 Modules
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-emerald-400 font-mono">100% Completed</span>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-[#151D26] border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs">
              02
            </div>
            <div>
              <div className="text-xs font-sans font-medium text-slate-200">
                ASP.NET Core Web API & EF Core Patterns
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                Mentor: Systems Architect • 12 Modules
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-[#38BDF8] font-mono">In Progress (75%)</span>
          </div>
        </div>
      </div>

      {/* Directives & Reactive Banner */}
      <div className="p-2.5 rounded-lg bg-[#0B0F14] border border-slate-800 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2 text-slate-400">
          <Code className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Custom Directives: [appMentorVerify], [appRoleAccess]</span>
        </div>
        <span className="text-emerald-400 text-[10px]">NgRx Reactive State</span>
      </div>
    </div>
  );
};
