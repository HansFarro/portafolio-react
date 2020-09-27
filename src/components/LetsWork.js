import React from 'react';
import Fade from 'react-reveal/Fade';

const LetsWork = () => {
  return ( 
    <div className="advice">
      <div className="row mx-auto">
        <Fade bottom duration={2000}>
          <div className="col-12 col-md-12 col-lg-12 py-3">
            <h1 className="info-color-dark text-center">¿Tienes alguna idea de proyecto? Let's Work Together</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
}
 
export default LetsWork;