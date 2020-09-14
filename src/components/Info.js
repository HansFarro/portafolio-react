import React from 'react';
import profileImage from '../img/profile-image.svg';
import { animateScroll as scroll} from 'react-scroll';
import Typed from 'react-typed';

function Info() {
    const scrollType = {
        duration: 100,
        delay: 50,
        smooth: true,
        offset: -10,
    };
    return (
        <div className="jumbotron main-info-section" id="info">
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-12">
                        <div className="text mx-auto">
                            <h1 className="display-3">Hola, </h1>
                            <Typed
                                strings={['SOY HANS FARRO CASTILLO','SOY DESARROLLADOR','SOY AUTODIDACTA' ,'SOY INFORMÁTICO']}
                                typeSpeed={60}
                                backSpeed={80}
                                className="display-3"
                                loop
                            />
                            <h1 className="display-3">Web developer</h1>
                            <p className="lead mx-auto">HTML5 | CSS3 | JAVASCRIPT | NODEJS | REACT</p>
                        </div>
                        <div className="profile-image mt-5 mb-5">
                            <img src={profileImage} alt="" />
                        </div>
                        <div className="col-12 text-center mx-auto">
                            <button 
                                className="btn btn-primary"
                                onClick={() => scroll.scrollTo(900,scrollType)}
                            >
                                Ver Más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Info;