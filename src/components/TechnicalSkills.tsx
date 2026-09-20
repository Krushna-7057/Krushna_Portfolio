import React, { useState } from 'react';
import { 
  Terminal, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Workflow, 
  BrainCircuit, 
  CheckCircle2, 
  Code2, 
  Layers,
  Search
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechnicalSkills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#38BDF8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#0284C7]" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-amber-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#38BDF8]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter(cat => {
    const matchesTab = activeCategory === 'All' || cat.category === activeCategory;
    if (!matchesTab) return false;
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      cat.category.toLowerCase().includes(term) ||
      cat.description.toLowerCase().includes(term) ||
      cat.skills.some(s => s.toLowerCase().includes(term))
    );
  });

  return (
    <section id="skills" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151D26] border border-slate-800 text-xs font-mono text-[#38BDF8] mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>04 // TECHNICAL PROFICIENCY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F7FA] tracking-tight">
              Verified Technical Skills
            </h2>
            <p className="mt-3 text-[#94A3B8] text-base max-w-2xl font-normal">
              Categorized competencies across frontend engineering, backend APIs, cloud systems, architecture patterns, and AI integration.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#151D26] border border-slate-800 rounded-xl text-xs font-mono text-[#F5F7FA] placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/40 shadow-sm'
                  : 'bg-[#151D26] text-[#94A3B8] border border-slate-800 hover:text-[#F5F7FA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-2xl bg-[#111820] border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#151D26] border border-slate-800 flex items-center justify-center flex-shrink-0">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-[#F5F7FA]">
                      {category.category}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-sans">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#151D26] border border-slate-800/80 text-slate-200 hover:border-[#38BDF8]/40 hover:text-[#38BDF8] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} core technologies</span>
                <span className="text-[#38BDF8]">Production Tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
