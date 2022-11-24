import React from 'react';
import Banner from '../Banner/Banner';
import FurnitureInfo from '../FurnitureInfo/FurnitureInfo';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <FurnitureInfo></FurnitureInfo>
        </div>
    );
};

export default Home;