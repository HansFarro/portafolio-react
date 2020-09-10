import React from 'react';
import img from '../img/projects/devto2.jpg';

const Card = ({id,name,image,description}) => {
    return ( 
    <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
        <div id={id} className="card text-white bg-primary mb-3">
            <img src={image.src} alt={image.alt} class="card-img-top"></img>
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{description}</p>
        </div>
    </div>    
     );
}
 
export default Card;