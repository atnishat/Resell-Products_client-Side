import React from 'react';

const BokingModal = ({allCategories, setAllCategories}) => {
const {title, others_info} = allCategories;

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
        }
        console.log(booking);
        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        // console.log(booking);
        setAllCategories(null);
    }

    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-3xl text-center font-bold">{title}</h3>
                <h3 className="text-2xl mt-8 text-left font-bold text-primary">Buying Price : {others_info?.originalPrice}</h3>
                <h3 className="text-2xl mt-4  text-left font-bold text-primary ">Reselling Price : {others_info?.resaleprice}</h3>
                
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    
                    <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                    <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
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