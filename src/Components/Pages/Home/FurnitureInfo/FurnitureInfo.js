import React from 'react';
import Furniture from './Furniture';
import chair from '../../../../asset/furniture/images2.jpg'
import sofa from '../../../../asset/furniture/Best-Furniture.jpg'
import easysofa from '../../../../asset/furniture/table.jpg'



const FurnitureInfo = () => {

    const cardData = [
        {
            id: 1,
            name: 'Chair',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: chair,
            // bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'table',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: sofa,
            // bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'chair',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: easysofa,
            bgClass: 'bg-bage-200'
        },
        {
            id: 3,
            name: 'chair',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: easysofa,
            bgClass: 'bg-bage-200'
        },
        {
            id: 3,
            name: 'chair',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: easysofa,
            bgClass: 'bg-bage-200'
        },
        {
            id: 3,
            name: 'chair',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: easysofa,
            bgClass: 'bg-bage-200'
        },
    ]

    return (
        
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                cardData.map(card => <Furniture
                    key={card.id}
                    card={card}
                ></Furniture>)
            }
        </div>
        
    );
};

export default FurnitureInfo;