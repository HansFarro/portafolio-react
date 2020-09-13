import React from 'react';
// import img from '../img/projects/devto2.jpg';

const Card = ({id,name,image,description}) => {
    return ( 
    <div className="col-sm-12 col-md-6 col-lg-4 mt-4 mx-auto">
        <div id={id} className="card text-white bg-primary mb-3 mx-auto">
            <img src={image.src} alt={image.alt} className="card-img-top"></img>
            <h4 className="card-title p-2 text-center">{name}</h4>
            <p className="card-text px-2 pb-2 text-center">{description}</p>
        </div>
    </div>    
     );
}
 
export default Card;