import React, { useState } from 'react';
import { Globe, TrendingUp, BarChart3, ShoppingBag, FileText, Check } from 'lucide-react';

export const PIPHotelsMockup: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'Americas' | 'EMEA' | 'APAC'>('Americas');

  const stats = {
    Americas: { revpar: '$184.20', growth: '+6.4%', reports: '142 Available', index: '118.5' },
    EMEA: { revpar: '€162.80', growth: '+8.1%', reports: '98 Available', index: '112.3' },
    APAC: { revpar: '$145.50', growth: '+11.2%', reports: '115 Available', index: '124.8' },
  };

  return (
    <div className="w-full rounded-xl bg-[#0E151D] border border-slate-800 p-4 sm:p-5 text-left font-mono select-none overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-xs text-[#F5F7FA] font-semibold uppercase tracking-wider">
            CBRE // PIP Hotels Research Engine
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded-full font-sans">
          Commercial Analytics
        </span>
      </div>

      {/* Region Selector Pills */}
      <div className="flex items-center gap-2 mb-4">
        {(['Americas', 'EMEA', 'APAC'] as const).map((region) => (
          <button
            key={region}
            type="button"
            onClick={() => setSelectedRegion(region)}
            className={`px-3 py-1 rounded-md text-xs transition-all ${
              selectedRegion === region
                ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40'
                : 'bg-[#151D26] text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="p-2.5 rounded-lg bg-[#151D26] border border-slate-800">
          <div className="text-[10px] text-slate-400">RevPAR Trend</div>
          <div className="text-sm sm:text-base font-bold text-slate-100">{stats[selectedRegion].revpar}</div>
          <div className="text-[10px] text-emerald-400 flex items-center gap-0.5">
            <TrendingUp className="w-2.5 h-2.5" />
            <span>{stats[selectedRegion].growth}</span>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-[#151D26] border border-slate-800">
          <div className="text-[10px] text-slate-400">Forecast Index</div>
          <div className="text-sm sm:text-base font-bold text-[#38BDF8]">{stats[selectedRegion].index}</div>
          <div className="text-[10px] text-slate-400">Historical Benchmarks</div>
        </div>

        <div className="p-2.5 rounded-lg bg-[#151D26] border border-slate-800">
          <div className="text-[10px] text-slate-400">Intelligence Catalog</div>
          <div className="text-sm sm:text-base font-bold text-purple-400">{stats[selectedRegion].reports}</div>
          <div className="text-[10px] text-slate-400">E-Commerce Access</div>
        </div>
      </div>

      {/* E-Commerce Report Purchase Mockup Banner */}
      <div className="p-3 rounded-lg bg-[#0B0F14] border border-slate-800 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-md bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center flex-shrink-0">
            <FileText className="w-3.5 h-3.5" />
          </div>
          <div className="truncate">
            <div className="text-slate-200 font-sans font-medium text-xs truncate">
              {selectedRegion} Hospitality Outlook & Capital Trends
            </div>
            <div className="text-[10px] text-slate-500 font-mono">PDF + Dataset API License</div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-bold text-slate-200">$1,450</span>
          <span className="px-2 py-1 rounded bg-[#38BDF8] text-slate-950 font-bold text-[10px] flex items-center gap-1">
            <ShoppingBag className="w-2.5 h-2.5" />
            <span>Cart</span>
          </span>
        </div>
      </div>
    </div>
  );
};
