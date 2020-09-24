import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const scrollType = {
        duration: 100,
        delay: 50,
        smooth: true,
        offset: -10,
    };

    return (
        <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-primary sticky-top">
            <Link onClick={() => scroll.scrollToTop(scrollType)} className="navbar-brand" to="/portafolio-react">Hans Farro Castillo</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navBarResponsive" aria-controls="navBarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navBarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link onClick={() => scroll.scrollToTop(scrollType)} className="nav-link" to="/projects">PROYECTOS</Link>
                    </li> 
                    <li className="nav-item">
                        <Link onClick={() => scroll.scrollToBottom(scrollType)} className="nav-link" to="/contactme">CONTÁCTAME</Link>
                    </li> 
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;