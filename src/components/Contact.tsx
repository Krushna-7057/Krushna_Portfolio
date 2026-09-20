import React, { useState } from 'react';
import { 
  Terminal, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight,
  Clock,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Hello Krushna,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151D26] border border-slate-800 text-xs font-mono text-[#38BDF8] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F7FA] tracking-tight">
            Let's build something useful.
          </h2>
          <p className="mt-3 text-[#94A3B8] text-base sm:text-lg font-normal">
            Open to full-time opportunities and interesting software engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#111820] border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
                  <Mail className="w-4 h-4" />
                  <span>DIRECT EMAIL</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-[#38BDF8] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-mono font-medium text-[#F5F7FA] hover:text-[#38BDF8] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#111820] border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
                  <Phone className="w-4 h-4" />
                  <span>PHONE & WHATSAPP</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-[#38BDF8] transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-base sm:text-lg font-mono font-medium text-[#F5F7FA] hover:text-[#38BDF8] transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#111820] border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] mb-2">
                <MapPin className="w-4 h-4" />
                <span>LOCATION</span>
              </div>
              <p className="text-base font-sans font-medium text-[#F5F7FA]">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Open to on-site, hybrid, and remote roles.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#151D26] hover:bg-[#38BDF8]/10 border border-slate-800 hover:border-[#38BDF8]/50 text-slate-200 hover:text-[#38BDF8] text-xs font-mono transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#151D26] hover:bg-[#38BDF8]/10 border border-slate-800 hover:border-[#38BDF8]/50 text-slate-200 hover:text-[#38BDF8] text-xs font-mono transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#111820] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <h3 className="text-xl font-heading font-bold text-[#F5F7FA]">
                Send a Message
              </h3>
              <span className="text-xs font-mono text-[#38BDF8]">
                Prompt Response
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-[#151D26] border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-bold text-[#F5F7FA]">
                  Thank you for reaching out, {formData.name}!
                </h4>
                <p className="text-sm text-slate-300 font-sans max-w-md mx-auto">
                  Your message draft is ready. You can launch your default email client to send it directly to{' '}
                  <strong className="text-[#38BDF8]">{PERSONAL_INFO.email}</strong>, or copy the direct address.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#38BDF8] text-slate-950 font-semibold text-xs font-mono hover:brightness-110 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#0B0F14] border border-slate-800 text-xs font-mono text-slate-300 hover:text-[#F5F7FA]"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-[#151D26] border border-slate-800 text-sm text-[#F5F7FA] placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#151D26] border border-slate-800 text-sm text-[#F5F7FA] placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Describe the opportunity, engineering challenges, or project scope..."
                    className="w-full px-4 py-3 rounded-xl bg-[#151D26] border border-slate-800 text-sm text-[#F5F7FA] placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-slate-950 font-semibold text-xs sm:text-sm font-mono hover:brightness-110 transition-all duration-200 shadow-md shadow-[#38BDF8]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                  <span className="block sm:inline sm:ml-4 mt-2 sm:mt-0 text-[11px] font-mono text-slate-500">
                    Direct communication with Krushna Belokar
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
