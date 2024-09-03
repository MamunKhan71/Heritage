import { MapPin } from 'lucide-react'
import React from 'react'

const PropertyContainer = () => {
    return (
        <div className='mt-12 grid grid-cols-3 gap-4 w-full'>
            <div className="card card-compact rounded-none bg-[#F9FAFB]">
                <figure>
                    <img
                        src="cardImage.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center w-full'>
                        <button className='btn btn-xs rounded-none text-black bg-[#C5E2FF]'>Apartment</button>
                        <p className='font-semibold w-full text-right'>🟨 Ready to Move</p>
                    </div>
                    <hr />
                    <h2 className="card-title">SunnySlope Suites</h2>
                    <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> Meadshowire Park, Greenfield, USA</p>
                    <p className='font-bold text-2xl'>$ 250000</p>
                </div>
            </div>
            <div className="card card-compact rounded-none bg-[#F9FAFB]">
                <figure>
                    <img
                        src="cardImage.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center w-full'>
                        <button className='btn btn-xs rounded-none text-black bg-[#C5E2FF]'>Apartment</button>
                        <p className='font-semibold w-full text-right'>🟨 Ready to Move</p>
                    </div>
                    <hr />
                    <h2 className="card-title">SunnySlope Suites</h2>
                    <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> Meadshowire Park, Greenfield, USA</p>
                    <p className='font-bold text-2xl'>$ 250000</p>
                </div>
            </div>
            <div className="card card-compact rounded-none bg-[#F9FAFB]">
                <figure>
                    <img
                        src="cardImage.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center w-full'>
                        <button className='btn btn-xs rounded-none text-black bg-[#C5E2FF]'>Apartment</button>
                        <p className='font-semibold w-full text-right'>🟨 Ready to Move</p>
                    </div>
                    <hr />
                    <h2 className="card-title">SunnySlope Suites</h2>
                    <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> Meadshowire Park, Greenfield, USA</p>
                    <p className='font-bold text-2xl'>$ 250000</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyContainer