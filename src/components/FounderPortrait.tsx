import React, { useState } from 'react';

interface FounderPortraitProps {
  className?: string;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({ className = '' }) => {
  const [hasError, setHasError] = useState(false);
  const photoPath = '/aryan-shah.jpg';

  return (
    <div className={`relative ${className}`}>
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-sm overflow-hidden border border-[#1A1A1A]/15 bg-[#2C4A3E] shadow-2xs relative flex items-center justify-center">
        {!hasError ? (
          <img
            src={photoPath}
            alt="Aryan Shah - Founder of ScaleShift AI"
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#2C4A3E] text-white select-none">
            <span className="serif text-2xl sm:text-3xl font-bold tracking-wider text-white">AS</span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 mt-1">Aryan Shah</span>
          </div>
        )}
      </div>

      {/* Clean identifier tag */}
      <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-sm bg-white border border-[#1A1A1A]/15 text-[10px] font-mono text-[#2C4A3E] flex items-center gap-1.5 shadow-xs font-semibold select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
        <span>Founder & Builder</span>
      </div>
    </div>
  );
};

