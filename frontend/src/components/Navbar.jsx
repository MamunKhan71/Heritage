import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navLinks = <>
        <li><Link to={'#'}>Buy</Link></li>
        <li><Link to={'#'}>Sell</Link></li>
        <li><Link to={'#'}>Services</Link></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="">
                    <img className='h-20' src="logo.png" alt="" />
                </a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><Link to={"#"}>Manage Rentals</Link></li>
                    <li><Link className='font-medium' to={"#"}>Sign In</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar