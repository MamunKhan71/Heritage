import React from 'react'
import { Helmet } from "react-helmet";
import Hero from '../../components/Hero';
import FirstSection from './FirstSection';
const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Heritage | Home</title>
            </Helmet>
            <div>
                <Hero />
                <FirstSection />
            </div>
        </div>
    )
}

export default HomePage