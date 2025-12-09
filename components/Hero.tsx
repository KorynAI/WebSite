import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => setIsSubmitted(true), 500);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-koryn-lightGray pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-koryn-teal/10 text-koryn-teal mb-8 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-koryn-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-koryn-teal"></span>
          </span>
          <span className="text-sm font-semibold tracking-wide uppercase">Sistema em Construção</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-koryn-teal mb-6 leading-tight max-w-5xl mx-auto">
          A <span className="text-transparent bg-clip-text bg-gradient-to-r from-koryn-teal to-koryn-cyan">AI powered future!</span>
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-koryn-charcoal/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Onde a empatia do cuidado humano encontra a precisão da inteligência artificial.
        </p>

        {/* CTA Form */}
        <div className="w-full max-w-md mx-auto mb-16">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-6 py-4 rounded-lg border-2 border-koryn-mutedTeal/30 focus:border-koryn-cyan focus:ring-4 focus:ring-koryn-cyan/20 outline-none transition-all bg-white text-koryn-charcoal placeholder-koryn-mutedTeal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-lg bg-koryn-teal hover:bg-opacity-90 text-white font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 group shadow-lg hover:shadow-koryn-teal/30"
              >
                Avise-me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="bg-koryn-success/10 border border-koryn-success text-koryn-success px-6 py-4 rounded-lg flex items-center justify-center gap-3 animate-fade-in">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">Você está na lista. Entraremos em contato.</span>
            </div>
          )}
          <p className="text-sm text-koryn-mutedTeal mt-4">
            Entre na lista de espera para acesso antecipado à nossa plataforma.
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-koryn-mutedTeal">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};