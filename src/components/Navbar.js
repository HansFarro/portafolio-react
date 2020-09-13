import React from 'react';
import { animateScroll as scroll} from 'react-scroll';

const Navbar = () => {
    const scrollType = {
        duration: 100,
        delay: 50,
        smooth: true,
        offset: -10,
    };

    return (
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                        <a onClick={() => scroll.scrollToTop(scrollType)} className="navbar-brand" href="#info">Hans Farro Castillo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">SOBRE MI</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" href="#skill">HABILIDADES</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">PROYECTOS</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">CONTACTAME</a>
                                </li> 
                            </ul>
                        </div>
                    </nav>
     );
}
 
export default Navbar;