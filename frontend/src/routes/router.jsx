import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import MainLayout from '../layouts/MainLayout';
import AllProperties from '../pages/PropertyListings/AllProperties';
import PropertySearch from '../pages/PropertyListings/PropertySearch';
import PropertyDetails from '../pages/PropertyListings/PropertyDetails';
import AboutPage from '../pages/About/AboutPage';
import Register from '../pages/Authentication/Register';
import Login from '../pages/Authentication/Login';
import PropertyUpload from '../pages/PropertyListings/PropertyUpload';
import Profile from '../pages/Profile/Profile';
import NotFoundPage from '../NotFound/NotFoundPage';
import PropertiesAll from '../Properties/Properties';
import ManageRentals from '../pages/ManageRentals/ManageRentals';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
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
                path: '/properties/:id',
                element: <PropertyDetails />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/property-upload',
                element: <PropertyUpload />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/all-properties',
                element: <PropertiesAll />
            },
            {
                path: '/manage-rentals',
                element: <ManageRentals />
            }

        ]
    },
]);

export default router