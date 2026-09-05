import React from 'react';
import { ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-14 sm:py-20 bg-[#F9F8F6] border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#2C4A3E] mb-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
            <span>Process & Delivery</span>
          </div>

          <h2 className="serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] mb-3">
            How I Work
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#2C4A3E] font-medium tracking-wide">
            I don't start with a tool. I start with the problem.
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-sm bg-white border border-[#1A1A1A]/10 hover:border-[#2C4A3E]/40 transition-colors shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/10 mb-4">
                  <span className="font-mono text-sm font-bold text-[#2C4A3E]">
                    {step.number}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]/30 hidden lg:block" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2C4A3E]" />
                  )}
                </div>

                <h3 className="serif text-lg font-bold text-[#1A1A1A] mb-2 tracking-wide">
                  {step.title}
                </h3>

                <p className="sans text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed mb-3 font-medium">
                  {step.description}
                </p>

                <p className="sans text-xs text-[#1A1A1A]/60 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Involvement Tagline */}
        <div className="p-4 rounded-sm bg-white border border-[#1A1A1A]/15 flex items-center justify-center gap-2.5 text-center text-xs sm:text-sm font-mono text-[#1A1A1A]/80 shadow-2xs">
          <UserCheck className="w-4 h-4 text-[#2C4A3E] shrink-0" />
          <span>"From the first conversation to implementation, I stay personally involved."</span>
        </div>
      </div>
    </section>
  );
};
