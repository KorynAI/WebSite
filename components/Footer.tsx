import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-koryn-charcoal text-white py-12 border-t border-koryn-mutedTeal/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-48 mb-4" variant="light" />
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              O sistema nervoso central da sua operação de saúde.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="font-semibold text-koryn-cyan tracking-wide uppercase text-sm">Fale Conosco</h4>
            <div className="flex gap-6">
              <a 
                href="mailto:contato@koryn.ai" 
                className="flex items-center gap-2 text-gray-300 hover:text-koryn-cyan transition-colors group"
              >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contato@koryn.ai</span>
              </a>
              
              <a 
                href="https://instagram.com/koryn.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-koryn-cyan transition-colors group"
              >
                 <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@koryn.ai</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Koryn AI. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-gray-300 cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-gray-300 cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};