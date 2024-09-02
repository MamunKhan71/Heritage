import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='container mx-auto font-primary'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout