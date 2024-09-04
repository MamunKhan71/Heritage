import axios from 'axios'
import { DollarSign, MapPinned, PinIcon, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import PropertySearch from '../pages/PropertyListings/PropertySearch'
import { useNavigate } from 'react-router-dom'

const PropertySearchBox = ({ category }) => {
    const [properties, setProperties] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [searchCriteria, setSearchCriteria] = useState(null);
    const navigate = useNavigate()
    const handleSearch = (data) => {
        const newSearchQuery = {
            search: data.search,
            budget: data.budget,
            location: data.location,
            propertyType: data.propertyType,
            propertyCategory: category
        }
        setSearchCriteria(newSearchQuery)
        navigate('/property-search', { state: { searchCriteria: newSearchQuery } });
    };
    useEffect(() => {
        axios.get(`http://localhost:5000/filter-property/${category}`)
            .then(res => console.log(res.data))
    }, [])
    return (
        <form onSubmit={handleSubmit(handleSearch)} className='space-y-4'>
            {/* Search Input */}
            <label className="input input-bordered rounded-none flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
                <input
                    type="text"
                    className="grow"
                    placeholder="Search"
                    {...register('search')}
                />
            </label>

            {/* Form Fields */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Location */}
                <div>
                    <h3 className='inline-flex gap-2 items-center font-semibold'>
                        <MapPinned className='text-orange-500' /> Your Location
                    </h3>
                    <select
                        {...register('location', { required: 'Location is required' })}
                        className="select bg-[#ECF5FF] w-full max-w-xs rounded-none"
                    >
                        <option value="" disabled>Select your location</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Mymensingh">Mymensingh</option>
                    </select>
                    {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                </div>

                {/* Property Type */}
                <div>
                    <h3 className='inline-flex gap-2 items-center font-semibold'>
                        <PinIcon className='text-orange-500' /> Property Type
                    </h3>
                    <select
                        {...register('propertyType', { required: 'Property type is required' })}
                        className="select bg-[#ECF5FF] w-full max-w-xs rounded-none"
                    >
                        <option value="" disabled>Select property type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                    </select>
                    {errors.propertyType && <p className="text-red-500">{errors.propertyType.message}</p>}
                </div>

                {/* Budget */}
                <div>
                    <h3 className='inline-flex gap-2 items-center font-semibold'>
                        <DollarSign className='text-orange-500' /> Budget
                    </h3>
                    <input
                        {...register('budget', { required: 'Budget is required', valueAsNumber: true })}
                        className='input rounded-none'
                        type="number"
                        placeholder='Maximum Range'
                    />
                    {errors.budget && <p className="text-red-500">{errors.budget.message}</p>}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="btn w-full bg-[#0059B1] border-none rounded-none text-white"
            >
                <Search /> Find Property
            </button>
        </form>
    )
}

export default PropertySearchBox