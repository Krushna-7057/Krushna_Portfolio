import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-lg p-1"
          aria-label="Krushna Belokar - Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-[#151D26] border border-slate-700/70 group-hover:border-[#38BDF8]/60 flex items-center justify-center transition-all duration-300 shadow-sm shadow-[#38BDF8]/10">
            <span className="font-heading font-bold text-base tracking-tight text-[#F5F7FA] group-hover:text-[#38BDF8] transition-colors">
              KB
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-wide text-[#F5F7FA] leading-tight">
              KRUSHNA BELOKAR
            </span>
            <span className="text-[11px] text-[#94A3B8] font-mono tracking-normal">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111820]/80 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[#38BDF8]/15 text-[#38BDF8] shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F5F7FA] hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-[#151D26] border border-slate-800 hover:border-slate-600 hover:text-[#38BDF8] text-[#94A3B8] flex items-center justify-center transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-[#151D26] border border-slate-800 hover:border-slate-600 hover:text-[#38BDF8] text-[#94A3B8] flex items-center justify-center transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#38BDF8]/10 to-[#8B5CF6]/10 border border-[#38BDF8]/40 hover:border-[#38BDF8] text-xs font-medium text-[#38BDF8] hover:bg-[#38BDF8]/20 transition-all duration-200"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-2.5 py-1 rounded-md text-xs font-medium text-[#38BDF8] border border-[#38BDF8]/30 bg-[#38BDF8]/10"
          >
            Connect
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-lg bg-[#151D26] border border-slate-800 text-[#94A3B8] hover:text-[#F5F7FA] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F14]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30'
                      : 'text-[#94A3B8] hover:text-[#F5F7FA] hover:bg-[#151D26]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-[#151D26] border border-slate-800 text-[#94A3B8] flex items-center justify-center hover:text-[#38BDF8]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-[#151D26] border border-slate-800 text-[#94A3B8] flex items-center justify-center hover:text-[#38BDF8]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[11px] font-mono text-[#94A3B8]">
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
