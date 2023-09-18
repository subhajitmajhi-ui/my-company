import React from 'react'
import { Link } from 'react-router-dom'

const Nopage = () => {
  return <div class="flex justify-center items-center h-screen text-center">
      <div>
        <p className='mb-10'>No Page available for now</p>

        <Link className=' text-black underline font-bold' to={'/'}>Go to Home</Link>
      </div>
    </div>
}

export default Nopage;
