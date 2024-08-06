import React from 'react'

const HomeCard = () => {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
      <div className='border rounded-xl shadow-md p-4 bg-gray-100 space-y-4'>
        <h1 className='text-2xl font-bold'>For Development</h1>
        <p>Browe job and start your career today</p>
        <button className='bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg 
        font-semibold'>Browse Jobs</button>
      </div>

      <div className='border rounded-xl shadow-md p-4 bg-indigo-100 space-y-4'>
        <h1 className='text-2xl font-bold'>For Emploreers</h1>
        <p>Browe job to find perfect developer for the role</p>
        <button className='bg-teal-800 hover:bg-teal-700 text-white p-2 rounded-lg 
        font-semibold'>Add Jobs</button>
      </div>

    </div>
  )
}

export default HomeCard
