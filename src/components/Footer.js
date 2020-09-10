import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer bg-primary">
            <div className="info-color-dark text-center py-3">
                <b>© 2020 Copyright:</b> Hans Farro Castillo 
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/HansFarro">
                    <i class="fab fa-github white-text mx-4"> </i>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/hans-farro-castillo-959a52122/">
                    <i class="fab fa-linkedin white-text mr-4"> </i>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCftIUMPYr8YVCmJb3UweoIQ">
                    <i class="fab fa-youtube white-text"> </i>
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;