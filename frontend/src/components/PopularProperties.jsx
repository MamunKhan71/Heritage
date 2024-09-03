import { LocateIcon, MapPin, Square } from 'lucide-react'
import React from 'react'
import PropertyContainer from './PropertyContainer'

const PopularProperties = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-4xl font-bold'>Popular Properties</h1>
                <p className='underline text-[#0051A1] font-bold'>See all property</p>
            </div>
            <PropertyContainer />
        </div>
    )
}

export default PopularProperties