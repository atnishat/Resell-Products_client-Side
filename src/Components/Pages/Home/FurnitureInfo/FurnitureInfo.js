import React from 'react';
import sofa from '../../../../asset/furniture/Best-Furniture.jpg'


const FurnitureInfo = () => {

    return (
        
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          
            <div className='w-1/2'>
                <p className="text-2xl font-bold text-orange-600">About Our Service</p>
                <h1 className="my-5 text-5xl font-bold">
                Let your living space <br />
                live up to your expectations<br />
                with partex resale products. </h1>
                <p className="py-6">WE DELIVER IN Bangladesh: Dhaka City, Dhaka Division, Mymensingh Division, 
                Chittagong City, Chittagong Division, Rajshahi Division, Rangpur Division, Khulna Division, 
                Sylhet Division, Barisal Division</p>
                <p className="py-6">Overseas: Please contact your respective showroom </p>
                
            </div>
            <div className='relative w-1/2'>
                <img src={sofa} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
               
            </div>
        </div>
    </div>
        

        
    );
};

export default FurnitureInfo;