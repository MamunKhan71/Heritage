import { Search } from 'lucide-react'
import React from 'react'

const FeaturedSection = ({ isReversed }) => {
    return (
        <div className='p-16 w-full'>
            <div className={`flex w-full ${isReversed ? 'flex-row-reverse' : 'flex-row'} justify-between gap-12`}>
                <div className='relative flex-1 w-full justify-end'>
                    <img className='h-96 object-cover rounded-lg' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452006/firstSection_dqxbij.jpg" alt="" />
                    <img className='h-64 rounded-lg absolute -bottom-5 right-64' src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452006/secondSection_e2ommn.jpg" alt="" />
                    <svg
                        className='absolute top-28 right-[40%]'
                        height="72px"
                        width="72px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 58 58"
                        xmlSpace="preserve"
                        fill=""
                        stroke=""
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <circle style={{ fill: "#0059B1" }} cx={29} cy={29} r={29} />{" "}
                            <g>
                                {" "}
                                <polygon
                                    style={{ fill: "#FFFFFF" }}
                                    points="44,29 22,44 22,29.273 22,14 "
                                />{" "}
                                <path
                                    style={{ fill: "#FFFFFF" }}
                                    d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14 c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826 l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"
                                />{" "}
                            </g>{" "}
                        </g>
                    </svg>
                </div>
                <div className='flex-1 space-y-12 w-full'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <hr className='w-16 border-[#F06711] border-2' />
                            <p className='text-[#F06711] font-bold'>Property buying</p>
                        </div>
                        <h1 className='text-4xl leading-10 font-bold'>Efficient and Transparent
                            Home Buying Solutions</h1>
                    </div>
                    <p className='drop-shadow-md text-base'>It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.</p>
                    <button className="btn btn-wide bg-[#ECF5FF] border-none text-lg rounded-none text-[#0059B1]"><Search className='text-[#0059B1]' />Find Property</button>
                </div>


            </div>
        </div>
    )
}

export default FeaturedSection