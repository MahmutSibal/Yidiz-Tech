import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stars from './components/Stars';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Stars />
      <Hero />
      <Services />
      <Technologies />
      <Founders />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
