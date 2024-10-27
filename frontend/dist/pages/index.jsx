import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import TunnelEffect from '../components/TunnelEffect';
const Home = () => {
    return (<div>
      <Header />
      <div style={{ position: 'relative' }}>
      <TunnelEffect />
      <Hero />
    </div>
      <Services />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>);
};
export default Home;
