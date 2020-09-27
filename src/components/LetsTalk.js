import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { Link } from 'react-router-dom';

const LetsTalk = () => {
  const scrollType = {
    duration: 100,
    delay: 50,
    smooth: true,
    offset: -10,
};
  return ( 
  <div className="advice">
    <div className="row mx-auto">
      <div className="col-12 col-md-12 col-lg-12 py-3">
        <h1 className="info-color-dark text-center">¿Tienes alguna idea de proyecto? Let's Work Together</h1>
        <div className="mx-auto text-center">
        <Link className="btn btn-primary mr-4" onClick={() => scroll.scrollToTop(scrollType)} to="/portafolio-react">Home</Link>
        <Link className="btn btn-green" onClick={() => scroll.scrollToTop(scrollType)} to="/contactme">Let's talk</Link>
        </div>
      </div>
    </div>
  </div>
   );
}
 
export default LetsTalk;