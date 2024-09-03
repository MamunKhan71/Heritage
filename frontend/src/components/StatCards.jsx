import { ArrowDownCircle } from 'lucide-react'
import React from 'react'

const StatCards = () => {
    return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='bg-[#FDF0E7] p-2 lg:p-4 space-y-8'>
                <div>
                    <h1 className='text-4xl font-bold text-[#EE6611]'>2k+</h1>
                    <p>New Flat Listed</p>
                </div>
                <span className='flex items-center gap-2 justify-between underline text-[#EE6611]'> View all <ArrowDownCircle /></span>
            </div>
            <div className='bg-[#ECF5FF] p-2 lg:p-4 space-y-8'>
                <div>
                    <h1 className='text-4xl font-bold text-[#0051A1]'>2k+</h1>
                    <p>New Flat Listed</p>
                </div>
                <span className='flex items-center gap-2 justify-between underline text-[#0051A1]'> View all <ArrowDownCircle /></span>
            </div>
            <div className='bg-[#FDF0E7] p-2 lg:p-4 space-y-8'>
                <div>
                    <h1 className='text-4xl font-bold text-[#EE6611]'>2k+</h1>
                    <p>New Flat Listed</p>
                </div>
                <span className='flex items-center gap-2 justify-between underline text-[#EE6611]'> View all <ArrowDownCircle /></span>
            </div>
            <div className='bg-[#ECF5FF] p-2 lg:p-4 space-y-8'>
                <div>
                    <h1 className='text-4xl font-bold text-[#0051A1]'>2k+</h1>
                    <p>New Flat Listed</p>
                </div>
                <span className='flex items-center gap-2 justify-between underline text-[#0051A1]'> View all <ArrowDownCircle /></span>
            </div>
        </div>
    )
}

export default StatCards