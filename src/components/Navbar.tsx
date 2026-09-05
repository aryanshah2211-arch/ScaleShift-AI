import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ScaleShiftLogo } from './ScaleShiftLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'What I Build', href: '#what-i-build' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 py-3 shadow-sm'
          : 'bg-[#F9F8F6]/90 backdrop-blur-sm border-b border-[#1A1A1A]/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo in Top-Left Corner */}
          <a
            id="navbar-brand-logo"
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4A3E] p-1 rounded-sm transition-opacity hover:opacity-95"
            aria-label="ScaleShift AI Home"
          >
            <ScaleShiftLogo className="h-8 sm:h-9 md:h-10 w-auto" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#1A1A1A]/70 hover:text-[#2C4A3E] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2C4A3E] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="navbar-primary-cta"
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2C4A3E] hover:bg-[#223B32] px-5 py-2.5 rounded-sm transition-all shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F8F6] focus-visible:ring-[#2C4A3E]"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-stone-100 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4A3E]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F2F0EB] border-b border-[#1A1A1A]/10 px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-white/60 px-3 py-2.5 rounded-sm text-xs uppercase tracking-wider font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#2C4A3E] hover:bg-[#223B32] text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-sm transition-colors shadow-sm"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
