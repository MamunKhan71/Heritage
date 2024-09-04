import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex items-center justify-center flex-col gap-6'>
                <img src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452006/not_rlnqcg.webp" alt="" />
                <Link to={'/'} className='font-bold text-3xl text-center'>Go Home</Link>
            </div>
        </div>
    )
}

export default NotFoundPage