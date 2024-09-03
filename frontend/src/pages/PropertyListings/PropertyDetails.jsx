import { BathIcon, Bed, BedDouble, BlendIcon, LucideFullscreen, MapPin } from 'lucide-react'
import React from 'react'

const PropertyDetails = () => {
    return (
        <div className='space-y-6'>
            <div>
                <div className='flex  gap-6'>
                    <div>
                        <h1 className='font-bold text-xl'>3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad</h1>
                        <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> Meadshowire Park, Greenfield, USA</p>
                    </div>
                    <p className='font-extrabold text-2xl'>$ 300K</p>
                </div>
            </div>
            <hr />
            <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-3'>
                    <img className='w-full h-96 object-cover' src="firstSection.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-40 object-cover' src="firstSection.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-40 object-cover' src="firstSection.jpg" alt="" />
                </div>
                <div className='relative'>
                    <img className='w-full h-40 object-cover brightness-50' src="firstSection.jpg" alt="" />
                    <h1 className='text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>View More</h1>
                </div>
            </div>
            {/* overview */}
            <div className='bg-[#F9FAFB] space-y-8 p-6 rounded-lg border border-[#E5E7EB]'>
                <h1 className='font-semibold text-lg'>Overview</h1>
                <div className='bg-white border-b-[3px] p-4 flex items-center justify-start gap-12'>
                    <p className='inline-flex items-center gap-2 font-bold'> <BedDouble /> 2 Beds</p>
                    <p className='inline-flex items-center gap-2 font-bold'> <BathIcon /> 2 Bath</p>
                    <p className='inline-flex items-center gap-2 font-bold'> <BlendIcon /> 2 Balcony</p>
                    <p className='inline-flex items-center gap-2 font-bold'> <LucideFullscreen /> Fully Funished</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <p className='text-gray-500'>Carpet Area</p>
                            <p className='text-black font-semibold'>2000 sqft</p>
                            <p>$ 225/sqft</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Floor</p>
                            <p className='text-black font-semibold'>Second (Out of 6th Floor)</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Transaction Type</p>
                            <p className='text-black font-semibold'>Ready to move</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Lift</p>
                            <p className='text-black font-semibold'>1</p>
                        </div>
                    </div>
                    <div className='flex justify-start gap-24 items-start'>
                        <div>
                            <p className='text-gray-500'>Facing</p>
                            <p className='text-black font-semibold'>North-East</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Additional Rooms</p>
                            <p className='text-black font-semibold'>1 servant room & 1 guest room</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Age of construction</p>
                            <p className='text-black font-semibold'>New Construction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails