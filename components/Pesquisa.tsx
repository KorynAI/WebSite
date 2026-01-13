import React from 'react';
import { Header } from './Header';
// Importe o Footer aqui se tiver, ex: import { Footer } from './Footer';

const Pesquisa: React.FC = () => {
  return (
    // h-screen garante que a aplicação ocupe exatamente a altura da janela
    <div className="flex flex-col h-screen font-sans text-koryn-charcoal selection:bg-koryn-cyan/30">
      
      <Header />

      {/* Main ocupa o espaço restante (flex-1) e largura total. 
          'relative' é usado para ancorar o iframe absoluto. */}
      <main className="flex-1 w-full relative bg-gray-50">
        <iframe
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__YXorqJUOVM2UlFRN1JENkkzQ0RRT0owVjFRTUVXRi4u&embed=true"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          style={{ border: 'none' }}
          allowFullScreen
          webkitAllowFullScreen
          mozAllowFullScreen
          msAllowFullScreen
          title="Pesquisa Microsoft Forms"
        />
      </main>

      {/* Coloque seu componente Footer aqui */}
      {/* <Footer /> */}
      
    </div>
  );
};

export default Pesquisa;