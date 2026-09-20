import React, { useState } from 'react';
import { Sparkles, Database, ArrowRight, Bot, Cpu, Search, Layers, CheckCircle2 } from 'lucide-react';

export const AIAcceleratorMockup: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<'rag' | 'llm' | 'vectors'>('rag');

  return (
    <div className="w-full rounded-xl bg-[#0E151D] border border-slate-800 p-4 sm:p-5 text-left font-mono select-none overflow-hidden relative">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-[#F5F7FA] font-semibold tracking-wider uppercase">
            AI-Accelerator // Pipeline Visualizer
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#38BDF8] bg-[#151D26] px-2.5 py-0.5 rounded-md border border-[#38BDF8]/30">
          <Sparkles className="w-3 h-3" />
          <span>Vercel AI SDK</span>
        </div>
      </div>

      {/* Architecture Flow Nodes */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4 text-center">
        {[
          { key: 'user', name: 'User', sub: 'Input', color: 'border-slate-700 text-slate-300' },
          { key: 'app', name: 'AI App', sub: 'Vercel SDK', color: 'border-blue-500/40 text-blue-400' },
          { key: 'llm', name: 'LLM', sub: 'GPT/Claude', color: 'border-purple-500/40 text-purple-400' },
          { key: 'rag', name: 'RAG', sub: 'Context', color: 'border-cyan-400/60 text-cyan-400 bg-cyan-950/20' },
          { key: 'emb', name: 'Embeddings', sub: 'Vectors', color: 'border-amber-500/40 text-amber-400' },
          { key: 'db', name: 'Vector DB', sub: 'Recall', color: 'border-pink-500/40 text-pink-400' },
        ].map((node) => (
          <div
            key={node.key}
            className={`p-2 rounded-lg border bg-[#151D26] ${node.color} flex flex-col items-center justify-center transition-transform`}
          >
            <span className="text-xs font-bold leading-tight">{node.name}</span>
            <span className="text-[10px] text-slate-500">{node.sub}</span>
          </div>
        ))}
      </div>

      {/* Simulated AI Chat & Agent Stream */}
      <div className="space-y-2.5 p-3 rounded-lg bg-[#0B0F14] border border-slate-800/80 text-xs">
        <div className="flex items-start gap-2">
          <div className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">User</div>
          <p className="text-slate-300 font-sans">
            "Analyze global hospitality occupancy trends for Q4 forecast..."
          </p>
        </div>

        <div className="flex items-start gap-2 pt-2 border-t border-slate-900">
          <div className="px-1.5 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8] text-[10px] flex items-center gap-1">
            <Bot className="w-2.5 h-2.5" />
            <span>AI</span>
          </div>
          <div className="space-y-1 w-full">
            <div className="flex items-center gap-2 text-[10px] text-cyan-400/80 font-mono">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>RAG retrieved 5 context vectors • Similarity score 0.94</span>
            </div>
            <p className="text-slate-300 font-sans text-xs">
              Based on indexed historical models, Q4 projections reflect a +8.4% RevPAR recovery across EMEA & Americas enterprise portfolios.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Micro-Badge Bar */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
        <span className="flex items-center gap-1 text-slate-400">
          <Cpu className="w-3 h-3 text-[#38BDF8]" /> MCP Server Protocol
        </span>
        <span className="text-[#38BDF8]">Vector Similarity Query</span>
      </div>
    </div>
  );
};
