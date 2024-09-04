import React, { useEffect, useState } from 'react'
import StatCards from '../../components/StatCards'
import Testimonials from '../../components/Testimonials'
import axios from 'axios'

const AboutPage = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        axios.get('https://heritage-blond.vercel.app/teams')
            .then(res => setTeams(res.data))
    }, [])
    return (
        <div>
            <div className='w-full h-96'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452007/header_tzskvx.jpg" alt="" />
            </div>
            <div className='mt-12'>
                <StatCards />
            </div>
            <div className='space-y-12'>
                <div className='mt-24'>
                    <div className='relative'>
                        <img className='w-5/6 h-96 object-cover' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452006/firstSection_dqxbij.jpg" alt="" />
                        <div className='bg-[#ECF5FF] p-6 space-y-4 absolute max-w-lg -bottom-24 right-0'>
                            <p className='text-orange-500 font-semibold'>Our Story</p>
                            <p className='font-bold text-3xl'>Efficient and Transparent
                                Home Buying Solutions</p>
                            <p className='text-sm'>In the symphony Of bustling markets and serene landscapes,
                                Heritage-Nest was born—a vision to</p>
                        </div>
                    </div>
                </div>
                <div className='pt-24'>
                    <div className='relative flex justify-end'>
                        <img className='w-5/6 h-96 object-cover' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452006/firstSection_dqxbij.jpg" alt="" />
                        <div className='bg-[#FDF0E7] p-6 space-y-4 absolute max-w-lg -bottom-24 left-0'>
                            <p className='text-orange-500 font-semibold'>Our Story</p>
                            <p className='font-bold text-3xl'>Efficient and Transparent
                                Home Buying Solutions</p>
                            <p className='text-sm'>TO bridge the miles with smiles, Heritage—Nest pledges to be the
                                golden thread connecting NRIs to their homeland, through trust,
                                transparency. and tailored real estate solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-40 space-y-8'>
                <div className='flex gap-4 items-center'>
                    <hr className='border-2 border-[#EE6611] w-full basis-12' />
                    <h2 className='flex-1 text-[#EE6611] font-semibold'>Our Team</h2>
                </div>
                <p className='font-bold text-3xl'>Discover the Faces Behind Our Success!</p>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        teams?.map(
                            team => <div className="relative w-full h-[417px]">
                                <img className='absolute inset-0 w-full h-full object-cover' src={team.photo} alt={team.name} />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                    <div className='text-center space-y-4'>
                                        <div>
                                            <p className='text-white text-xl font-bold'>{team.name}</p>
                                            <p className='text-white text-xl'>{team.role}</p>
                                        </div>
                                        <div className='border border-gray-400 rounded-lg flex flex-col gap-4 text-white p-4'>
                                            <p className='font-bold'>Contact Info</p>
                                            <p>{team.email}</p>
                                            <p>{team.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='mt-40 flex gap-6 items-center h-96 object-cover'>
                <div className='space-y-8 flex-1'>
                    <div className='flex gap-4 items-center'>
                        <hr className='border-2 border-[#EE6611] w-full basis-12' />
                        <h2 className='flex-1 text-[#EE6611] font-semibold'>Meet the Team For Book Consulation</h2>
                    </div>
                    <p className='font-bold text-3xl'>Meet the stewards of your
                        heritage journey</p>
                    <p className='text-gray-600 text-sm'>each mernber an embodiment Of expertise and warmth, dedicated to guiding you
                        ome, every step of the way.</p>
                    <button className="btn btn-wide bg-[#0059B1] border-none rounded-none text-white">Book Consultation Now</button>

                </div>
                <div className='flex-1 flex items-center justify-end'>
                    <img className='w-1/2 h-full' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452006/firstSection_dqxbij.jpg" alt="" />
                </div>
            </div>
            <div className='mt-40'>
                <Testimonials />
            </div>
        </div>
    )
}

export default AboutPage