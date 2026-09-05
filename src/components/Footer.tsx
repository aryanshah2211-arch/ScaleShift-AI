import React from 'react';
import { ArrowUpRight, MessageCircle, Mail, Linkedin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ScaleShiftLogo } from './ScaleShiftLogo';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Work', href: '#work' },
    { label: 'What I Build', href: '#what-i-build' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="footer" className="border-t border-[#1A1A1A]/10 bg-[#F9F8F6] pt-14 pb-10 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A1A]/10">
          {/* Column 1: ScaleShift AI Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="mb-3">
              <ScaleShiftLogo className="h-9 w-auto" />
            </div>

            <p className="font-mono text-xs text-[#2C4A3E] font-semibold tracking-wide">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="sans text-xs text-[#1A1A1A]/70 leading-relaxed max-w-sm">
              Custom-built digital solutions engineered to solve real business challenges. High-quality websites, custom web applications, AI agents, and intelligent automations.
            </p>

            <div className="pt-1 text-xs font-mono text-[#1A1A1A]/80">
              <span className="text-[#1A1A1A]/50">Founder: </span>
              <span className="font-bold">{BUSINESS_INFO.founder}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#1A1A1A]/70 hover:text-[#2C4A3E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <div>
                <span className="text-[#1A1A1A]/50 block text-[10px] uppercase">WhatsApp:</span>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2C4A3E] font-bold hover:underline inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.whatsappNumber}</span>
                </a>
              </div>

              <div>
                <span className="text-[#1A1A1A]/50 block text-[10px] uppercase">Email:</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="font-bold hover:text-[#2C4A3E] hover:underline inline-flex items-center gap-1.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[#1A1A1A]/50 block text-[10px] uppercase">LinkedIn:</span>
                <a
                  href={BUSINESS_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0A66C2] hover:underline inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.founder}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#1A1A1A]/40" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1A1A1A]/60">
          <div>
            © {BUSINESS_INFO.year} ScaleShift AI. All rights reserved. Built and delivered by Aryan Shah.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2C4A3E] transition-colors"
            >
              Direct WhatsApp
            </a>
            <span>•</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hover:text-[#2C4A3E] transition-colors"
            >
              Direct Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
