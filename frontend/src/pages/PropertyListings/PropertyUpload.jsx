import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import 'animate.css';
import { Helmet } from "react-helmet";
import { UploadCloud } from "lucide-react";

const PropertyUpload = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext); 

    const onSubmit = (data) => {
        const propertyData = {
            propertyDetails: {
                title: data.title,
                location: data.location,
                price: parseInt(data.price),
                mainImage: data.mainImage,
                imageGallery: data.imageGallery.split(','),
                valueRange: {
                    min: parseInt(data.valueRange.min),
                    max: parseInt(data.valueRange.max),
                    currentBid: data.valueRange.currentBid
                },
                overview: data.overview.split(','), 
            },
            propertySummary: {
                type: data.propertySummary.type,
                status: data.propertySummary.status,
                title: data.propertySummary.title,
                price: parseInt(data.propertySummary.price)
            },
            owner: {
                name: user?.displayName,
                email: user?.email
            }
        };

        console.log(propertyData);

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Property Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Title</label>
                        <input {...register('title')} type="text" placeholder="Property Title" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input {...register('location')} type="text" placeholder="Location" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input {...register('price')} type="number" placeholder="Price" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    {/* Main Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Main Image URL</label>
                        <input {...register('mainImage')} type="text" placeholder="Main Image URL" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    {/* Image Gallery */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image Gallery URLs (Comma Separated)</label>
                        <input {...register('imageGallery')} type="text" placeholder="Image Gallery URLs" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    {/* Value Range */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Min Value</label>
                            <input {...register('valueRange.min')} type="number" placeholder="Min Value" className="input w-full p-3 rounded-none border border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Max Value</label>
                            <input {...register('valueRange.max')} type="number" placeholder="Max Value" className="input w-full p-3 rounded-none border border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Current Bid</label>
                            <input {...register('valueRange.currentBid')} type="text" placeholder="Current Bid" className="input w-full p-3 rounded-none border border-gray-300" />
                        </div>
                    </div>

                    {/* Overview */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Overview (Comma Separated)</label>
                        <textarea {...register('overview')} placeholder="Overview (e.g., Power Back Up, Lift, Gymnasium, etc.)" className="textarea w-full p-3 rounded-none border border-gray-300"></textarea>
                    </div>

                    {/* Property Summary */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Type</label>
                        <input {...register('propertySummary.type')} type="text" placeholder="Type (e.g., Apartment)" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <input {...register('propertySummary.status')} type="text" placeholder="Status (e.g., Ready to Move)" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Summary Title</label>
                        <input {...register('propertySummary.title')} type="text" placeholder="Summary Title" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Summary Price</label>
                        <input {...register('propertySummary.price')} type="number" placeholder="Summary Price" className="input w-full p-3 rounded-none border border-gray-300" />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center w-full">
                        <button type="submit" className="w-full text-center px-4 py-2 bg-primary text-white rounded-none inline-flex items-center justify-center gap-2">Upload Property<UploadCloud /> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertyUpload;
