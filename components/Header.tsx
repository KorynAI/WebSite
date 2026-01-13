import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <Logo className={`h-48 mb-4" transition-all ${scrolled ? 'scale-90' : 'scale-100'}`} variant="dark" />
        </Link>
        
        <nav className="flex items-center space-x-4">
          {/* <Link 
            to="/pesquisa"
            className="px-4 py-2 rounded-full border border-koryn-teal text-koryn-teal hover:bg-koryn-teal hover:text-white transition-all font-medium text-sm"
          >
            Pesquisa
          </Link> */}
          {/* <a 
            href="mailto:contato@koryn.ai"
            className="hidden md:block px-6 py-2 rounded-full border border-koryn-teal text-koryn-teal hover:bg-koryn-teal hover:text-white transition-all font-medium text-sm"
          >
            Entre em Contato
          </a> */}
        </nav>
      </div>
    </header>
  );
};