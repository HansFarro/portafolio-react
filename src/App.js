import React from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="wrap">
        <Navbar />
        <Info />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;
