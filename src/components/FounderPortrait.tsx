import React, { useState, useEffect } from 'react';

interface FounderPortraitProps {
  className?: string;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({ className = '' }) => {
  // Ordered paths to check:
  // 1. /aryan-shah.png
  // 2. /aryan-shah.jpg
  // 3. /linkedln photo.png
  // 4. /aryan-shah.svg (refined photo-faithful vector artwork)
  const candidatePaths = [
    '/aryan-shah.png',
    '/aryan-shah.jpg',
    '/linkedln photo.png',
    '/aryan-shah.svg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [src, setSrc] = useState<string>(candidatePaths[0]);

  useEffect(() => {
    // Check if user has uploaded a photo previously into localStorage
    try {
      const stored = localStorage.getItem('scaleshift_founder_photo');
      if (stored && (stored.startsWith('data:image/') || stored.startsWith('/'))) {
        setSrc(stored);
        return;
      }
    } catch {
      // ignore storage error
    }
  }, []);

  const handleError = () => {
    if (currentIndex < candidatePaths.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSrc(candidatePaths[nextIdx]);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-sm overflow-hidden border border-[#1A1A1A]/15 bg-[#2E383F] shadow-2xs relative">
        <img
          src={src}
          alt="Aryan Shah - Founder of ScaleShift AI"
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
          onError={handleError}
        />
      </div>

      {/* Clean identifier tag */}
      <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-sm bg-white border border-[#1A1A1A]/15 text-[10px] font-mono text-[#2C4A3E] flex items-center gap-1.5 shadow-xs font-semibold select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
        <span>Founder & Builder</span>
      </div>
    </div>
  );
};
