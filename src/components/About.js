import React from 'react';
import DottedImage from '../img/dotted-shape.png';

const About = () => {
    return ( 
        <div className="jumbotron about">
            <h1 className="display-3">SOBRE MI</h1>
            <div className="about-me-info">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <img src={DottedImage} alt=""/>
        </div>
     );
}
 
export default About;