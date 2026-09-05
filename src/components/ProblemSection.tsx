import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const steps = [
    { name: 'UNDERSTAND', desc: 'Identify root bottlenecks & business realities' },
    { name: 'DESIGN', desc: 'Map practical architecture before choosing tech' },
    { name: 'BUILD', desc: 'Engineer custom software, AI or workflows' },
    { name: 'LAUNCH', desc: 'Deploy securely & ensure operational impact' },
  ];

  return (
    <section id="problem" className="py-14 sm:py-18 border-t border-[#1A1A1A]/10 bg-[#F2F0EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#2C4A3E] mb-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
            <span>Problem-First Architecture</span>
          </div>

          {/* Headline */}
          <h2 className="serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] mb-5 leading-tight">
            Your Business Has a Problem. Let's Build the Right Solution.
          </h2>

          {/* Supporting copy */}
          <p className="sans text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed font-normal">
            Sometimes you need a better website. Sometimes you need a custom application. Sometimes your customers need a smarter way to communicate. Sometimes your team needs AI or automation. The right solution starts by understanding the problem.
          </p>
        </div>

        {/* Refined Visual Process: UNDERSTAND → DESIGN → BUILD → LAUNCH */}
        <div className="rounded-sm bg-white border border-[#1A1A1A]/15 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#1A1A1A]/60 font-semibold">
              The Resolution Framework
            </span>
            <span className="font-mono text-xs text-[#2C4A3E] font-medium">
              Direct founder execution
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.name}
                className="p-4 rounded-sm bg-[#F9F8F6] border border-[#1A1A1A]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#2C4A3E] tracking-wider">
                      0{index + 1}
                    </span>
                    {index < steps.length - 1 ? (
                      <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]/40 hidden lg:block" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2C4A3E]" />
                    )}
                  </div>
                  <h3 className="serif text-base font-bold text-[#1A1A1A] mb-1.5">
                    {step.name}
                  </h3>
                  <p className="sans text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
