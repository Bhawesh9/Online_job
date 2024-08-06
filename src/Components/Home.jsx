import React from 'react'
import Hero from './Hero'
import HomeCard from './HomeCard'
import Joblist from './Joblist'

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      <Hero/>
      <HomeCard/>

      <div className='my-10'>
        <h1 className='text-2xl font-semibold mb-4'>Latest Jobs</h1>
        <Joblist/>
      </div>
    </div>
  )
}

export default Home
