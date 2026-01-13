import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './components/Home';
import Pesquisa from './components/Pesquisa';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-koryn-charcoal selection:bg-koryn-cyan/30">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
          <Route path="/pesquisa" element={<Pesquisa />} />
      </div>
    </Router>
  );
};

export default App;