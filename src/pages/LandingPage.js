import React from 'react';

// Components
import Navbar from '../components/Navbar';
import Info from '../components/Info';
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const LandingPage = () => {
  return ( 
    <div className="wrap">
        <Navbar />
        <Info />
        <About />
        <Skills />
        <Footer />
    </div>
   );
}
 
export default LandingPage;