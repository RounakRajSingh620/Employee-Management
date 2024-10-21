import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='border-2 border-red-600'>
        <form className='flex flex-col items-center justify-center'>
          <input className='border-2 border-red-600' type="email" placeholder="Enter your mail" />
          <input className='border-2' type="password" placeholder="Enter your password" />
          <button className=''>LogIn</button>
        </form>
      </div>
    </div>
  )
}

export default Login;