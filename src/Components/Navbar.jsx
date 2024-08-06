import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = false
  return (
    <div className='border shadow-md p-4 sticky top-0 z-50 bg-white'>
     <div className='flex justify-between items-center max-w-6xl mx-auto'>
     {/*logo*/}
        <div className='text-3xl font-bold'>Dev.Jobs</div>
       <ul className='flex gap-4 text-lg font-semibold'>
        <Link to='/'>
          <li>Home</li>
        </Link>

        <Link to='/jobs'>
        <li>Jobs</li>
        </Link>
       
       <Link to='/addJob'>
       <li>Add Jobs</li>
       </Link>
       </ul>

       {/* right */}

       <div className='flex gap-4 text-lg font-semibold'>
       {
        user ? <button>Logout</button> : (
            <>
               <Link to='/register'>
               <button>Register</button>
               </Link>
                
                <Link to='/login'>
                <button>Login</button>
                </Link>
            </>
        )
       }
       </div>
     </div>
    </div>
  )
}

export default Navbar