import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Database, 
  Cloud, 
  Layers, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  FileCode, 
  Server, 
  Zap,
  Activity
} from 'lucide-react';
import { PERSONAL_INFO, HERO_CONTENT } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'architecture' | 'ai-rag' | 'fullstack'>('architecture');
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    architecture: `// Enterprise CQRS & Event Stream Architecture
[ApiController]
[Route("api/v10/[controller]")]
public class ReportAnalyticsController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IAIService _aiAccelerator;

    public ReportAnalyticsController(IMediator mediator, IAIService ai)
    {
        _mediator = mediator;
        _aiAccelerator = ai;
    }

    [HttpPost("forecast")]
    [ProducesResponseType(typeof(ReportDto), StatusCodes.Status200OK)]
    public async Task<IActionResult> GenerateForecast([FromBody] QueryCommand query)
    {
        var analytics = await _mediator.Send(query);
        return Ok(analytics);
    }
}`,
    'ai-rag': `// Vercel AI SDK & Azure OpenAI RAG Pipeline
import { createOpenAI } from '@ai-sdk/azure';
import { streamText, embed } from 'ai';
import { vectorStore } from './vectorDatabase';

export async function handleQueryWithRAG(userPrompt: string) {
  // 1. Generate semantic embeddings
  const { embedding } = await embed({
    model: azureOpenAI.embedding('text-embedding-3-small'),
    value: userPrompt,
  });

  // 2. Query Vector Database for relevant context
  const contextDocs = await vectorStore.querySimilarity(embedding, { topK: 5 });

  // 3. Stream augmented response via LLM
  return streamText({
    model: azureOpenAI('gpt-4o'),
    system: 'Enterprise AI Assistant equipped with RAG context.',
    prompt: \`Context:\\n\${contextDocs.join('\\n')}\\n\\nQuery: \${userPrompt}\`,
  });
}`,
    fullstack: `// Angular v18 OnPush Reactive State Pipeline
@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // Up to 10x rendering boost
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ReportBuilderComponent implements OnInit {
  private readonly store = inject(Store);
  
  readonly state$ = this.store.select(selectReportState).pipe(
    debounceTime(150),
    distinctUntilChanged(),
    shareReplay(1)
  );

  dispatchUpdate(payload: PropertyUpdateDto): void {
    this.store.dispatch(ReportActions.update({ payload }));
  }
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center bg-[#0B0F14]"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center text-left">
            {/* Developer Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151D26] border border-slate-800 text-xs font-mono text-[#38BDF8] w-fit mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
              </span>
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                {HERO_CONTENT.badge}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-[#94A3B8] font-sans">4 Years Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F7FA] leading-[1.1] mb-6">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#60A5FA]">
                scalable
              </span>{' '}
              web applications with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#8B5CF6]">
                modern technology.
              </span>
            </h1>

            {/* Supporting Stack Line */}
            <p className="text-base sm:text-lg font-mono font-medium text-[#38BDF8] mb-4 flex items-center gap-2 flex-wrap">
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              <span>{HERO_CONTENT.supporting}</span>
            </p>

            {/* Description */}
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {HERO_CONTENT.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-slate-950 font-semibold text-sm hover:shadow-lg hover:shadow-[#38BDF8]/25 hover:brightness-110 transition-all duration-200 group"
              >
                <span>{HERO_CONTENT.primaryAction}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#151D26] hover:bg-slate-800/80 border border-slate-700/80 hover:border-[#38BDF8]/50 text-[#F5F7FA] font-medium text-sm transition-all duration-200"
              >
                <span>{HERO_CONTENT.secondaryAction}</span>
              </a>
            </div>

            {/* Secondary Links & Verified Facts */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1 text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Ready</span>
                </span>
                <span className="text-slate-700">•</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Developer & Technology Visual */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl opacity-70"></div>

            {/* Technology Interactive Hub Container */}
            <div className="relative rounded-2xl bg-[#111820] border border-slate-800 shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F14]/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>krushna.belokar // fullstack-workspace</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-1.5 rounded hover:bg-slate-800 text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                  title="Copy snippet"
                  aria-label="Copy code snippet"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex items-center gap-1 p-2 bg-[#0E151D] border-b border-slate-800/80 text-xs font-mono overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveCodeTab('architecture')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-all ${
                    activeCodeTab === 'architecture'
                      ? 'bg-[#151D26] text-[#38BDF8] border border-[#38BDF8]/30'
                      : 'text-[#94A3B8] hover:text-[#F5F7FA]'
                  }`}
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>.NET Core / CQRS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab('ai-rag')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-all ${
                    activeCodeTab === 'ai-rag'
                      ? 'bg-[#151D26] text-[#8B5CF6] border border-[#8B5CF6]/30'
                      : 'text-[#94A3B8] hover:text-[#F5F7FA]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>AI RAG & Vercel SDK</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab('fullstack')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-all ${
                    activeCodeTab === 'fullstack'
                      ? 'bg-[#151D26] text-[#38BDF8] border border-[#38BDF8]/30'
                      : 'text-[#94A3B8] hover:text-[#F5F7FA]'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Angular / OnPush</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-4 overflow-x-auto text-[13px] font-mono leading-relaxed bg-[#0B0F14]/70 max-h-64 sm:max-h-80 select-text">
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Floating Technology Badges Panel */}
              <div className="p-4 bg-[#151D26]/90 border-t border-slate-800">
                <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span>Core Engineering Stack</span>
                  <span className="text-[#38BDF8] text-[10px]">Verified Production Skills</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#111820] border border-slate-800 hover:border-red-500/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs font-mono font-medium text-slate-200">Angular v18</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#111820] border border-slate-800 hover:border-cyan-400/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-xs font-mono font-medium text-slate-200">React v17</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#111820] border border-slate-800 hover:border-purple-500/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-xs font-mono font-medium text-slate-200">.NET Core v10</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#111820] border border-slate-800 hover:border-blue-500/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-mono font-medium text-slate-200">Azure Cloud</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#111820] border border-slate-800 hover:border-emerald-400/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-mono font-medium text-slate-200">AI / RAG / LLM</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#111820] border border-slate-800 hover:border-amber-400/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <span className="text-xs font-mono font-medium text-slate-200">SQL Server</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Floating Node Accents */}
            <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-[#151D26] border border-slate-700/80 shadow-xl text-xs font-mono text-[#F5F7FA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>10x Performance Optimization</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-2 px-3 py-1.5 rounded-lg bg-[#151D26] border border-slate-700/80 shadow-xl text-xs font-mono text-[#38BDF8]">
              <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Azure AI & LLM Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
