import { LocateIcon, MapPin, Square } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import PropertyContainer from './PropertyContainer'
import axios from 'axios'

const PopularProperties = ({ title }) => {
    const [property, setProperty] = useState([])
    useEffect(() => {
        axios.get('https://heritage-blond.vercel.app/properties')
            .then(res => setProperty(res.data))
    }, [])
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='underline text-[#0051A1] font-bold'>See all property</p>
            </div>
            <div className='mt-12 grid grid-cols-3 gap-4 w-full'>
                {
                    property.map(prop => <PropertyContainer id={prop._id} title={prop.propertyDetails.title} price={prop.propertyDetails.price} image={prop.propertyDetails.mainImage} location={prop.propertyDetails.location} status={prop.propertySummary?.status} type={prop.propertySummary.type} />)
                }
            </div>
        </div>
    )
}

export default PopularProperties