import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ManageRentals = () => {
    const [myProperty, setMyProperty] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/my-properties?email=${user?.email}`)
                .then(res => setMyProperty(res.data))
        }
    }, [user])
    console.log(myProperty);
    return (
        <div className='space-y-12 mt-12'>
            <Helmet>
                <title>Heritage | Manage Rentals</title>
            </Helmet>
            <h1 className='font-bold text-xl text-center'>My Listed Properties</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Property Name</th>
                                <th>Property Price</th>
                                <th>Property Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myProperty?.map((prop, index) => (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{prop.propertyDetails?.title}</td>
                                        <td>{prop.propertyDetails?.price}</td>
                                        <td>{prop.propertySummary?.type}</td>
                                        <td><Link to={`/properties/${prop._id}`}><button className='btn btn-xs bg-blue-200'>View Property</button></Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageRentals