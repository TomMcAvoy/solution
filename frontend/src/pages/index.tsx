import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import TunnelEffect from '../components/TunnelEffect';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ position: 'absolute' }}>
      <TunnelEffect />
    </div>
      <Hero/>
      <Services />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;






