import React from 'react';
import { Coffee, Receipt, Database, CheckCircle2, ShoppingCart, Calculator } from 'lucide-react';

export const CafePOSMockup: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-[#0E151D] border border-slate-800 p-4 sm:p-5 text-left font-mono select-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Coffee className="w-4 h-4 text-amber-400" />
          <span className="text-xs text-[#F5F7FA] font-semibold uppercase tracking-wider">
            Cafe POS // Terminal & Billing Engine
          </span>
        </div>
        <span className="text-[10px] text-amber-400 bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded-full font-sans">
          POS & Reporting
        </span>
      </div>

      {/* POS Terminal Grid: Menu selection + Order receipt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 text-xs">
        {/* Order Items Mock */}
        <div className="p-3 rounded-lg bg-[#151D26] border border-slate-800 space-y-2">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Counter Order #408</span>
            <span className="text-emerald-400">Validated</span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between text-slate-300">
              <span>2x Espresso Roast</span>
              <span className="font-mono font-semibold">₹360.00</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>1x Artisan Croissant</span>
              <span className="font-mono font-semibold">₹180.00</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>1x Cold Brew Nitro</span>
              <span className="font-mono font-semibold">₹240.00</span>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-700/60 flex justify-between font-bold text-slate-100 text-xs">
            <span>Total Bill</span>
            <span className="text-[#38BDF8]">₹780.00</span>
          </div>
        </div>

        {/* Database & Stored Procedures Mock */}
        <div className="p-3 rounded-lg bg-[#0B0F14] border border-slate-800 flex flex-col justify-between space-y-2">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Database className="w-3 h-3 text-[#38BDF8]" />
              <span>SQL Stored Procedures</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono leading-tight">
              EXEC sp_GenerateInvoice <br />
              @OrderId=408, @CounterId=2, @Tax=5.0
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
            <span>C# .NET Web API</span>
            <span className="text-emerald-400">Daily Sales Indexed</span>
          </div>
        </div>
      </div>

      {/* Tech tags */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
        <span>C# • .NET Core • SQL Server</span>
        <span className="text-[#38BDF8]">Responsive UI & Billing</span>
      </div>
    </div>
  );
};
