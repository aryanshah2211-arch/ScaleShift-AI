import React from 'react';

interface ScaleShiftLogoProps {
  className?: string;
  iconOnly?: boolean;
  showSubtitle?: boolean;
  textColor?: string;
  subtitleColor?: string;
}

export const ScaleShiftLogo: React.FC<ScaleShiftLogoProps> = ({
  className = 'h-9 w-auto',
  iconOnly = false,
  showSubtitle = true,
  textColor,
  subtitleColor,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Icon matching the uploaded ScaleShift AI Brand Mark */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle rich gradient matching the teal arrow in the uploaded logo */}
          <linearGradient id="ss-teal-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#008C7E" />
            <stop offset="60%" stopColor="#00A896" />
            <stop offset="100%" stopColor="#02BFA6" />
          </linearGradient>

          {/* Deep corporate navy gradient matching the uploaded brand mark */}
          <linearGradient id="ss-navy-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A1C2E" />
            <stop offset="70%" stopColor="#102A43" />
            <stop offset="100%" stopColor="#163656" />
          </linearGradient>
        </defs>

        {/* --- TEAL SECTION (Upper S-Ribbon & Top-Right Arrowhead) --- */}
        {/* The top-right main arrow chevron */}
        <path
          d="M 52 14 H 88 V 50 H 74 V 28 H 52 Z"
          fill="url(#ss-teal-grad)"
        />

        {/* The upper-left zigzag ribbon connecting down to bottom-left */}
        <path
          d="M 52 14 
             L 28 38 
             L 38 48 
             L 22 64 
             L 10 76 
             L 10 66 
             L 22 54 
             L 34 66 
             L 46 54 
             L 36 44 
             L 54 26 
             L 52 14 Z"
          fill="url(#ss-teal-grad)"
        />

        {/* Bottom-left teal chevron wing */}
        <path
          d="M 10 76 
             L 26 92 
             L 36 82 
             L 22 68 
             L 10 76 Z"
          fill="url(#ss-teal-grad)"
        />

        {/* --- NAVY SECTION (Lower Track, Base Foot & Inner Upward Arrow) --- */}
        {/* Inner upward scaling arrow nestled in the center crook */}
        <g fill="url(#ss-navy-grad)">
          {/* Inner Arrowhead */}
          <path
            d="M 46 44 H 68 V 66 H 58 V 54 H 46 Z"
          />
          {/* Inner Arrow Stem connecting down-left */}
          <path
            d="M 46 54 L 54 62 L 44 72 L 36 64 Z"
          />
        </g>

        {/* Outer Navy Track wrapping along the lower and right perimeter */}
        <path
          d="M 22 96 
             L 12 86 
             L 24 74 
             L 32 82 
             L 46 68 
             L 56 78 
             L 70 64 
             L 70 76 
             L 86 60 
             L 86 46 
             L 94 46 
             L 94 66 
             L 76 84 
             L 60 84 
             L 48 96 
             L 32 96 
             L 22 96 Z"
          fill="url(#ss-navy-grad)"
        />
      </svg>

      {/* Brand Typography matching the uploaded design */}
      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <div
            className={`font-bold tracking-tight leading-none text-base sm:text-lg md:text-xl font-sans ${
              textColor || 'text-[#102A43]'
            }`}
            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', letterSpacing: '-0.025em' }}
          >
            ScaleShift <span className="font-bold">AI</span>
          </div>

          {showSubtitle && (
            <div
              className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase leading-tight mt-1 ${
                subtitleColor || 'text-[#102A43]/80'
              }`}
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              AI-Driven Solutions
            </div>
          )}
        </div>
      )}
    </div>
  );
};
