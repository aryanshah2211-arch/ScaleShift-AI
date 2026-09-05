import React from 'react';
import { ArrowRight, MessageCircle, Globe, Bot, PhoneCall, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Hero: React.FC = () => {
  const pillars = [
    {
      icon: Globe,
      label: 'Websites & Apps',
      desc: 'High-performance web applications & conversion-focused sites',
    },
    {
      icon: Bot,
      label: 'AI Agents & Chatbots',
      desc: 'Context-aware reasoning systems & instant customer resolution',
    },
    {
      icon: PhoneCall,
      label: 'WhatsApp Systems',
      desc: 'Automated intake, qualified inquiry routing & real-time response',
    },
    {
      icon: Zap,
      label: 'Intelligent Automation',
      desc: 'End-to-end workflows eliminating repetitive manual coordination',
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#F9F8F6]"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-[#2C4A3E]/4 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a08_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Label */}
          <div className="inline-block mb-4 sm:mb-5 px-3.5 py-1.5 border border-[#1A1A1A]/15 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-[#1A1A1A] shadow-2xs">
            <span className="text-[#2C4A3E]">FOUNDER-LED</span> • <span>CUSTOM-BUILT</span> • <span>PERSONALLY DELIVERED</span>
          </div>

          {/* Main Headline */}
          <h1 className="serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#1A1A1A] leading-[1.12] mb-4">
            Digital Solutions Built Around Your Business.
          </h1>

          {/* Secondary Headline / Supporting Line */}
          <p className="font-mono text-sm sm:text-base md:text-lg text-[#2C4A3E] font-medium tracking-wide mb-5">
            Websites. AI. Automation. Intelligent Systems.
          </p>

          {/* Supporting Paragraph */}
          <p className="sans text-base sm:text-lg text-[#1A1A1A]/75 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            I design and build custom digital solutions for businesses — from high-quality websites and web applications to AI agents, AI chatbots, WhatsApp systems and intelligent automation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-5">
            <a
              id="hero-primary-cta"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2C4A3E]"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              id="hero-secondary-cta"
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-white hover:bg-stone-50 text-[#1A1A1A] border border-[#1A1A1A]/15 font-semibold text-xs uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4A3E]"
            >
              <span>VIEW MY WORK</span>
            </a>
          </div>

          {/* Smaller Text CTA: TALK TO ARYAN (opens WhatsApp) */}
          <div className="mb-6">
            <a
              id="hero-talk-to-aryan"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2C4A3E] hover:text-[#223B32] hover:underline underline-offset-4 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>TALK TO ARYAN</span>
            </a>
          </div>

          {/* Signature Line */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#1A1A1A]/15 text-xs font-mono text-[#1A1A1A]/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
            <span className="italic font-serif font-medium">"You bring the problem. I build the solution."</span>
          </div>
        </div>

        {/* Core Solution Pillars Matrix */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-4 sm:p-5 rounded-sm bg-white border border-[#1A1A1A]/10 hover:border-[#2C4A3E]/40 transition-colors shadow-2xs group"
                >
                  <div className="w-8 h-8 rounded-sm bg-[#F2F0EB] text-[#2C4A3E] flex items-center justify-center mb-3 group-hover:bg-[#2C4A3E] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="serif text-sm sm:text-base font-bold text-[#1A1A1A] mb-1.5">
                    {item.label}
                  </h2>
                  <p className="sans text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
