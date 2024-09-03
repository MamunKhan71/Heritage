import { BathIcon, Battery, Bed, BedDouble, BlendIcon, DownloadCloud, GlassWater, House, ListFilter, Lock, LucideFullscreen, MapPin, ParkingCircle, ParkingCircleOff, PersonStanding, SchoolIcon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import Services from '../Home/Services'
import PopularProperties from '../../components/PopularProperties'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const PropertyDetails = () => {
    const { user } = useContext(AuthContext)
    const [property, setProperty] = useState([])
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/properties/${id}/reviews`)
            .then(res => {
                setReviews(res.data || []);
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:5000/properties/${id}`)
            .then(res => setProperty(res.data))
    }, [id])

    const handleReview = (event) => {
        event.preventDefault();
        const reviewData = {
            userId: user?.uid || null,
            propertyId: id,
            userName: user?.displayName || null,
            rating,
            text: reviewText
        };

        axios.post(`http://localhost:5000/properties/${id}/reviews`, reviewData)
            .then(res => {
                window.location.reload();
                setReviewText('');
                setRating(0);
            })
            .catch(error => console.error('Error submitting review:', error));
    };
    return (
        <div className='space-y-6'>
            <div>
                <div className='flex gap-6'>
                    <div>
                        <h1 className='font-bold text-xl'>{property?.propertyDetails?.title}</h1>
                        <p className='inline-flex items-center gap-2'><MapPin size={20} color='#EE6611' /> {property?.propertyDetails?.location}</p>
                    </div>
                    <p className='font-extrabold text-2xl'>$ {property?.propertyDetails?.price}</p>
                </div>
            </div>
            <hr />
            <div className='flex gap-4 w-full'>
                <div className='grid grid-cols-3 gap-4 flex-1'>
                    <div className='col-span-3'>
                        <img className='w-full h-96 object-cover' src={property?.propertyDetails?.mainImage} alt="" />
                    </div>
                    <div>
                        <img className='w-full h-40 object-cover' src={property?.propertyDetails?.mainImage} alt="" />
                    </div>
                    <div>
                        <img className='w-full h-40 object-cover' src={property?.propertyDetails?.mainImage} alt="" />
                    </div>
                    <div className='relative'>
                        <img className='w-full h-40 object-cover brightness-50' src={property?.propertyDetails?.mainImage} alt="" />
                        <h1 className='text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>View More</h1>
                    </div>
                </div>
                <div className='basis-96 bg-[#ECF5FF] p-4 space-y-4'>
                    <p>Property Value</p>
                    <p className='font-bold text-xl'>$ {property.propertyDetails?.valueRange?.min} -  {property.propertyDetails?.valueRange?.max} </p>
                    <p>Your bid can not be than 10% of the
                        property Minimum value.</p>
                    <div className='space-y-4'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Min</span>
                            </div>
                            <input type="text" placeholder={`$ ${property.propertyDetails?.valueRange?.min}`} className="input w-full rounded-none" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Max</span>
                            </div>
                            <input type="text" placeholder={`$ ${property.propertyDetails?.valueRange?.max}`} className="input w-full rounded-none" />
                        </label>
                        <div>
                            <input type="range" min={property.propertyDetails?.valueRange?.min} max={property.propertyDetails?.valueRange?.max} value={property.propertyDetails?.valueRange?.min} className="range" step="1000" />
                            <div className="flex w-full justify-between px-2 text-xs">
                                <span>$ {property.propertyDetails?.valueRange?.min}</span>
                                <span>$ {property.propertyDetails?.valueRange?.max}</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center '>
                        <button className="btn bg-[#0059B1] text-center border-none rounded-none text-white">Bid Property</button>
                    </div>
                </div>
            </div>
            {/* overview */}
            <div className='flex gap-4 w-full'>
                <div className='bg-[#F9FAFB] flex-1 space-y-8 p-6 rounded-lg border border-[#E5E7EB]'>
                    <h1 className='font-semibold text-lg'>Overview</h1>
                    <div className='grid grid-cols-4 gap-6 text-sm'>
                        {
                            property?.propertyDetails?.overview?.map(feature => <p className='flex gap-2 font-semibold'><Battery className='bg-white rounded-lg size-6' /> {feature}</p>)
                        }

                    </div>
                </div>
                <div classname="basis-96">
                    <iframe className='rounded-lg'
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d287816.5567377649!2d90.54702064143059!3d23.646852081912325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x3754646e5b59dfbf%3A0x62a2336bc506b0bd!2sChandina!3m2!1d23.489248099999998!2d91.00836369999999!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!3m2!1d23.804092999999998!2d90.4152376!5e1!3m2!1sen!2sbd!4v1725356521712!5m2!1sen!2sbd"
                        width={384}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
            {/* Reviews Section */}
            <div className='bg-[#F9FAFB] p-6 rounded-lg border border-[#E5E7EB] space-y-4'>
                <h1 className='font-semibold text-2xl text-center'>Reviews</h1>
                <div className='space-y-4 max-w-2xl mx-auto bg-white rounded-lg p-6 border'>
                    {/* Display existing reviews */}
                    <div className='max-h-96 overflow-y-scroll w-full'>
                        {reviews?.map((review, index) => (
                            <div key={index} className='border-b border-gray-300 pb-4 mb-4'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-semibold'>{review.userName}</span>
                                    <span className='text-yellow-500'>{'★'.repeat(review.rating)}</span>
                                </div>
                                <p>{review.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Review Form */}
                    <form onSubmit={handleReview} className='space-y-4 bg-[#F9FAFB] p-4 border rounded-lg'>
                        <div className='space-y-4'>
                            <h1 className='text-center font-bold text-lg'>Add Review</h1>
                            <hr />
                            <input type="range" min={1} max={5} value={rating} className="range" step={1} onChange={(e) => setRating(Number(e.target.value))} />
                            <div className="flex w-full justify-between px-2 text-xs">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Review</label>
                            <textarea
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                placeholder='Write your review here...'
                                className='textarea w-full p-3 rounded-lg border border-gray-300'
                            ></textarea>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <button type='submit' className='btn bg-[#0059B1] text-center border-none rounded-lg text-white'>
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Services />
            </div>

            <div>
                <PopularProperties />
            </div>
        </div>
    )
}

export default PropertyDetails