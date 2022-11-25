import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CategoriesOption from './CategoriesOption';

const Categories = () => {
    // const [appointmentOption, setAppointmentOption] = useState([]);


    const { data: appointmentOption = [], isLoading } = useQuery({
        queryKey: ['categoriesOption'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categoriesOption`);
            const data = await res.json();
            return data
        }
    });


    // useEffect( () =>{
    //     fetch('http://localhost:5000/categoriesOption')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOption(data))
    // },[])


    return (
        <div  className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOption.map(option => <CategoriesOption
                        key={option._id}
                        appointmentOption={option}
                        // setTreatment={setTreatment}
                    ></CategoriesOption>)
                }
            </div>
        </div>
    );
};

export default Categories;