
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BokingModal from '../BookingMOdal/BokingModal';
import Categories from '../Categories/Categories/Categories';
import ProductIption from './ProductIption';


const Product = () => {

    const products = useLoaderData();
    //  console.log(products);
    const [allCategories, setAllCategories] = useState(null);

    return (
        <div className='my-16'>
            <p className=' text-3xl text-left text-white font-bold'>categories of the second-hand products </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    products.map(pro => <ProductIption
                        key={pro._id}
                        pro={pro}
                        setAllCategories={setAllCategories}
                    ></ProductIption>)
                }
            </div>           
                {
                    allCategories &&
                <BokingModal
                    allCategories={allCategories}
                    setAllCategories={setAllCategories}
                ></BokingModal>
                }
        </div>
    );
};

export default Product;