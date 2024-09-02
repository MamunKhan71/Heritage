import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div className='container mx-auto font-primary'>
            <Navbar />
            <div className='space-y-48'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout