import React from 'react';
import './category.css'

const CategoriesOption = ({ appointmentOption}) => {
    const { name, image} = appointmentOption;
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center">   
            <img src={image} alt="" id='card-img' />
            <h2 className="text-3xl text-white font-bold text-center">{name}</h2>
            {/* <div className="card-actions justify-center">
                <label
                    disabled={slots.length === 0}
                    htmlFor="booking-modal"
                    className="btn btn-primary text-white"
                    onClick={() => setTreatment(appointmentOption)}
                >Book Appointment</label>
            </div> */}
            <button className="btn btn-primary ">Explore Category</button>
        </div>
    </div>
    );
};

export default CategoriesOption;