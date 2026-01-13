import React from 'react';
import { Hero } from './Hero';
import { ConceptDeconstruction } from './ConceptDeconstruction';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <ConceptDeconstruction />
    </main>
  );
};

export default Home;