import React, { useState } from 'react';
import { Building2, Layers, Zap, ArrowUpRight, CheckCircle2, Sliders } from 'lucide-react';

export const CanadaPlusMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leasing' | 'report-builder'>('report-builder');

  return (
    <div className="w-full rounded-xl bg-[#0E151D] border border-slate-800 p-4 sm:p-5 text-left font-mono select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-xs text-[#F5F7FA] font-semibold uppercase tracking-wider">
            CBRE // Canada Plus Real Estate
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
          <Zap className="w-2.5 h-2.5" />
          <span>Up to 10x OnPush Boost</span>
        </div>
      </div>

      {/* Subnav switcher */}
      <div className="flex items-center gap-2 mb-3">
        <button
          type="button"
          onClick={() => setActiveTab('report-builder')}
          className={`px-3 py-1 rounded text-xs transition-all ${
            activeTab === 'report-builder'
              ? 'bg-[#151D26] text-[#38BDF8] border border-[#38BDF8]/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          NgRx Report Builder
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('leasing')}
          className={`px-3 py-1 rounded text-xs transition-all ${
            activeTab === 'leasing'
              ? 'bg-[#151D26] text-[#38BDF8] border border-[#38BDF8]/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Commercial Leasing Matrix
        </button>
      </div>

      {/* Dynamic View */}
      {activeTab === 'report-builder' ? (
        <div className="space-y-2.5 p-3 rounded-lg bg-[#0B0F14] border border-slate-800 text-xs">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>NgRx Store State: [ReportBuilderState]</span>
            </span>
            <span className="text-emerald-400 text-[10px]">ChangeDetection.OnPush</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-[#151D26] border border-slate-800">
              <div className="text-slate-400 text-[10px]">Active Filters Stream</div>
              <div className="text-slate-200 font-semibold truncate">Ontario Industrial • Land Lease</div>
              <div className="text-[9px] text-[#38BDF8] mt-1">RxJS pipe(distinctUntilChanged)</div>
            </div>
            <div className="p-2 rounded bg-[#151D26] border border-slate-800">
              <div className="text-slate-400 text-[10px]">Marketing Screen Module</div>
              <div className="text-slate-200 font-semibold truncate">Live Service Catalog</div>
              <div className="text-[9px] text-purple-400 mt-1">Services & Commercial Offerings</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 text-[10px] text-slate-500 font-mono">
            <span>Payload serialization: 1.2ms</span>
            <span className="text-emerald-400">Zero Unnecessary Re-renders</span>
          </div>
        </div>
      ) : (
        <div className="space-y-2 p-3 rounded-lg bg-[#0B0F14] border border-slate-800 text-xs">
          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="p-2 rounded bg-[#151D26] border border-slate-800">
              <div className="text-slate-400 text-[10px]">Office Space</div>
              <div className="font-bold text-slate-200">Downtown Toronto</div>
              <div className="text-[9px] text-cyan-400 mt-0.5">42,000 sq ft</div>
            </div>
            <div className="p-2 rounded bg-[#151D26] border border-slate-800">
              <div className="text-slate-400 text-[10px]">Industrial Logistics</div>
              <div className="font-bold text-slate-200">Vancouver Port</div>
              <div className="text-[9px] text-emerald-400 mt-0.5">180,000 sq ft</div>
            </div>
            <div className="p-2 rounded bg-[#151D26] border border-slate-800">
              <div className="text-slate-400 text-[10px]">Commercial Land</div>
              <div className="font-bold text-slate-200">Calgary West</div>
              <div className="text-[9px] text-amber-400 mt-0.5">25.4 Acres</div>
            </div>
          </div>
        </div>
      )}

      {/* Tech tag footer */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
        <span>Angular v18 • NgRx Store</span>
        <span className="text-[#38BDF8]">RxJS Reactive Streams</span>
      </div>
    </div>
  );
};
