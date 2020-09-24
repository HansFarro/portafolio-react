import React from 'react';
import Education from '../img/coding_two_color.svg';
import aboutme from '../services/aboutme';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const About = () => {
    const [about] = aboutme;
    return (
    <div className="jumbotron" id="about">
        <Tada duration={2000}>
            <h1 className="display-3 title">SOBRE MÍ</h1>
        </Tada>
        <div className="row">
            <Fade left duration={2000}>
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
            </Fade>
        </div>
    </div> 
     );
}
 
export default About;