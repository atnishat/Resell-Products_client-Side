import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './addProduct.css'

const AddProducts = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    // const { data: specialties, isLoading } = useQuery({
    //     queryKey: ['specialty'],
    //     queryFn: async () => {
    //         const res = await fetch('https://used-products-server-side.vercel.app/appointmentSpecialty');
    //         const data = await res.json();
    //         return data;
    //     }
    // })





    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        productName: data.name,
                        category: data.category,
                        condition: data.condition,
                        description: data.description,
                        email: data.email,
                        location: data.location,
                        name: data.name,
                        phone: data.phone,
                        price: data.price,
                        uses: data.uses,
                        image: imgData.data.url
                    }

                    // save products information to the database
                    fetch('https://used-products-server-side.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Your Product is added successfully');
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }


    return (
        <div className='w-96 p-7' id='add-product'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="number" {...register("price", {
                        required: "price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <input type="text" {...register("condition", {
                        required: "condition is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Category</span></label>
                    <input type="text" {...register("category", {
                        required: "category is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year Of Use</span></label>
                    <input type="text" {...register("uses", {
                        required: "uses is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.uses && <p className='text-red-500'>{errors.uses.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: "description is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone</span></label>
                    <input type="number" {...register("phone", {
                        required: "phone is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary text-white w-full mt-4' value="Add A Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;