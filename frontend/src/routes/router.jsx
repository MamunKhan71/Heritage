import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import MainLayout from '../layouts/MainLayout';
import AllProperties from '../pages/PropertyListings/AllProperties';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/properties',
                element: <AllProperties />
            }
        ]
    },
]);

export default router