import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import MainLayout from '../layouts/MainLayout';
import AllProperties from '../pages/PropertyListings/AllProperties';
import PropertySearch from '../pages/PropertyListings/PropertySearch';
import PropertyDetails from '../pages/PropertyListings/PropertyDetails';

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
            },
            {
                path: '/property-details',
                element: <PropertyDetails />
            }
        ]
    },
]);

export default router