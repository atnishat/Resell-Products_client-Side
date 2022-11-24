import React from 'react';
import './Furniture.css'

const Furniture = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (

        // <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
        // <figure>
        //     <img src={icon} alt="Movie" />
        // </figure>
        // <div className="card-body">
        //     <h2 className="card-title">{name}</h2>
        //     <p>{description}</p>
        // </div>

        <div className={`card  text-white shadow-xl ${bgClass}`}>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
        <figure><img src={icon} alt="Shoes" id='img-card' /></figure>
      </div>
    
    );
};

export default Furniture;