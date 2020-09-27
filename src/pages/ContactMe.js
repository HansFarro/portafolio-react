import React from 'react';

// Components
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import LetsWork from '../components/LetsWork';
import Footer from '../components/Footer';

const ContactMe = () => {
  return (
    <div className="content">
      <Navbar />
      <ContactForm />
      <LetsWork />
      <Footer />
    </div>
   );
}
 
export default ContactMe;