import React from 'react'
import Hero from './sections/hero'
import GuidedStatsUI from './sections/guideStat'
import ServiceWorker from './sections/services'
import Banner from './sections/banner'
import HowWorks from './sections/how-works'
import Review from './sections/review'
import Booking from './sections/booking'

const page = () => {
  return (
    <div>
        <Hero/>
        <GuidedStatsUI/>
        <HowWorks/>
        <ServiceWorker/>
        {/* <Banner/> */}
       <Review/>
       <Booking/>

    </div>
  )
}

export default page