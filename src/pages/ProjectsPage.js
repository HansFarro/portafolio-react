import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectPage = () => {
  return ( 
    <div className="wrap">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
 
export default ProjectPage;