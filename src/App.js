import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Info />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </Fragment>
  );
}

export default App;
