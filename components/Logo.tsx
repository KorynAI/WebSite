import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-[200px]", variant = 'dark' }) => {
  return (
    <img 
      src="/images/logo.svg" 
      alt="Koryn AI" 
      className={`${className} w-auto object-contain`}
    />
  );
};