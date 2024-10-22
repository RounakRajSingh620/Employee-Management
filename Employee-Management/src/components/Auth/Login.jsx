import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form className='flex flex-col items-center justify-center'>
          <input className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type="email" placeholder="Enter your gmail" />
          <input className=' outline-none bg-transparent border-2 border-emerald-600 mt-3 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type="password" placeholder="Enter your password" />
          <button className='text-white border-none outline-none bg-emerald-600 mt-5 text-xl py-3 px-5 rounded-full placeholder:text-white '>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;