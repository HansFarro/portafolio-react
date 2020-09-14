import React from 'react';
import Education from '../img/coding_two_color.svg';
import aboutme from '../services/aboutme';

const About = () => {
    const [about] = aboutme;
    return ( 
        <div className="jumbotron jumbotron-fluid" id="about">
            <h1 className="display-3 title">SOBRE MÍ</h1>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 info-section">
                        <p>{about.education}</p>
                        <p>{about.currently}</p>
                        <p>{about.hobbie}</p>
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">{about.favquote}</p>
                            <footer className="blockquote-footer">{about.author}</footer>
                        </blockquote>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <img src={Education} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default About;