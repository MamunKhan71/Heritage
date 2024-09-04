import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ArrowDownCircle, DollarSign, MapPinned, PinIcon, Search } from 'lucide-react'
import PopularProperties from '../../components/PopularProperties';
import Testimonials from '../../components/Testimonials';
import StatCards from '../../components/StatCards';
import PropertySearchBox from '../../components/PropertySearchBox';
const AllProperties = () => {
    return (
        <div>
            <div className={`bg-[url('https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725452007/header_tzskvx.jpg')] h-80 w-full relative`}>
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
                            <PropertySearchBox category={'Buy'} />
                        </TabPanel>
                        <TabPanel>
                            <PropertySearchBox category={'Rent'} />
                        </TabPanel>
                        <TabPanel>
                            <PropertySearchBox category={'PG'} />
                        </TabPanel>
                        <TabPanel>
                            <PropertySearchBox category={'Plot'} />
                        </TabPanel>
                        <TabPanel>
                            <PropertySearchBox category={'Commercial'} />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            {/* second section */}
            <div className='mt-48'>
                <StatCards />
            </div>
            {/* second section end*/}
            <div className='mt-20'>
                <PopularProperties title={"Popular Properties"} />
            </div>
            <div className='mt-20'>
                <PopularProperties title={"New Listed Properties"} />
            </div>
            <div className='mt-20 w-full'>
                <Testimonials />
            </div>
        </div>
    )
}

export default AllProperties