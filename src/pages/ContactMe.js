import React from 'react';

// Components
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import LetsTalk from '../components/LetsTalk';
import Footer from '../components/Footer';

const ContactMe = () => {
  return (
    <div className="wrap">
      <Navbar />
      <ContactForm />
      <LetsTalk />
      <Footer />
    </div>
   );
}
 
export default ContactMe;