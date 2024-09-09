import React from 'react'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center mt-500 '>
        <div className='mt-auto'>
           <img className='block w-50 mx-auto ' src="/a.jfif" alt="not found" />
           <h1 className='text-9xl font-bold text-center '>404</h1>
           <h4 className='text-3xl text-center'>page not found</h4>
           <a href="/"
           className=' py-2 px-4 rounded-lg  bg-gray-200 border mt-4 text-center block font-bold'>Back To Homepage</a>
        </div>
    </div>
  )
}

export default NotFound