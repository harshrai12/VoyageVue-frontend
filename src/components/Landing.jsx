import React, { useState } from 'react'

import Register from './Register'
import Login from './Login'




function Landing({setUser}) {
  const [open, setOpen] = useState(false)
  const [openl, setOpenl] = useState(false)
  
  return (
    
    <div className='w-full h-screen flex justify-center items-center'
    >
      <div className="flex-col ">
      <h1 className='text-white text-7xl font-poppins fade-in'>VoyageVue|</h1>
      <p className='text-gray-200 flex items-center justify-center my-8 '>Discover, Document, Share!</p>
      <div className="flex justify-center gap-20 mt-10">
      <button className='text-white border-solid border-2 rounded-lg px-8 py-2 hover:bg-violet-500 
      ' onClick={()=>setOpen(!open)}>Register</button>
      <button className='text-white border-solid border-2 rounded-lg px-8 py-2 hover:bg-violet-500 ' onClick={()=>setOpenl(!openl)}>Log In</button>
      </div>
      <Register open={open} setOpen={setOpen} />
      <Login openl={openl} setOpenl={setOpenl} setUser={setUser} />
      </div>
     
    </div>
  )
}

export default Landing
