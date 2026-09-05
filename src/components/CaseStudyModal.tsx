import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Play, FileText, Mail, Database, Cpu, Award, Clock } from 'lucide-react';
import { FEATURED_CASE_STUDY } from '../data/content';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'flow' | 'simulation' | 'tech'>('flow');
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simStep, setSimStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      name: 'Google Form Submission',
      time: '0s',
      detail: 'Student enters exam date, syllabus topics, and weak areas.',
      status: 'Trigger received',
      icon: FileText,
    },
    {
      name: 'Google Sheets Logging',
      time: '0.8s',
      detail: 'Row added with unique timestamp and student email address.',
      status: 'Payload parsed',
      icon: Database,
    },
    {
      name: 'n8n Automation Engine',
      time: '1.4s',
      detail: 'Webhook triggers multi-branch workflow, sanitizes topic queries.',
      status: 'Pipeline engaged',
      icon: Cpu,
    },
    {
      name: 'Gemini AI Prompt Reasoning',
      time: '18.2s',
      detail: 'Synthesizes tailored timetable, top 5 concept deep-dives, and 10 questions with solutions.',
      status: 'Inference complete',
      icon: Cpu,
    },
    {
      name: 'Personalized Study Plan Formatted',
      time: '24.5s',
      detail: 'Structured into clear, responsive markdown with styled sections.',
      status: 'Document compiled',
      icon: CheckCircle2,
    },
    {
      name: 'Gmail Dispatch',
      time: '32.1s',
      detail: 'Delivered directly into the student’s inbox ready to review.',
      status: 'Delivered in <60s',
      icon: Mail,
    },
  ];

  const handleRunSimulation = () => {
    setSimulationRunning(true);
    setSimStep(0);
    const interval = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setSimulationRunning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1A1A1A]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white border border-[#1A1A1A]/20 rounded-sm shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#1A1A1A]/10 flex items-start justify-between gap-4 bg-[#F9F8F6]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#2C4A3E] text-white font-mono text-[10px] font-bold tracking-widest uppercase mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>{FEATURED_CASE_STUDY.badge}</span>
            </div>
            <h2 id="case-study-title" className="serif text-xl sm:text-2xl font-normal text-[#1A1A1A] tracking-tight">
              {FEATURED_CASE_STUDY.title} — System Architecture
            </h2>
            <p className="sans text-xs sm:text-sm text-[#1A1A1A]/65 mt-1">
              End-to-end event-driven workflow built with n8n and Google Gemini AI.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F2F0EB] rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4A3E]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#1A1A1A]/10 bg-[#F2F0EB] px-6">
          <button
            onClick={() => setActiveTab('flow')}
            className={`py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-colors ${
              activeTab === 'flow'
                ? 'border-[#2C4A3E] text-[#2C4A3E]'
                : 'border-transparent text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
            }`}
          >
            Workflow Breakdown
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-colors ${
              activeTab === 'simulation'
                ? 'border-[#2C4A3E] text-[#2C4A3E]'
                : 'border-transparent text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
            }`}
          >
            Live Execution Simulation
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-colors ${
              activeTab === 'tech'
                ? 'border-[#2C4A3E] text-[#2C4A3E]'
                : 'border-transparent text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
            }`}
          >
            Tools & Logic
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 max-h-[68vh] overflow-y-auto space-y-6">
          {activeTab === 'flow' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#F9F8F6] border border-[#1A1A1A]/10">
                  <div className="text-[10px] font-mono font-bold text-[#1A1A1A]/60 uppercase tracking-widest mb-1">Problem Addressed</div>
                  <p className="sans text-sm text-[#1A1A1A]/80 leading-relaxed">
                    {FEATURED_CASE_STUDY.problem}
                  </p>
                </div>
                <div className="p-4 rounded-sm bg-[#F9F8F6] border border-[#1A1A1A]/10">
                  <div className="text-[10px] font-mono font-bold text-[#2C4A3E] uppercase tracking-widest mb-1">System Solution</div>
                  <p className="sans text-sm text-[#1A1A1A]/80 leading-relaxed">
                    {FEATURED_CASE_STUDY.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-mono font-bold text-[#1A1A1A]/60 uppercase tracking-widest mb-3">
                  Step-by-Step Data Journey
                </h4>
                <div className="space-y-2.5">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.name}
                        className="p-3 rounded-sm bg-[#F9F8F6] border border-[#1A1A1A]/10 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[#1A1A1A]/40 w-5 font-bold">0{idx + 1}</span>
                          <div className="w-6 h-6 rounded-xs bg-white border border-[#1A1A1A]/15 flex items-center justify-center text-[#2C4A3E]">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="serif font-bold text-[#1A1A1A]">{step.name}</span>
                            <span className="sans text-[#1A1A1A]/70 hidden sm:inline ml-2">— {step.detail}</span>
                          </div>
                        </div>
                        <div className="font-mono text-[11px] text-[#2C4A3E] shrink-0 text-right font-semibold">
                          <span>{step.status}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-6">
              <div className="p-5 rounded-sm bg-[#F9F8F6] border border-[#1A1A1A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="serif text-sm sm:text-base font-bold text-[#1A1A1A]">
                    Simulate Under-60-Second Execution
                  </div>
                  <div className="sans text-xs text-[#1A1A1A]/65 mt-0.5">
                    Watch the data flow through n8n & Gemini AI from Google Form to student inbox.
                  </div>
                </div>
                <button
                  onClick={handleRunSimulation}
                  disabled={simulationRunning}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] disabled:opacity-50 text-white font-semibold text-xs transition-all font-mono uppercase tracking-wider shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{simulationRunning ? 'Simulating...' : 'Run Pipeline'}</span>
                </button>
              </div>

              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const isDone = idx <= simStep;
                  const isCurrent = idx === simStep && simulationRunning;
                  return (
                    <div
                      key={step.name}
                      className={`p-3.5 rounded-sm border transition-all ${
                        isCurrent
                          ? 'bg-[#2C4A3E]/10 border-[#2C4A3E] text-[#1A1A1A] ring-1 ring-[#2C4A3E]/30'
                          : isDone
                          ? 'bg-[#F9F8F6] border-[#1A1A1A]/15 text-[#1A1A1A]'
                          : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                              isDone ? 'bg-[#2C4A3E] text-white' : 'bg-[#F2F0EB] text-[#1A1A1A]/50'
                            }`}
                          >
                            {isDone ? '✓' : idx + 1}
                          </div>
                          <span className="serif font-bold text-xs sm:text-sm">{step.name}</span>
                        </div>
                        <span className="font-mono text-xs text-[#1A1A1A]/50">{step.time}</span>
                      </div>
                      <p className="sans text-xs text-[#1A1A1A]/70 mt-1 ml-7">{step.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FEATURED_CASE_STUDY.tools.map((tool) => (
                  <div key={tool} className="p-3.5 rounded-sm bg-[#F9F8F6] border border-[#1A1A1A]/10">
                    <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/50 uppercase tracking-wider block mb-1">Integration</span>
                    <span className="serif text-sm font-bold text-[#1A1A1A]">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-sm bg-[#F9F8F6] border border-[#1A1A1A]/10">
                <h4 className="text-[10px] font-mono font-bold text-[#2C4A3E] uppercase tracking-widest mb-2">Prompt Engineering & Guardrails</h4>
                <p className="sans text-xs text-[#1A1A1A]/80 leading-relaxed mb-3">
                  The Gemini AI node was engineered with strict structured output formatting, guaranteeing that the 5 hardest topics receive concise conceptual breakdowns alongside 10 step-by-step practice problems with verified solutions.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#1A1A1A]/70">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2C4A3E]" />
                    Delivery: {FEATURED_CASE_STUDY.deliveryTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2C4A3E]" />
                    Status: Verified & Live
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#1A1A1A]/10 bg-[#F9F8F6] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#1A1A1A]/70 font-mono">
            Custom systems tailored to real user problems.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-sm border border-[#1A1A1A]/20 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F2F0EB] transition-colors"
            >
              Close
            </button>
            <a
              href="#assessment"
              onClick={onClose}
              className="px-4 py-2 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1 shadow-xs"
            >
              <span>Build A Similar System</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
