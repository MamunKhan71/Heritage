import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const navLinks = <>
        <li><Link to={'/properties'}>Buy</Link></li>
        <li><Link to={'/property-upload'}>Sell</Link></li>
        <li><Link to={'/all-properties'}>Services</Link></li>
        <li><Link to={'/about'}>About</Link></li>
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
                    <img className='h-20' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452005/logo_gxl8gk.png" alt="" />
                </a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><Link to={"/manage-rentals"}>Manage Rentals</Link></li>
                    {user ? <>
                        <div className="dropdown dropdown-end">
                            <div data-tip={user.displayName} tabIndex={0} role="button" className="avatar tooltip tooltip-bottom">
                                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-primary text-white text-lg w-52">
                                <li><Link to={'/profile'}>Profile</Link></li>
                                <li><button className="" onClick={() => document.getElementById('my_modal_1').showModal()}>Logout</button></li>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box w-auto rounded-none">
                                        <h3 className="font-bold text-lg text-primary">Are you sure want to logout?</h3>
                                        <div className="modal-action justify-center">
                                            <form method="dialog">
                                                <div className="flex gap-4">
                                                    <button className="btn rounded-none bg-primary text-white" onClick={() => {
                                                        logout()
                                                            .then(navigate('/'))
                                                    }}>Logout</button>
                                                    <button className="btn rounded-none">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </ul>
                        </div>
                    </>
                        :
                        <li><Link className='font-medium' to={"/register"}>Sign In</Link></li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar