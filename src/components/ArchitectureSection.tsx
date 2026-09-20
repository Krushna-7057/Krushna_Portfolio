import React, { useState } from 'react';
import { 
  Terminal, 
  Workflow, 
  Layers, 
  Server, 
  Cloud, 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Lock, 
  GitBranch,
  Network
} from 'lucide-react';
import { ARCHITECTURE_CAPABILITIES } from '../data/portfolioData';

export const ArchitectureSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(0);

  const tiers = [
    {
      id: 'client',
      title: '01 // Client & Presentation Tier',
      tech: 'Angular v18 • React v17 • NgRx • RxJS',
      highlight: 'OnPush Change Detection (10x Performance Boost) & Micro-Frontends',
      details: 'Decoupled reactive UI layer utilizing OnPush change detection to eliminate superfluous zone cycles. NgRx centralized store provides immutable state management for complex modules like Report Builders. Micro-frontends and lazy routing ensure fast initial bundle times.',
      icon: <Layers className="w-5 h-5 text-[#38BDF8]" />,
    },
    {
      id: 'api',
      title: '02 // API & Service Orchestration Tier',
      tech: 'ASP.NET Core Web API v10 • C# • CQRS • Repository Pattern',
      highlight: 'RESTful API Architecture & Secure OAuth 2.0 Token Bearers',
      details: 'Built with ASP.NET Core Web API, separating commands and queries via CQRS pattern for high maintainability. Repository and Unit of Work abstractions isolate database operations with EF Core and LINQ. Enforces strict OAuth 2.0 bearer authorization.',
      icon: <Server className="w-5 h-5 text-[#8B5CF6]" />,
    },
    {
      id: 'ai',
      title: '03 // AI & Cognitive Services Pipeline',
      tech: 'Azure OpenAI • Azure AI Foundry • RAG • OCR • Vercel AI SDK',
      highlight: 'Contextual Grounding via High-Dimension Vector Embeddings & MCP',
      details: 'End-to-end Generative AI workflows with Azure OpenAI and Vercel AI SDK. RAG pipeline converts enterprise datasets into vector embeddings, querying vector stores for semantic relevance before streaming synthesized responses. Azure Document Intelligence provides OCR document parsing.',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 'cloud',
      title: '04 // Cloud & Data Infrastructure',
      tech: 'Microsoft Azure • Azure Functions • Blob Storage • Azure SQL • CI/CD',
      highlight: 'Automated Multi-Environment Delivery via Azure DevOps',
      details: 'Cloud-native infrastructure utilizing Azure SQL Database for transactional integrity, Azure Blob Storage for unstructured reports, and Azure Functions for event-driven serverless background jobs. Managed through Azure DevOps automated CI/CD pipelines across Dev, Test, Staging, Prod, and Training environments.',
      icon: <Cloud className="w-5 h-5 text-[#0284C7]" />,
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151D26] border border-slate-800 text-xs font-mono text-[#38BDF8] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F7FA] tracking-tight">
            Interconnected Engineering Systems
          </h2>
          <p className="mt-3 text-[#94A3B8] text-base font-normal">
            How frontend reactive state, .NET backend services, AI RAG pipelines, and Azure cloud infrastructure harmonize in production.
          </p>
        </div>

        {/* Interactive Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Tier Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {tiers.map((tier, idx) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setActiveTier(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeTier === idx
                    ? 'bg-[#151D26] border-[#38BDF8]/50 shadow-xl shadow-[#38BDF8]/10 translate-x-1'
                    : 'bg-[#111820]/70 border-slate-800/80 hover:bg-[#151D26]/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  activeTier === idx ? 'bg-[#111820] border border-[#38BDF8]/40' : 'bg-[#151D26] border border-slate-800'
                }`}>
                  {tier.icon}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                    {tier.title}
                  </div>
                  <div className="text-base font-heading font-semibold text-[#F5F7FA] mb-1">
                    {tier.tech}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">
                    {tier.highlight}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Active Tier Deep Dive & Diagram */}
          <div className="lg:col-span-7 rounded-2xl bg-[#111820] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                  Tier Architecture Blueprint
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Krushna Belokar // Full Stack Specs
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#F5F7FA] mb-2">
                  {tiers[activeTier].title}
                </h3>
                <p className="text-sm font-mono text-[#38BDF8] mb-4">
                  {tiers[activeTier].tech}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {tiers[activeTier].details}
                </p>
              </div>

              {/* Visual System Nodes Representation */}
              <div className="p-4 rounded-xl bg-[#0B0F14] border border-slate-800/90 font-mono text-xs space-y-3">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>System Connectivity</span>
                  <span className="text-emerald-400">Low Latency / High Throughput</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
                  <div className="p-2 rounded bg-[#151D26] border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Pattern</span>
                    <span className="text-slate-200 font-semibold">CQRS & Repo</span>
                  </div>
                  <div className="p-2 rounded bg-[#151D26] border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Auth</span>
                    <span className="text-slate-200 font-semibold">OAuth 2.0</span>
                  </div>
                  <div className="p-2 rounded bg-[#151D26] border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">State</span>
                    <span className="text-slate-200 font-semibold">NgRx Streams</span>
                  </div>
                  <div className="p-2 rounded bg-[#151D26] border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Pipelines</span>
                    <span className="text-slate-200 font-semibold">Azure DevOps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHITECTURE_CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-2xl bg-[#151D26] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
                  {cap.badge}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#F5F7FA] mb-3">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                {cap.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
