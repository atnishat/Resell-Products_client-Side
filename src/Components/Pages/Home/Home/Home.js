import React from 'react';
import Categories from '../../Categories/Categories/Categories';
import Banner from '../Banner/Banner';
import FurnitureInfo from '../FurnitureInfo/FurnitureInfo';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <FurnitureInfo></FurnitureInfo>
            <Categories></Categories>
        </div>
    );
};

export default Home;