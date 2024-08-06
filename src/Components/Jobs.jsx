import React from 'react'
import Joblist from './Joblist'

const Jobs = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
     <div className='space-y-2'>
        <label htmlFor='type'>Filter By Type</label>
        <select>
            <optiom value="Full-Time">Full-Time</optiom>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value='ALl Types'>All Types</option>
        </select>
     </div>

     <div className='border mt-4 '></div> 
     <div className='mt-6'>
        <Joblist/>
     </div>
    </div>
  )
}

export default Jobs
