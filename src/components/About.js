import React from 'react';
import Education from '../img/coding_two_color.svg';
import aboutme from '../services/aboutme';

const About = () => {
    const [about] = aboutme;
    return ( 
        <div className="jumbotron about" id="about">
            <h1 className="display-3 title">SOBRE MI</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="info-section">
                        <p>{about.education}</p>
                        <p>{about.currently}</p>
                        <p>{about.hobbie}</p>
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">{about.favquote}</p>
                            <footer className="blockquote-footer">{about.author}</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={Education} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default About;