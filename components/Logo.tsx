import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'fill-white' : 'fill-koryn-teal';
  const subtitleColor = variant === 'light' ? 'fill-koryn-cyan' : 'fill-koryn-teal';

  return (
    <svg 
      viewBox="0 0 400 120" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Koryn AI Logo"
    >
      {/* Icon: Cross + Brain Network */}
      <g transform="translate(10, 10)">
        {/* Medical Cross Base */}
        <path 
          d="M30 0 H70 V30 H100 V70 H70 V100 H30 V70 H0 V30 H30 Z" 
          fill="#005763" 
          rx="10"
        />
        
        {/* Network Nodes (Abstracting the Brain/Face Profile inside the cross) */}
        <circle cx="35" cy="40" r="2.5" fill="#26E6F7" className="animate-pulse" />
        <circle cx="55" cy="25" r="3" fill="#26E6F7" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="75" cy="45" r="2.5" fill="#26E6F7" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="50" cy="60" r="3.5" fill="#26E6F7" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
        <circle cx="25" cy="65" r="2" fill="#26E6F7" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="65" cy="80" r="2.5" fill="#26E6F7" className="animate-pulse" style={{ animationDelay: '0.9s' }} />

        {/* Network Connections */}
        <path 
          d="M35 40 L55 25 L75 45 L50 60 L35 40 M50 60 L25 65 M50 60 L65 80 M55 25 L75 45" 
          stroke="#26E6F7" 
          strokeWidth="1" 
          opacity="0.6"
        />
      </g>

      {/* Text: KORYN */}
      <text 
        x="120" 
        y="65" 
        fontFamily="Montserrat, sans-serif" 
        fontSize="52" 
        fontWeight="700" 
        className={textColor}
        letterSpacing="2"
      >
        KORYN
      </text>

      {/* Subtext: CLINICAL INTELLIGENCE */}
      <text 
        x="122" 
        y="92" 
        fontFamily="Inter, sans-serif" 
        fontSize="14" 
        fontWeight="600" 
        className={subtitleColor}
        letterSpacing="4"
        opacity={variant === 'light' ? 0.9 : 0.8}
      >
        INTELIGÊNCIA CLÍNICA
      </text>
    </svg>
  );
};