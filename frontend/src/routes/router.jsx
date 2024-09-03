import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import MainLayout from '../layouts/MainLayout';
import AllProperties from '../pages/PropertyListings/AllProperties';
import PropertySearch from '../pages/PropertyListings/PropertySearch';

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
            },
            {
                path: '/property-search',
                element: <PropertySearch />
            }
        ]
    },
]);

export default router