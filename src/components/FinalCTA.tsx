import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-[#1A1A1A]/10 bg-[#1A1A1A] text-[#F9F8F6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/15 text-white/80 font-mono text-[10px] tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
          <span>Next Steps</span>
        </div>

        {/* Heading */}
        <h2 className="serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight mb-5">
          Have a Project in Mind?
        </h2>

        {/* Copy */}
        <p className="sans text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
          Whether you need a new website, a custom web app, an AI assistant or automated workflows, let's talk about the best way to build it.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="final-discuss-project-btn"
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-white hover:bg-[#F2F0EB] text-[#1A1A1A] font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
          >
            <span>DISCUSS YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            id="final-whatsapp-btn"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>MESSAGE ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
