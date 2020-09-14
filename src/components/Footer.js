import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer bg-primary">
            <div className="info-color-dark text-center py-3">
                <b>© 2020 Copyright:</b> Hans Farro Castillo 
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/HansFarro" className="icon">
                    <i className="fab fa-github mx-4"> </i>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/hans-farro-castillo-959a52122/" className="icon">
                    <i className="fab fa-linkedin mr-4"> </i>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCftIUMPYr8YVCmJb3UweoIQ" className="icon">
                    <i className="fab fa-youtube"> </i>
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;