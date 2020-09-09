import React, { Fragment } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <Fragment>
      <Header />
      <Info />
      <About />
      <Skills />
    </Fragment>
  );
}

export default App;
