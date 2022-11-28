import React from 'react';


const ProductIption = ({ pro , setAllCategories}) => {
    const { title,originalPrice,resaleprice,name,yearofuse,published_date,img} = pro
    // console.log(pro);
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <img src={img} alt="" id='card-img' />
                <h4 className="text-2xl text-white font-bold text-center">{name}</h4>
                <h2 className='text-xl text-white font-bold text-center'>Products Name: {title}</h2>
               
                <div className="card-actions justify-center">
                
                <p className='text-md text-white font-bold '> Buying Price: {originalPrice}</p>
                <p className='text-md text-white font-bold '>Resell Price: {resaleprice}</p>
                </div>
                <div>
                    <p className='text-md text-error font-bold text-center'>Year of use: {yearofuse}</p>
                    <h3 className='text-md text-primary font-bold text-center'>Published Date : {published_date}</h3>
                </div>
                {  <div className="card-actions justify-center">
                <label
                    htmlFor="booking-modal"
                    className="btn btn-primary text-white"
                    onClick={() => setAllCategories(pro)}
                >Book Now</label>
            </div> 
                }
            </div>
        </div>
    );
};

export default ProductIption;
