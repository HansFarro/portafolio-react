import React from 'react';
import profileImage from '../img/profile-image.svg';
import { animateScroll as scroll} from 'react-scroll';

function Info() {
    return (
        <div className="jumbotron main-info-section" id="info">
            <div className="text">
                <h1 className="display-2">Hola, </h1>
                <h1 className="display-2">Soy Hans Farro Castillo,</h1>
                <h1 className="display-2">Web developer</h1>
                <p className="lead">HTML5 | CSS3 | JAVASCRIPT | NODEJS | REACT</p>
            </div>
            <div className="profile-image mb-5">
                <img src={profileImage} alt="" />
            </div>
            <div className="col text-center">
                <button 
                    className="btn btn-primary"
                    onClick={() => scroll.scrollTo(900)}
                >
                    Ver Mas</button>
            </div>
        </div>
    );
}
 
export default Info;