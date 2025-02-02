import React from 'react'
import { Link } from 'react-router-dom'
Link

const SingleJob = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
    <div className='flex gap-10'>
      <div className=' basis-3/5'>
          <div className='p-6 rounded-lg shadow-md'>
            <h1 className='text-gray-500 mb-4'>Full-Type</h1>
            <h3 className='text-3xl font-bold mb-4'>Senior React Developer</h3>
            <p className='text-orange-700'>Boston, MA</p>
          </div>
          <div className='p-6 rounded-lg shadow-md mt-6'>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat?
          </p>
          <p className='text-indigo-800 text-lg font-bold mb-2'>$100k / year</p>
          </div>
      </div>

      <div className=' basis-2/5'>
      <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Company Info</h3>
                  <h2 className="text-2xl">job.company.name</h2>
                  <p className="my-2">job.company.description</p>
                  <hr className="my-4" />
                  <h3 className="text-xl">Contact Email:</h3>
                  <p className="my-2 bg-indigo-100 p-2 font-bold">job.company.contactEmail</p>
                  <h3 className="text-xl">Contact Phone:</h3>
                  <p className="my-2 bg-indigo-100 p-2 font-bold"> job.company.contactPhone</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                  
                  <Link to='/editJob'>
                  <button className="p-2 rounded-md text-white bg-indigo-500 mb-4 mr-4">
                      Edit Job
                  </button>
                  </Link>
                  <button className="p-2 rounded-md text-white bg-red-500">
                      Delete Job
                  </button>
              </div>
      </div>
    </div>
</div>
  )
}

export default SingleJob
