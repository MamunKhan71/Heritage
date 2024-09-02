import { Home } from 'lucide-react'
import React from 'react'

const Services = () => {
    return (
        <div className='space-y-12'>
            <h1 className='text-4xl font-bold text-center'>Other Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-[#ECF5FF] p-6'>
                    <div className='flex justify-start gap-4'>
                        <div>
                            <div className='bg-[#EE6611] p-2 text-white'>
                                <Home />
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl text-[#111827]'>Advanced Property
                                Search</h3>
                            <p className='text-base font-medium'>Effortlessly find your dream
                                property with advanced search
                                filters.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ECF5FF] p-6'>
                    <div className='flex justify-start gap-4'>
                        <div>
                            <div className='bg-[#EE6611] p-2 text-white'>
                                <Home />
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl text-[#111827]'>Virtual Tours and
                                Multimedia</h3>
                            <p className='text-base font-medium'>Explore properties through
                                immersive virtual tours and HD
                                photos.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ECF5FF] p-6'>
                    <div className='flex justify-start gap-4'>
                        <div>
                            <div className='bg-[#EE6611] p-2 text-white'>
                                <Home />
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl text-[#111827]'>Secure Online
                                Transactions</h3>
                            <p className='text-base font-medium'>Ensure secure transactions and
                                e-sign documents seamlessly
                                online.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services