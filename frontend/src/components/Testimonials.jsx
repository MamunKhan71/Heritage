import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Testimonials</h1>
            <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='text-center space-y-12 flex items-center flex-col p-12 bg-[#ECF5FF] justify-center'>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p className='max-w-lg'>"The level of security provided by CypherPIay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."</p>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-12 rounded-full' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452006/profile_odrxyq.png" alt="" />
                        <p className='font-bold text-lg'>Tony Stark</p>
                        <p className='text-[#6B7280] text-base'>Marketing Manager, XYZ</p>
                    </div>
                </div>
                <div className='text-center space-y-12 flex items-center flex-col p-6 bg-[#ECF5FF] justify-center'>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p className='max-w-lg'>"The level of security provided by CypherPIay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."</p>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-12 rounded-full' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452006/profile_odrxyq.png" alt="" />
                        <p className='font-bold text-lg'>Tony Stark</p>
                        <p className='text-[#6B7280] text-base'>Marketing Manager, XYZ</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonials