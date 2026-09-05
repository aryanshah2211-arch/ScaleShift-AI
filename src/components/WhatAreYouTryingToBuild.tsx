import React, { useState } from 'react';
import { ArrowRight, HelpCircle, Check, ArrowUpRight } from 'lucide-react';
import { OUTCOME_MAPPINGS } from '../data/content';

interface WhatAreYouTryingToBuildProps {
  onSelectOutcome?: (outcome: string) => void;
}

export const WhatAreYouTryingToBuild: React.FC<WhatAreYouTryingToBuildProps> = ({ onSelectOutcome }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const handleSelect = (idx: number, outcome: string) => {
    setSelectedIndex(idx);
    if (onSelectOutcome) {
      onSelectOutcome(outcome);
    }
  };

  return (
    <section id="what-are-you-building" className="py-14 sm:py-20 bg-[#F2F0EB] border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#2C4A3E] mb-3 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Outcome-Driven Design</span>
          </div>

          <h2 className="serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] mb-4">
            What Are You Trying to Build?
          </h2>

          <p className="sans text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed font-normal">
            Not sure what technology you need? Start with the outcome.
          </p>
        </div>

        {/* Interactive Mapping Grid */}
        <div className="rounded-sm bg-white border border-[#1A1A1A]/15 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#1A1A1A]/10 mb-6">
            <div className="text-xs font-mono text-[#1A1A1A]/60">
              Select your immediate goal or intent:
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2C4A3E] hover:text-[#223B32] transition-colors"
            >
              <span>Jump straight to requirement form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2.5">
            {OUTCOME_MAPPINGS.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.prompt}
                  onClick={() => handleSelect(idx, item.outcome)}
                  className={`p-4 rounded-sm border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#F9F8F6] border-[#2C4A3E] shadow-2xs'
                      : 'bg-white border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                        isSelected
                          ? 'bg-[#2C4A3E] text-white'
                          : 'bg-[#F2F0EB] text-[#1A1A1A]/50'
                      }`}
                    >
                      {isSelected ? <Check className="w-3 h-3 stroke-[3]" /> : idx + 1}
                    </span>
                    <span className="serif text-sm sm:text-base text-[#1A1A1A] font-medium">
                      "{item.prompt}"
                    </span>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="text-[#1A1A1A]/40 font-mono text-xs hidden sm:inline">
                      →
                    </span>
                    <span
                      className={`px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-wider uppercase border transition-colors ${
                        isSelected
                          ? 'bg-[#2C4A3E] text-white border-[#2C4A3E]'
                          : 'bg-[#F2F0EB] text-[#1A1A1A] border-[#1A1A1A]/10'
                      }`}
                    >
                      {item.outcome}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Row */}
          <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="sans text-xs sm:text-sm text-[#1A1A1A]/70">
              Ready to discuss your objective and map out the exact architecture?
            </p>
            <a
              id="lets-figure-it-out-btn"
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs active:scale-[0.98]"
            >
              <span>LET'S FIGURE IT OUT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
