import React, { useState } from 'react';
import {
  Award,
  Clock,
  CheckCircle,
  ExternalLink,
  Layers,
  ArrowRight,
  Code2,
  Terminal,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { FEATURED_CASE_STUDY, SECONDARY_PROJECTS } from '../data/content';
import { CaseStudyModal } from './CaseStudyModal';

export const SelectedWork: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="work" className="py-14 sm:py-20 bg-[#F2F0EB] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#2C4A3E] mb-3 uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>Projects & Experiments</span>
          </div>

          <h2 className="serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] mb-4">
            Selected Work
          </h2>

          <p className="sans text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed font-normal">
            Real software, systems, and technical implementations. I believe in demonstrating genuine capability rather than inventing client statistics.
          </p>
        </div>

        {/* 1. Featured Hackathon Project Card */}
        <div className="rounded-sm bg-white border border-[#1A1A1A]/15 overflow-hidden shadow-sm mb-8">
          {/* Card Top Banner */}
          <div className="bg-[#F9F8F6] p-6 sm:p-8 border-b border-[#1A1A1A]/10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#2C4A3E] text-white font-mono text-[10px] font-bold tracking-widest uppercase">
                    <Award className="w-3 h-3" />
                    <span>AI HACKATHON PROJECT</span>
                  </span>
                  <span className="font-mono text-xs text-[#2C4A3E] font-semibold">
                    {FEATURED_CASE_STUDY.badge}
                  </span>
                </div>

                <h3 className="serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
                  {FEATURED_CASE_STUDY.title}
                </h3>
                <p className="sans text-xs sm:text-sm text-[#1A1A1A]/70 max-w-2xl leading-relaxed">
                  {FEATURED_CASE_STUDY.problem}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
                <div className="p-3 rounded-sm bg-white border border-[#1A1A1A]/15 flex items-center gap-3 shadow-2xs">
                  <Clock className="w-4 h-4 text-[#2C4A3E]" />
                  <div>
                    <div className="text-[9px] font-mono text-[#1A1A1A]/50 uppercase tracking-wider">
                      Turnaround
                    </div>
                    <div className="text-xs font-bold text-[#1A1A1A] font-mono">
                      {FEATURED_CASE_STUDY.deliveryTime}
                    </div>
                  </div>
                </div>

                <button
                  id="featured-see-how-it-works-btn"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs active:scale-[0.98]"
                >
                  <span>See How It Works</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Workflow Diagram & Solution */}
          <div className="p-6 sm:p-8 bg-white">
            <div className="mb-6">
              <span className="text-[10px] font-mono font-bold text-[#2C4A3E] uppercase tracking-widest block mb-1">
                Engineered Solution
              </span>
              <p className="serif text-base text-[#1A1A1A] font-normal leading-relaxed">
                {FEATURED_CASE_STUDY.solution}
              </p>
            </div>

            {/* Architecture Flow */}
            <div className="border border-[#1A1A1A]/10 rounded-sm p-4 bg-[#F9F8F6] mb-6">
              <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/60 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                <Layers className="w-3.5 h-3.5 text-[#2C4A3E]" />
                <span>Autonomous Workflow Pipeline</span>
              </span>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {FEATURED_CASE_STUDY.workflow.map((node, index) => (
                  <React.Fragment key={node}>
                    <span className="px-2.5 py-1 bg-white border border-[#1A1A1A]/15 rounded-xs text-[#1A1A1A] font-medium shadow-2xs">
                      {node}
                    </span>
                    {index < FEATURED_CASE_STUDY.workflow.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-[#2C4A3E] shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#1A1A1A]/50 mr-1">Stack:</span>
              {FEATURED_CASE_STUDY.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono px-2 py-0.5 rounded-xs bg-[#F2F0EB] text-[#1A1A1A]/80 border border-[#1A1A1A]/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {SECONDARY_PROJECTS.map((project) => {
            const isUniversity = project.category.includes('University');
            const Icon = isUniversity ? Terminal : MessageSquare;
            return (
              <div
                key={project.id}
                className="p-6 rounded-sm bg-white border border-[#1A1A1A]/15 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm font-mono text-[10px] font-bold tracking-wider uppercase ${
                        isUniversity
                          ? 'bg-[#1A1A1A] text-white'
                          : 'bg-[#2C4A3E]/10 text-[#2C4A3E] border border-[#2C4A3E]/20'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{project.category}</span>
                    </span>

                    <span className="text-[11px] font-mono text-[#1A1A1A]/50">
                      {project.type}
                    </span>
                  </div>

                  <h4 className="serif text-xl font-bold text-[#1A1A1A] mb-2">
                    {project.title}
                  </h4>

                  <p className="sans text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap items-center gap-1.5">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-xs bg-[#F9F8F6] text-[#1A1A1A]/80 border border-[#1A1A1A]/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Credibility Note */}
        <div className="p-4 rounded-sm bg-white border border-[#1A1A1A]/15 flex items-center gap-3 text-xs font-mono text-[#1A1A1A]/70">
          <ShieldCheck className="w-4 h-4 text-[#2C4A3E] shrink-0" />
          <span>
            <strong>Portfolio Transparency:</strong> All projects displayed represent functional software personally developed by Aryan Shah. I do not publish simulated client logos or fabricated revenue numbers.
          </span>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
