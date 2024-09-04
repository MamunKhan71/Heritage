import React from 'react'
import { Search } from 'lucide-react';
const Hero = () => {
    return (
        <div className="bg-[url('https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452007/header_tzskvx.jpg')] bg-contain bg-no-repeat w-full h-auto lg:h-[580px] flex items-center justify-center text-white">
            <div className='text-center space-y-6'>
                <p className='max-w-2xl leading-[72px] text-6xl font-bold'>Your Portal to India's Exquisite Real Estate</p>
                <p>Seamlessly connecting you to the heartbeat of India's prime properties.</p>
                <button className="btn btn-wide bg-[#0059B1] border-none rounded-none text-white"><Search />Find Property</button>
            </div>
        </div>
    )
}

export default Hero