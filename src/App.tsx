import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatIBuild } from './components/WhatIBuild';
import { WhatAreYouTryingToBuild } from './components/WhatAreYouTryingToBuild';
import { WhatCanWeImprove } from './components/WhatCanWeImprove';
import { SelectedWork } from './components/SelectedWork';
import { HowItWorks } from './components/HowItWorks';
import { FounderSection } from './components/FounderSection';
import { LeadForm } from './components/LeadForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedOutcome, setSelectedOutcome] = useState<string>('Website');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSelectOutcome = (outcome: string) => {
    // Map outcome name to requirement options
    const map: Record<string, string> = {
      WEBSITE: 'Website',
      'WEB APPLICATION': 'Web Application',
      'AI CHATBOT': 'AI Chatbot',
      'AI AGENT': 'AI Agent',
      'WHATSAPP SYSTEM': 'AI WhatsApp Automation',
      AUTOMATION: 'Business Automation',
      'CUSTOM SOLUTION': 'Custom Digital Solution',
    };
    setSelectedOutcome(map[outcome] || 'Website');

    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans selection:bg-[#2C4A3E]/15 selection:text-[#2C4A3E]">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Sections in Natural Reading Flow */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. What I Build (Build, Intelligence, Automate) */}
        <WhatIBuild />

        {/* 5. What Are You Trying to Build? (Interactive outcome mapping) */}
        <WhatAreYouTryingToBuild onSelectOutcome={handleSelectOutcome} />

        {/* 6. What Can We Improve? (Friction points) */}
        <WhatCanWeImprove />

        {/* 7. Selected Work (Honest projects & hackathon showcase) */}
        <SelectedWork />

        {/* 8. How I Work (4-step process) */}
        <HowItWorks />

        {/* 9. Founder Section (Built by a founder, delivered personally) */}
        <FounderSection />

        {/* 10. Tell Me What You're Trying to Build (Lead intake form) */}
        <LeadForm initialProjectType={selectedOutcome} />

        {/* 11. Final CTA */}
        <FinalCTA />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Button (bottom-right) */}
      <WhatsAppFloatingButton />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-20 right-5 z-30 w-10 h-10 rounded-full bg-white hover:bg-stone-50 border border-[#1A1A1A]/15 text-[#1A1A1A] flex items-center justify-center shadow-md transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4A3E]"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
