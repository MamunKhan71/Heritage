import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ArrowDownCircle, DollarSign, MapPinned, PinIcon, Search } from 'lucide-react'
import PopularProperties from '../../components/PopularProperties';
import Testimonials from '../../components/Testimonials';
const AllProperties = () => {
    return (
        <div>
            <div className={`bg-[url('header.jpg')] h-80 w-full relative`}>
                <div className='bg-white rounded-lg shadow-lg backdrop-blur-sm max-w-3xl w-full absolute top-1/2 left-1/2 -translate-x-1/2'>
                    <Tabs className={'p-6 font-medium text-[#4B5563]'}>
                        <TabList >
                            <Tab>Buy</Tab>
                            <Tab>Rent</Tab>
                            <Tab>PG</Tab>
                            <Tab>Plot</Tab>
                            <Tab>Commercial</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='space-y-4'>
                                <label className="input input-bordered rounded-none flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Search" />
                                </label>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    <div>
                                        <h3 className='inline-flex gap-2 items-center font-semibold'><MapPinned className='text-orange-500' /> Your Location</h3>
                                        <select className="select bg-[#ECF5FF] w-full max-w-xs rounded-none">
                                            <option disabled selected></option>
                                            <option>First</option>
                                            <option>Second</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3 className='inline-flex gap-2 items-center font-semibold'><PinIcon className='text-orange-500' /> Property Type</h3>
                                        <select className="select bg-[#ECF5FF] w-full max-w-xs rounded-none">
                                            <option disabled selected></option>
                                            <option>First</option>
                                            <option>Second</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3 className='inline-flex gap-2 items-center font-semibold'><DollarSign className='text-orange-500' /> Budget</h3>
                                        <select className="select bg-[#ECF5FF] w-full max-w-xs rounded-none">
                                            <option disabled selected></option>
                                            <option>First</option>
                                            <option>Second</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="btn w-full bg-[#0059B1] border-none rounded-none text-white"><Search />Find Property</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <label className="input input-bordered rounded-none flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                        </TabPanel>
                        <TabPanel>
                            <label className="input input-bordered rounded-none flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                        </TabPanel>
                        <TabPanel>
                            <label className="input input-bordered rounded-none flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                        </TabPanel>
                        <TabPanel>
                            <label className="input input-bordered rounded-none flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            {/* second section */}
            <div className='mt-48 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                <div className='bg-[#FDF0E7] p-2 lg:p-4 space-y-8'>
                    <div>
                        <h1 className='text-4xl font-bold text-[#EE6611]'>2k+</h1>
                        <p>New Flat Listed</p>
                    </div>
                    <span className='flex items-center gap-2 justify-between underline text-[#EE6611]'> View all <ArrowDownCircle /></span>
                </div>
                <div className='bg-[#ECF5FF] p-2 lg:p-4 space-y-8'>
                    <div>
                        <h1 className='text-4xl font-bold text-[#0051A1]'>2k+</h1>
                        <p>New Flat Listed</p>
                    </div>
                    <span className='flex items-center gap-2 justify-between underline text-[#0051A1]'> View all <ArrowDownCircle /></span>
                </div>
                <div className='bg-[#FDF0E7] p-2 lg:p-4 space-y-8'>
                    <div>
                        <h1 className='text-4xl font-bold text-[#EE6611]'>2k+</h1>
                        <p>New Flat Listed</p>
                    </div>
                    <span className='flex items-center gap-2 justify-between underline text-[#EE6611]'> View all <ArrowDownCircle /></span>
                </div>
                <div className='bg-[#ECF5FF] p-2 lg:p-4 space-y-8'>
                    <div>
                        <h1 className='text-4xl font-bold text-[#0051A1]'>2k+</h1>
                        <p>New Flat Listed</p>
                    </div>
                    <span className='flex items-center gap-2 justify-between underline text-[#0051A1]'> View all <ArrowDownCircle /></span>
                </div>
            </div>
            {/* second section end*/}
            <div className='mt-20'>
                <PopularProperties />
            </div>
            <div className='mt-20'>
                <Testimonials />
            </div>

        </div>
    )
}

export default AllProperties