import React from 'react';
import Education from '../img/coding_two_color.svg';

const About = () => {
    return ( 
        <div className="jumbotron about" id="about">
            <h1 className="display-3 title">SOBRE MI</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="info-section">
                        <p>Egresado de Ingenieria de Sistemas Empresariales con altos conocimientos en desarrollo de software y gestion de proyecto de TI</p>
                        <p>Durante mi etapa universitaria y mi internado en Telefonica del Perú , he puesto en practica mis habilidades en el desarrollo de software </p>
                        <p>Me gusta leer, escuchar musica y programar. Soy desarrollador web por hobbie.</p>
                        <blockquote class="blockquote text-center">
                            <p class="mb-0">"First, solve the problem. Then, write the code."</p>
                            <footer class="blockquote-footer">John Johnson</footer>
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