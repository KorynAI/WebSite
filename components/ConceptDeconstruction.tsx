import React from 'react';
import { Heart, Brain, Activity } from 'lucide-react';

export const ConceptDeconstruction: React.FC = () => {
  return (
    <section className="py-24 bg-koryn-teal text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-koryn-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">A Desconstrução</h2>
          <p className="text-koryn-cyan text-lg md:text-xl font-light tracking-wide uppercase">Inteligência no Centro da Vida</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Card 1: KOR */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-koryn-cyan" fill="currentColor" fillOpacity={0.2} />
            </div>
            <h3 className="text-4xl font-display font-bold mb-2">KOR</h3>
            <p className="text-koryn-mutedTeal text-sm font-semibold tracking-widest uppercase mb-4">Do latim "Cor" — Coração</p>
            <p className="text-gray-300 leading-relaxed">
              Na saúde, o "coração" representa o paciente, o centro do cuidado e a vida humana. 
              O som "Kor" remete ao que é vital, essencial e humano.
            </p>
          </div>

          {/* Center Connector */}
          <div className="flex flex-col items-center justify-center text-center py-8 md:py-0">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-koryn-cyan to-transparent opacity-50 mb-4 md:hidden" />
            <div className="bg-koryn-cyan w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(38,230,247,0.4)] animate-pulse-slow z-10">
              <Activity className="w-10 h-10 text-koryn-teal" />
            </div>
            <div className="mt-6">
              <h4 className="text-2xl font-display font-bold text-white">FUSÃO</h4>
              <p className="text-koryn-cyan/80 text-sm mt-2">Humano + Tech</p>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-koryn-cyan to-transparent opacity-50 mt-4 md:hidden" />
          </div>

          {/* Card 2: RYN */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-8 h-8 text-koryn-cyan" />
            </div>
            <h3 className="text-4xl font-display font-bold mb-2">RYN</h3>
            <p className="text-koryn-mutedTeal text-sm font-semibold tracking-widest uppercase mb-4">De "Neurônio"</p>
            <p className="text-gray-300 leading-relaxed">
              Representa nossa rede neural artificial avançada. É a inteligência, o processamento de dados complexos e a precisão diagnóstica que ampliam a capacidade médica.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};