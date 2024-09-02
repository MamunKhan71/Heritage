import React from 'react'
import { Helmet } from "react-helmet";
import Hero from '../../components/Hero';
import FeaturedSection from './FeaturedSection';
const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Heritage | Home</title>
            </Helmet>
            <div>
                <Hero />
                <FeaturedSection isReversed={false} />
                <FeaturedSection isReversed={true} />
                <FeaturedSection isReversed={false} />
            </div>
        </div>
    )
}

export default HomePage