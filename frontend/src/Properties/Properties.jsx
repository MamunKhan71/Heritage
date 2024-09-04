import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PropertyContainer from '../components/PropertyContainer'
import { Helmet } from 'react-helmet'

const PropertiesAll = () => {
    const [property, setProperty] = useState([])
    useEffect(() => {
        axios.get('https://heritage-blond.vercel.app/properties')
            .then(res => setProperty(res.data))
    }, [])
    return (
        <div className='mt-12 space-y-12'>
            <Helmet>
                <title>Heritage | Properties</title>
            </Helmet>
            <h1 className='text-center font-bold text-3xl'>Properties</h1>
            <hr />
            <div className='mt-12 grid grid-cols-3 gap-4 w-full'>
                {
                    property.map(prop => <PropertyContainer id={prop._id} title={prop.propertyDetails.title} price={prop.propertyDetails.price} image={prop.propertyDetails.mainImage} location={prop.propertyDetails.location} status={prop.propertySummary?.status} type={prop.propertySummary.type} />)
                }
            </div>
        </div>
    )
}

export default PropertiesAll