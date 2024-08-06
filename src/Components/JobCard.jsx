import React from 'react'
import { Link } from 'react-router-dom'

const JobCard = () => {
  return (
    <div className='bg-white rounded-xl border p-5'>
     <div className='pb-3'>
        <h1 className='text-gray-600 my-2'>Full-Time</h1>
        <h3 className='text-xl font-bold truncate'>
        Senior React Developer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
          adipiscing nec, ultricies sed, dolor.
         Cras elementum ultrices diam. Maecenas ligula massa</p>
         <p className='text-indigo-500 mt-5'>$70k-$80k</p>
     </div>

     <div className='border border-gray-100 mb-5'></div>

     <div className='flex justify-between items-center'>
        <p className='text-orange-700 mb-3'>
            Boston, MA
        </p>

        <Link to='/job/1'>
        <button
        className='bg-teal-600 text-white p-2 rounded-md'>
            Read More
        </button>
        </Link>
     </div>

    </div>
  )
}

export default JobCard
