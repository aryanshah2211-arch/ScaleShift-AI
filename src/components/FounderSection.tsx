import React from 'react';
import { Linkedin, Mail, MessageCircle, ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { FounderPortrait } from './FounderPortrait';

export const FounderSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 border-t border-[#1A1A1A]/10 bg-[#F9F8F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#2C4A3E] mb-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
            <span>Founder-Led Execution</span>
          </div>

          <h2 className="serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] leading-tight">
            Built by a Founder. Delivered Personally.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Founder Identity & Direct Contact Card */}
          <div className="lg:col-span-5 rounded-sm bg-white border border-[#1A1A1A]/15 p-6 sm:p-7 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
              <FounderPortrait />

              <div>
                <h3 className="serif text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
                  ARYAN SHAH
                </h3>
                <p className="text-xs font-mono text-[#2C4A3E] font-bold mt-1 uppercase tracking-wider">
                  Founder & AI Solutions Builder
                </p>
                <p className="sans text-xs text-[#1A1A1A]/60 mt-0.5">
                  ScaleShift AI
                </p>

                <div className="mt-4 pt-3 border-t border-[#1A1A1A]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A]/80">
                    <span className="text-[#1A1A1A]/40">WhatsApp:</span>
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#2C4A3E] hover:underline"
                    >
                      +91 6354537604
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A]/80">
                    <span className="text-[#1A1A1A]/40">Email:</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-bold text-[#1A1A1A] hover:text-[#2C4A3E] hover:underline"
                    >
                      aryanshah2211@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Diagram: CLIENT → ARYAN → SOLUTION */}
            <div className="p-4 rounded-sm bg-[#F9F8F6] border border-[#1A1A1A]/10 mb-6">
              <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/60 uppercase tracking-wider block mb-3 text-center">
                Direct Communication Architecture
              </span>
              <div className="flex flex-col items-center gap-1.5 font-mono text-xs font-bold text-[#1A1A1A]">
                <div className="w-full max-w-[200px] text-center py-2 rounded-xs bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] shadow-2xs">
                  CLIENT
                </div>
                <ArrowDown className="w-3.5 h-3.5 text-[#2C4A3E]" />
                <div className="w-full max-w-[200px] text-center py-2 rounded-xs bg-[#2C4A3E] text-white shadow-2xs">
                  ARYAN SHAH
                </div>
                <ArrowDown className="w-3.5 h-3.5 text-[#2C4A3E]" />
                <div className="w-full max-w-[200px] text-center py-2 rounded-xs bg-white border border-[#1A1A1A]/15 text-[#2C4A3E] shadow-2xs">
                  WORKING SOLUTION
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-sm bg-white hover:bg-stone-50 border border-[#1A1A1A]/15 text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-[#1A1A1A]/50" />
              </a>
            </div>
          </div>

          {/* Letter / Direct Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-sm bg-white border border-[#1A1A1A]/15 p-6 sm:p-8 shadow-xs">
              <div className="space-y-4 serif text-base sm:text-lg text-[#1A1A1A]/85 leading-relaxed font-normal">
                <p>
                  Hi, I'm Aryan Shah, Founder & AI Solutions Builder at ScaleShift AI.
                </p>

                <p>
                  I work directly with businesses to understand their challenges and build practical digital solutions around their needs.
                </p>

                <p>
                  Whether it's a website, application, AI agent, chatbot, WhatsApp system or automation, I focus on building something useful — not adding technology for the sake of it.
                </p>
              </div>

              {/* Callout Highlight */}
              <div className="mt-6 p-4 rounded-sm bg-[#F2F0EB] border-l-4 border-[#2C4A3E] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2C4A3E] shrink-0" />
                <span className="serif text-base sm:text-lg font-bold text-[#1A1A1A]">
                  "You work directly with the person building your solution."
                </span>
              </div>
            </div>

            {/* Founder-Led Execution Card */}
            <div className="rounded-sm bg-white border border-[#1A1A1A]/15 p-6 sm:p-8 shadow-xs">
              <h3 className="serif text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">
                Founder-Led Execution
              </h3>

              <div className="sans text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed space-y-2.5 mb-6">
                <p>
                  From the first conversation to the final implementation, I stay personally involved in your project.
                </p>
                <p className="font-medium text-[#1A1A1A]">
                  No unnecessary layers. No account managers between you and the person building your solution.
                </p>
                <p>
                  Just direct communication and focused execution.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/70">
                <div className="p-2.5 rounded-xs bg-[#F9F8F6] border border-[#1A1A1A]/10 text-center">
                  Zero Agency Bloat
                </div>
                <div className="p-2.5 rounded-xs bg-[#F9F8F6] border border-[#1A1A1A]/10 text-center">
                  Direct Daily Contact
                </div>
                <div className="p-2.5 rounded-xs bg-[#F9F8F6] border border-[#1A1A1A]/10 text-center">
                  Clean Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
