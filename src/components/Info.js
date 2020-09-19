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
                        <h1 className="display-3 text-center">Hola, soy </h1>
                        <h1 className="display-3 text-center">Hans Farro</h1>
                        <Typed
                            strings={['FULL STACK DEVELOPER','INFORMATICO Y AUTODIDACTA','FULL STACK DEVELOPER']}
                            typeSpeed={90}
                            backSpeed={70}
                            backDelay={800}
                            className="display-4 text-center"
                        />
                        <p className="lead mx-auto">HTML5 | CSS3 | JAVASCRIPT | NODEJS | REACT</p>
                    </div>
                    <div className="profile-image mt-5 mb-5">
                        <img src={profileImage} alt="" />
                    </div>
                    <div className="col-12 text-center mx-auto">
                        <button 
                            className="btn btn-primary"
                            onClick={() => scroll.scrollTo(1020,scrollType)}
                        >
                            Ver Más</button>
                        <a  
                        href="https://drive.google.com/file/d/1b2axsnjpIkr0yQNBWmfytOOmnpuzTAK7/view?usp=sharing"
                        className="btn btn-green ml-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        >DESCARGAR CV</a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Info;