import React from 'react';
import profileImage from '../img/profile-image.svg';

const Info = () => {
    return ( 
        <div className="jumbotron main-info-section"> 
            <div className="text">
                <h1 className="display-2">Hola , </h1>
                <h1 className="display-2">Soy Hans Farro Castillo,</h1>
                <h1 className="display-2">Web developer</h1>
                <p className="lead">HTML5 | CSS3 | JAVASCRIPT | NODEJS | REACT</p>
            </div>
            <div className="profile-image">
                <img src={profileImage} alt=""/>
            </div>
        </div>
     );
}
 
export default Info;