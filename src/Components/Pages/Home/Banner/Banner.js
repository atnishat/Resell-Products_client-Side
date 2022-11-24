import React from 'react';
import img from '../../../../asset/furniture/banner.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} alt="furniture" className='f-img' />
          <div>
            <h1 className="text-5xl font-bold">Partex Resale Furniture!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;