// import React from 'react';
// import { Header } from './Header';
// // Importe o Footer aqui se tiver, ex: import { Footer } from './Footer';

// const Pesquisa: React.FC = () => {
//   return (
//     // h-screen garante que a aplicação ocupe exatamente a altura da janela
//     <div className="flex flex-col h-screen font-sans text-koryn-charcoal selection:bg-koryn-cyan/30">
      
//       <Header />

//       {/* Main ocupa o espaço restante (flex-1) e largura total. 
//           'relative' é usado para ancorar o iframe absoluto. */}
//       <main className="flex-1 w-full relative bg-gray-50">
//         <iframe
//           src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__YXorqJUOVM2UlFRN1JENkkzQ0RRT0owVjFRTUVXRi4u&embed=true"
//           className="absolute top-0 left-0 w-full h-full"
//           frameBorder="0"
//           style={{ border: 'none' }}
//           allowFullScreen
//           webkitAllowFullScreen
//           mozAllowFullScreen
//           msAllowFullScreen
//           title="Pesquisa Microsoft Forms"
//         />
//       </main>

//       {/* Coloque seu componente Footer aqui */}
//       {/* <Footer /> */}
      
//     </div>
//   );
// };

// export default Pesquisa;

import React from 'react';
import { Header } from './Header';

const Pesquisa: React.FC = () => {
  return (
    // h-[100dvh] é crucial para mobile: ajusta a altura ignorando a barra de endereço do navegador
    <div className="flex flex-col h-[100dvh] font-sans text-koryn-charcoal selection:bg-koryn-cyan/30">
      
      {/* O Header fica aqui. Se ele for 'fixed', o próximo elemento precisa de padding-top */}
      <Header />

      {/* 1. 'flex-1': Ocupa todo o espaço vertical restante.
         2. 'pt-16': Adiciona espaço no topo para o Header não cobrir o iframe (ajuste 16 para 20 ou 24 se seu header for muito alto).
         3. 'flex flex-col': Garante que o iframe dentro estique corretamente.
      */}
      <main className="flex-1 flex flex-col pt-16 md:pt-20 bg-gray-50 w-full overflow-hidden">
        <iframe
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__YXorqJUOVM2UlFRN1JENkkzQ0RRT0owVjFRTUVXRi4u&embed=true"
          className="w-full flex-grow" // flex-grow faz ele ocupar a altura restante do main
          frameBorder="0"
          style={{ border: 'none' }}
          allowFullScreen
          webkitAllowFullScreen
          mozAllowFullScreen
          msAllowFullScreen
          title="Pesquisa Microsoft Forms"
        />
      </main>
      
    </div>
  );
};

export default Pesquisa;