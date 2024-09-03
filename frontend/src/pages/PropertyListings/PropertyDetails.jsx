import { BathIcon, Battery, Bed, BedDouble, BlendIcon, DownloadCloud, GlassWater, House, ListFilter, Lock, LucideFullscreen, MapPin, ParkingCircle, ParkingCircleOff, PersonStanding, SchoolIcon } from 'lucide-react'
import React from 'react'
import Services from '../Home/Services'
import PopularProperties from '../../components/PopularProperties'

const PropertyDetails = () => {
    return (
        <div className='space-y-6'>
            <div>
                <div className='flex gap-6'>
                    <div>
                        <h1 className='font-bold text-xl'>3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad</h1>
                        <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> Meadshowire Park, Greenfield, USA</p>
                    </div>
                    <p className='font-extrabold text-2xl'>$ 300K</p>
                </div>
            </div>
            <hr />
            <div className='flex gap-4 w-full'>
                <div className='grid grid-cols-3 gap-4 flex-1'>
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
                <div className='basis-96 bg-[#ECF5FF] p-4 space-y-4'>
                    <p>Property Value</p>
                    <p className='font-bold text-xl'>$ 300k - 310k</p>
                    <p>Your bid can not be than 10% of the
                        property Minimum value.</p>
                    <div className='space-y-4'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Min</span>
                            </div>
                            <input type="text" placeholder="$ 280k" className="input w-full rounded-none" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Max</span>
                            </div>
                            <input type="text" placeholder="$ 305k" className="input w-full rounded-none" />
                        </label>
                        <div>
                            <input type="range" min={280000} max="350000" value="280000" className="range" step="1000" />
                            <div className="flex w-full justify-between px-2 text-xs">
                                <span>$ 280k</span>
                                <span>$350k</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center '>
                        <button className="btn bg-[#0059B1] text-center border-none rounded-none text-white">Bid Property</button>
                    </div>
                </div>
            </div>
            {/* overview */}
            <div className='flex gap-4 w-full'>
                <div className='bg-[#F9FAFB] flex-1 space-y-8 p-6 rounded-lg border border-[#E5E7EB]'>
                    <h1 className='font-semibold text-lg'>Overview</h1>
                    <div className='grid grid-cols-4 gap-6 text-sm'>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Power Back Up</p>
                        <p className='flex gap-2 font-semibold'><ListFilter className='bg-white rounded-lg size-6' /> Lift</p>
                        <p className='flex gap-2 font-semibold'><House className='bg-white rounded-lg size-6' /> Club House</p>
                        <p className='flex gap-2 font-semibold'><PersonStanding className='bg-white rounded-lg size-6' /> Gymnesium</p>
                        <p className='flex gap-2 font-semibold'><ParkingCircle className='bg-white rounded-lg size-6' /> Park</p>
                        <p className='flex gap-2 font-semibold'><ParkingCircleOff className='bg-white rounded-lg size-6' /> Reserved Parking</p>
                        <p className='flex gap-2 font-semibold'><Lock className='bg-white rounded-lg size-6' /> Security</p>
                        <p className='flex gap-2 font-semibold'><GlassWater className='bg-white rounded-lg size-6' /> Water Storage</p>
                        <p className='flex gap-2 font-semibold'><SchoolIcon className='bg-white rounded-lg size-6' /> Private Terrace/Garden </p>
                        <p className='flex gap-2 font-semibold'><DownloadCloud className='bg-white rounded-lg size-6' /> Vaatsu Complaint </p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Services/Goods Lift</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Visitor Parking</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Intercom Facility</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Maintenance Staff</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Waste Disposal</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Laundry Service</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Internet/Wifi Connectivity</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> DTH Television Facility</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Piped Gas</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Jogging and Strolling Track</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Outdoor Tennis Courts</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Early Learning Centre</p>
                        <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> Kids Play Area</p>
                    </div>
                </div>
                <div classname="basis-96">
                    <iframe className='rounded-lg'
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d287816.5567377649!2d90.54702064143059!3d23.646852081912325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x3754646e5b59dfbf%3A0x62a2336bc506b0bd!2sChandina!3m2!1d23.489248099999998!2d91.00836369999999!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!3m2!1d23.804092999999998!2d90.4152376!5e1!3m2!1sen!2sbd!4v1725356521712!5m2!1sen!2sbd"
                        width={384}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
            <div>
                <Services />
            </div>
            <div>
                <PopularProperties />
            </div>
        </div>
    )
}

export default PropertyDetails