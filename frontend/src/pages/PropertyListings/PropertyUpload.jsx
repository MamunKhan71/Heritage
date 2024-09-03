import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import 'animate.css';
import { Helmet } from "react-helmet";

const PropertyUpload = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext); // Assuming you have user context to check authentication

    const onSubmit = (data) => {
        const propertyData = {
            propertyDetails: {
                title: data.title,
                location: data.location,
                price: parseInt(data.price),
                size: parseInt(data.size),
                bedrooms: parseInt(data.bedrooms),
                bathrooms: parseInt(data.bathrooms),
                status: data.status,
                type: data.type,
                description: data.description
            },
            owner: {
                name: user.displayName, // Assuming user context provides displayName
                email: user.email // Assuming user context provides email
            }
        };

        // Post the propertyData to the backend (assuming the backend API exists)
        // fetch('https://your-api-endpoint/properties', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(propertyData)
        // })
        //     .then(response => response.json())
        //     .then(() => {
        //         toast.success("Property uploaded successfully!");
        //         reset(); // Clear the form
        //         navigate('/'); // Redirect to homepage or properties page
        //     })
        //     .catch(() => toast.error("Failed to upload property"));
    };

    return (
        <div className="w-full lg:w-[600px] mx-auto px-4 lg:px-0 mt-12">
            <Helmet>
                <title>BDCorporate | Upload Property</title>
            </Helmet>
            <div className="animate__animated animate__fadeIn">
                <h1 className="text-primary text-3xl font-semibold mb-6 text-center">Upload Property</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full border p-4">
                    <div className="flex flex-col gap-4 w-full">
                        <input {...register('title')} type="text" placeholder="Property Title" className="input bg-[#F5F9FE] w-full p-4 rounded-none" required />
                        <input {...register('image')} type="text" placeholder="Property Image Url" className="input bg-[#F5F9FE] w-full p-4 rounded-none" required />
                        <input {...register('location')} type="text" placeholder="Location" className="input bg-[#F5F9FE] w-full p-4 rounded-none" required />
                        <input {...register('price')} type="number" placeholder="Price" className="input bg-[#F5F9FE] w-full p-4 rounded-none" required />
                        <input {...register('size')} type="number" placeholder="Size (sq ft)" className="input bg-[#F5F9FE] w-full p-4 rounded-none" required />
                        <input {...register('bedrooms')} type="number" placeholder="Bedrooms" className="input bg-[#F5F9FE] w-full p-4 rounded-none" required />
                        <input {...register('bathrooms')} type="number" placeholder="Bathrooms" className="input bg-[#F5F9FE] w-full p-4 rounded-none" required />
                        <select {...register('type')} className="input bg-[#F5F9FE] w-full p-4 rounded-none" required>
                            <option value="">Select Property Type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                        <select {...register('status')} className="input bg-[#F5F9FE] w-full p-4 rounded-none" required>
                            <option value="">Select Property Status</option>
                            <option value="Ready to Move">Ready to Move</option>
                            <option value="Under Construction">Under Construction</option>
                        </select>
                        <textarea {...register('description')} placeholder="Property Description" className="input bg-[#F5F9FE] w-full p-4 rounded-none" rows="4" required></textarea>
                    </div>
                    <div className="w-full">
                        <button type="submit" className="hover:cursor-pointer w-full relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary text-white hover:bg-primary group">
                            <span className="w-48 h-48 rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="text-center relative w-full transition-colors duration-300 ease-in-out text-white group-hover:text-white">Upload Property</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertyUpload;
