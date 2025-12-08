import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ConceptDeconstruction } from './components/ConceptDeconstruction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-koryn-charcoal selection:bg-koryn-cyan/30">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ConceptDeconstruction />
      </main>
      <Footer />
    </div>
  );
};

export default App;