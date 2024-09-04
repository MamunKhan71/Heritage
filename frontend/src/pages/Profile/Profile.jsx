import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";


const Profile = () => {
    const { logout, user } = useContext(AuthContext)
    const [property, setProperty] = useState([])
    useEffect(() => {
        axios.get(`https://heritage-blond.vercel.app/my-bids/${user?.uid}`)
            .then(res => setProperty(res.data))
    }, [user])
    return (
        <div className="w-full flex justify-center items-center h-screen px-4 lg:px-0">

            {
                location.state ? <Helmet>
                    <title>Heritage | Update Profile</title>
                </Helmet> : <Helmet>
                    <title>Heritage | Profile</title>
                </Helmet>
            }

            {
                user ? <>

                    <div className="p-12 sm:px-12 text-primary space-y-4 w-full">
                        <img src={user.photoURL ? user.photoURL : '/images/avatar.png'} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square ring ring-primary ring-offset-base-100 ring-offset-4" />
                        <div className="space-y-4 text-center divide-y divide-gray-700 text-primary">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{user.displayName ? user.displayName : ''}</h2>
                                <p className="px-5 text-xs sm:text-base">{user.email ? user.email : ''}</p>
                            </div>
                        </div>
                        {!location.state && <button onClick={logout} className="flex items-center justify-center w-full">
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary hover:bg-white group">
                                <span className="w-48 h-48 rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white inline-flex items-center gap-2">Logout</span>
                            </a>
                        </button>}
                        {
                            location.state && <div className="border border-gray-300 p-6 space-y-4">
                                <h1 className="text-center font-bold">Update Profile</h1>
                                <hr />
                                <form onSubmit={handleSubmit(profileUpdate)} className="space-y-4">
                                    <div className="flex gap-6">
                                        <div className="space-y-4">
                                            <div className="flex flex-col lg:flex-row gap-4">
                                                <div className="flex-1 flex flex-col gap-2 w-full">
                                                    <span className="label-text font-semibold text-primary">Name</span>
                                                    <input {...register('name')} type="text" defaultValue={user.displayName || 'Type Here'} className="input input-bordered input-accent w-full rounded-none" />
                                                </div>
                                                <div className="flex-1 flex flex-col gap-2">
                                                    <span className="label-text font-semibold text-primary">Photo Url</span>
                                                    <input {...register('photoUrl')} type="text" defaultValue={user.photoURL || "Type Here"} className="input input-bordered input-accent w-full rounded-none" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-center items-center">
                                        <button type="submit" className="flex items-center justify-center">
                                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#EB6753] hover:bg-white group">
                                                <span className="w-48 h-48 rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white inline-flex items-center gap-2">Update<TbArrowUpRight /></span>
                                            </a>
                                        </button>

                                    </div>
                                </form>
                            </div>
                        }
                        <h1 className="text-center font-bold text-2xl pt-12">Property Winning List</h1>
                        <hr />
                        <div className="overflow-x-auto w-full bg-[#F9FAFB] p-4 rounded-none border">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Bid Amount</th>
                                        <th>View Property</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        property?.map((prop, index) => (
                                            <tr>
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={prop.propertyDetails.mainImage}
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{prop?.propertyDetails.title}</div>
                                                            <div className="text-sm opacity-50">{prop?.propertyDetails.location}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {prop?.propertySummary?.type}
                                                </td>
                                                <td>
                                                    <span className="badge badge-ghost badge-md ">{(prop?.propertySummary?.status)}</span>

                                                </td>
                                                <th>
                                                    <p>$ {prop?.highestBid.bidAmount}</p>
                                                </th>
                                                <th>
                                                    <Link to={`/properties/${prop._id}`}><button className="btn bg-blue-300 btn-sm">View Property</button></Link>
                                                </th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </> : <>

                    <span className="loading loading-infinity loading-lg"></span></>
            }
        </div>
    );
};

export default Profile;