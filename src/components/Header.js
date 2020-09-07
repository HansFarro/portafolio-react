import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Hans Farro Castillo</a>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">SOBRE MI</a>
                        </li> 
                        <li class="nav-item">
                            <a className="nav-link" href="#">EDUCACIÓN</a>
                        </li> 
                        <li class="nav-item">
                            <a className="nav-link" href="#">HABILIDADES</a>
                        </li> 
                        <li class="nav-item">
                            <a className="nav-link" href="#">PROYECTOS</a>
                        </li> 
                        <li class="nav-item">
                            <a className="nav-link" href="#">CONTACTAME</a>
                        </li> 
                    </ul>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;