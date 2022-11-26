import React from 'react';
import { Link } from 'react-router-dom';

const ProductIption = ({ pro , setAllCategories}) => {
    const { author,others_info, yearofuse,title} = pro
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <img src={author.img} alt="" id='card-img' />
                <h4 className="text-2xl text-white font-bold text-center">{author?.name}</h4>
                <h2 className='text-xl text-white font-bold text-center'>Products Name: {title}</h2>
               
                <div className="card-actions justify-center">
                
                <p className='text-md text-white font-bold '> Buying Price: {others_info.originalPrice}</p>
                <p className='text-md text-white font-bold '>Resell Price: {others_info.resaleprice}</p>
                </div>
                <div>
                    <p className='text-md text-error font-bold text-center'>Year of use: {yearofuse}</p>
                    <h3 className='text-md text-primary font-bold text-center'>Published Date : {author.published_date}</h3>
                </div>
                {  <div className="card-actions justify-center">
                <label
                    // disabled={slots.length === 0}
                    htmlFor="booking-modal"
                    className="btn btn-primary text-white"
                    onClick={() => setAllCategories(pro)}
                >Book Appointment</label>
            </div> 
                }
            </div>
        </div>
    );
};

export default ProductIption;


//    {/* <div className="card-actions justify-center">
//                 <label
//                     // disabled={slots.length === 0}
//                     htmlFor="booking-modal"
//                     className="btn btn-primary text-white"
//                     // onClick={() => setTreatment(appointmentOption)}
//                 >Book Appointment</label>
//             </div> */}