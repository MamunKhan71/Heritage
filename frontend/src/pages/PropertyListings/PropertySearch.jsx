import { AreaChart, Loader, MapPin, Ruler } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Testimonials from '../../components/Testimonials'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const PropertySearch = () => {
    const location = useLocation();
    const [properties, setProperties] = useState([])
    const { searchCriteria } = location.state || {};
    useEffect(() => {
        axios.post(`http://localhost:5000/filter-property`, searchCriteria)
            .then(res => console.log(res.data))
    }, [])
    return (
        <div className='space-y-6 w-full'>
            <div className='flex items-center gap-4'>
                <button className='btn bg-[#0059B1] px-4 py-1 text-white rounded-lg'>properties (400)</button>
                <button className='btn bg-[#ECF5FF] px-4 py-1 text-black rounded-lg'>New Projects (400)</button>
                <button className='btn bg-[#ECF5FF] px-4 py-1 text-black rounded-lg'>Pre-launch offers</button>
            </div>
            <hr />
            <div className='w-full'>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='flex gap-12 w-full bg-[#F9FAFB] rounded-lg p-12'>
                        <img className='w-40 rounded-lg h-48 object-cover' src="secondSection.jpg" alt="" />
                        <div className='w-full space-y-4'>
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bold text-xl'>3 BHK Builder Floor for Sale in Site Ram Bazar
                                    New Delhi</h2>
                                <p className='font-bold text-3xl'>$ 300000</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> Meadshowire Park, Greenfield, USA</p>
                                <Link to={`/properties/${properties._id}`}><button className='btn border border-black text-lg bg-transparent'>Bid Property</button></Link>
                            </div>
                            <div className='flex gap-4 items-center w-full'>
                                <p className='font-semibold' >Property details</p>
                                <hr className='w-full flex-1 border-[1.5px]' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-[#EE6611] size-10 flex items-center justify-center text-white rounded-md'>
                                        <Loader />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Total Area</p>
                                        <p className='text-[#535353]'>891 sqft</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-[#EE6611] size-10 flex items-center justify-center text-white rounded-md'>
                                        <AreaChart />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Status</p>
                                        <p className='text-[#535353]'>Ready to move</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-[#EE6611] size-10 flex items-center justify-center text-white rounded-md'>
                                        <Ruler />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Total Area</p>
                                        <p className='text-[#535353]'>891 sqft</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 w-full bg-[#F9FAFB] rounded-lg p-4'>
                        <img className='w-40 rounded-lg h-48 object-cover' src="secondSection.jpg" alt="" />
                        <div className='w-full '>
                            <h2>3 BHK Builder Floor for Sale in Site Ram Bazar
                                New Delhi</h2>
                            <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> Meadshowire Park, Greenfield, USA</p>
                            <div className='flex gap-4 items-center w-full'>
                                <p className='font-semibold' >Property details</p>
                                <hr className='w-full flex-1 border-[1.5px]' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-[#EE6611] size-10 flex items-center justify-center text-white rounded-md'>
                                        <Loader />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Total Area</p>
                                        <p className='text-[#535353]'>891 sqft</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-[#EE6611] size-10 flex items-center justify-center text-white rounded-md'>
                                        <AreaChart />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Status</p>
                                        <p className='text-[#535353]'>Ready to move</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-[#EE6611] size-10 flex items-center justify-center text-white rounded-md'>
                                        <Ruler />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Total Area</p>
                                        <p className='text-[#535353]'>891 sqft</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-6' />
                <div className='flex items-center gap-4 mt-4'>
                    <button className='btn bg-[#0059B1] px-4 py-1 text-white rounded-lg'>01</button>
                    <button className='btn bg-[#ECF5FF] px-4 py-1 text-black rounded-lg'>02</button>
                    <button className='btn bg-[#ECF5FF] px-4 py-1 text-black rounded-lg'>Next</button>
                </div>
                <div className='bg-[#ECF5FF] p-6 mt-12 flex gap-12 w-full'>
                    <div className='basis-76'>
                        <h1 className='font-bold text-2xl'>Need a Hom Loan?</h1>
                        <p className='text-sm'>Select much Home loan can
                            take</p>
                    </div>
                    <div className='flex-1'>
                        <div className="relative mb-6 ">
                            <label htmlFor="labels-range-input" className="sr-only">
                                Labels range
                            </label>
                            <input
                                id="labels-range-input"
                                type="range"
                                defaultValue={20000}
                                min={20000}
                                max={50000}
                                className="w-full h-3 bg-[#8AB3DB] rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-sm text-[#535353] absolute start-0 -bottom-6">
                                $20K
                            </span>
                            <span className="text-sm text-[#535353] absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                                $30K
                            </span>
                            <span className="text-sm text-[#535353]  absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                                $40K
                            </span>
                            <span className="text-sm text-[#535353] absolute end-0 -bottom-6">
                                $50K
                            </span>
                        </div>
                    </div>

                </div>
                <div className='mt-12'>
                    <Testimonials />
                </div>
            </div>
        </div>
    )
}

export default PropertySearch