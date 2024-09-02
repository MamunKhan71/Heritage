import React from 'react'
import { Helmet } from "react-helmet";
import Hero from '../../components/Hero';
import FeaturedSection from './FeaturedSection';
import Services from './Services';
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
                <Services />
            </div>
        </div>
    )
}

export default HomePage