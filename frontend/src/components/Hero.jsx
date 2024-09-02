import React from 'react'

const Hero = () => {
    return (
        <div className="bg-[url('header.jpg')] bg-contain w-full h-auto lg:h-[580px] flex items-center justify-center text-white">
            <div className='text-center space-y-6'>
                <p className='max-w-2xl leading-[72px] text-6xl font-bold'>Your Portal to India's Exquisite Real Estate</p>
                <p>Seamlessly connecting you to the heartbeat of India's prime properties.</p>
                <button className="btn btn-wide">Find Property</button>
            </div>
        </div>
    )
}

export default Hero