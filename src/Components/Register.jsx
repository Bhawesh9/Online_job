import React from 'react'

const Register = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center px-4'>
      <div className='border shadow-md p-4 rounded-xl max-w-lg w-full'>
       <h1 className='text-teal-500 text-4xl font-bold text-center'>Register</h1>
       <form className='space-y-3'>
        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' id='username'/>
        </div>
        <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email'/>
        </div>
        <div>
        <label htmlFor=''>password</label>
        <input type='password' name='password' id='pasword'/>
        </div>
        <button className='bg-teal-400 text-white p-2 w-fullrounded-md'>Register</button>
       </form>
      </div>
    </div>
  )
}

export default Register
