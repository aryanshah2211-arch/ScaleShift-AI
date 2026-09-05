import React from 'react';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { FRICTION_POINTS } from '../data/content';

export const WhatCanWeImprove: React.FC = () => {
  return (
    <section id="what-can-we-improve" className="py-14 sm:py-20 bg-[#F9F8F6] border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#2C4A3E] mb-3 uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Friction Points & Opportunities</span>
          </div>

          <h2 className="serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] mb-4">
            What Can We Improve?
          </h2>

          <p className="sans text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed font-normal">
            Operational bottlenecks, conversion leaks, and manual work slow growth down. Here are common challenges I solve:
          </p>
        </div>

        {/* 9 Friction Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
          {FRICTION_POINTS.map((point) => (
            <div
              key={point}
              className="p-4 rounded-sm bg-white border border-[#1A1A1A]/10 hover:border-[#2C4A3E]/40 transition-colors flex items-start gap-3 shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#2C4A3E]/70 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
              <span className="sans text-sm text-[#1A1A1A] font-medium leading-snug">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Statement & CTA Card */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#F2F0EB] border border-[#1A1A1A]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="serif text-lg sm:text-xl font-bold text-[#1A1A1A] mb-1">
              "You bring the problem. I'll help figure out what should be built."
            </div>
            <p className="sans text-xs sm:text-sm text-[#1A1A1A]/70">
              No sales pitches, no forced technology — just a straightforward diagnosis of what makes sense for your business.
            </p>
          </div>

          <a
            id="discuss-your-problem-btn"
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs active:scale-[0.98] shrink-0"
          >
            <span>DISCUSS YOUR PROBLEM</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
