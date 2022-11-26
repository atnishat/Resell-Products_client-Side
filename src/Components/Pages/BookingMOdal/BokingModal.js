import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BokingModal = ({allCategories, setAllCategories}) => {
const {title,originalPrice,resaleprice } = allCategories;
const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(name,location, email, phone);
        const booking = {
            appointmentLocation: location,
            productsName: title,
            BuyerName: name,
            email,
            phone,
            originalPrice,
            resaleprice
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                if (data.acknowledged) {
                    setAllCategories(null);
                toast.success('Your Booking is confirmed');
                    // refetch();
                }
                else{
                    toast.error(data.message);
                }
            })
        
       
    }

    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-3xl text-center font-bold">{title}</h3>
                <h3 className="text-2xl mt-8 text-left font-bold text-primary">Buying Price : {originalPrice}</h3>
                <h3 className="text-2xl mt-4  text-left font-bold text-primary ">Reselling Price : {resaleprice}</h3>
                
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                <input name="name" type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                    <input name="email" type="email" placeholder="Email Address" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                    <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                    
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-primary w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
    );
};

export default BokingModal;