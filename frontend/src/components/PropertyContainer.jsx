import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
const PropertyContainer = ({ id, title, image, type, status, location, price }) => {
    return (
        <Link to={`/properties/${id}`}>
            <div className="card card-compact rounded-none bg-[#F9FAFB]">
                <figure>
                    <img
                        className='h-72 w-full object-cover'
                        src={`${image}`}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center w-full'>
                        <button className='btn btn-xs rounded-none text-black bg-[#C5E2FF]'>{type}</button>
                        <p className='font-semibold w-full text-right'>🟨 {status}</p>
                    </div>
                    <hr />
                    <h2 className="card-title">{title}</h2>
                    <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> {location}</p>
                    <p className='font-bold text-2xl'>$ {price}</p>
                </div>
            </div>
        </Link>
    )
}

export default PropertyContainer