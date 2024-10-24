import React, { useState } from 'react'
// import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => { 
    e.preventDefault()
    console.log("heloo guys,form submitted")
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col items-center justify-center'>
          <input value={email} onChange={
            (e) => {
              console.log(e.target.value)
            }
          } required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type="email" placeholder="Enter your gmail" />
          <input required className=' outline-none bg-transparent border-2 border-emerald-600 mt-3 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type="password" placeholder="Enter your password" />
          <button className='text-white border-none outline-none bg-emerald-600 mt-5 text-xl py-3 px-5 rounded-full placeholder:text-white '>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;