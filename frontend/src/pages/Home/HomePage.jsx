import React from 'react'
import { Helmet } from "react-helmet";
import Hero from '../../components/Hero';
const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Heritage | Home</title>
            </Helmet>
            <div>
                <Hero />
            </div>
        </div>
    )
}

export default HomePage