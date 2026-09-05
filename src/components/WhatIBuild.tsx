import React from 'react';
import {
  Globe,
  LayoutGrid,
  Layers,
  Bot,
  MessageSquare,
  Cpu,
  Sparkles,
  Zap,
  PhoneCall,
  Repeat,
  Workflow,
  LucideIcon,
} from 'lucide-react';
import { WHAT_I_BUILD_GROUPS } from '../data/content';

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  LayoutGrid,
  Layers,
  Bot,
  MessageSquare,
  Cpu,
  Sparkles,
  Zap,
  PhoneCall,
  Repeat,
  Workflow,
};

export const WhatIBuild: React.FC = () => {
  return (
    <section id="what-i-build" className="py-14 sm:py-20 bg-[#F9F8F6] border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#2C4A3E] mb-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
            <span>Capabilities & Execution</span>
          </div>

          <h2 className="serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] mb-4">
            What I Build
          </h2>

          <p className="sans text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed font-normal">
            Technology is only useful when it solves a real business problem. I build practical digital solutions around what your business actually needs.
          </p>
        </div>

        {/* 3 Major Groups */}
        <div className="space-y-12">
          {WHAT_I_BUILD_GROUPS.map((group, groupIndex) => (
            <div key={group.name} className="border-t border-[#1A1A1A]/10 pt-6">
              {/* Group Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#2C4A3E] tracking-widest uppercase">
                    0{groupIndex + 1}.
                  </span>
                  <h3 className="serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
                    {group.name}
                  </h3>
                </div>
                <p className="font-mono text-xs text-[#1A1A1A]/60">
                  {group.subtitle}
                </p>
              </div>

              {/* Items Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${group.items.length === 3 ? '3' : '4'} gap-4`}>
                {group.items.map((item) => {
                  const Icon = ICON_MAP[item.icon] || Sparkles;
                  return (
                    <div
                      key={item.title}
                      className="p-5 rounded-sm bg-white border border-[#1A1A1A]/10 hover:border-[#2C4A3E]/50 transition-all duration-200 flex flex-col justify-between group shadow-2xs"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-sm bg-[#F2F0EB] text-[#2C4A3E] group-hover:bg-[#2C4A3E] group-hover:text-white transition-colors flex items-center justify-center mb-3.5">
                          <Icon className="w-4 h-4 stroke-[2]" />
                        </div>
                        <h4 className="serif text-base font-bold text-[#1A1A1A] mb-2">
                          {item.title}
                        </h4>
                        <p className="sans text-xs text-[#1A1A1A]/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
