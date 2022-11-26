import React from 'react';
import { Link } from 'react-router-dom';
import './category.css'

const CategoriesOption = ({ appointmentOption}) => {
    const { name, image, _id} = appointmentOption;
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center">   
            <img src={image} alt="" id='card-img' />
            <h2 className="text-3xl text-white font-bold text-center">{name}</h2>
            <Link to={`/categoriesOption/${_id}`}>
                <button className="btn btn-primary ">
                    Explore More
                    </button>
                    </Link>
        </div>
    </div>
    );
};

export default CategoriesOption;