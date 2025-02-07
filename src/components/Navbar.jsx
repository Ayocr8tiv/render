import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className=' flex  px-10 items-center space-x-[1150px] bg-slate-800 h-24 text-white'>
      <Link to={'/'}>
        <img src="./logo__3_-removebg-preview.png" alt="" />
      </Link>

      <div className=' flex gap-20'>

        <div>
        <FaShoppingCart className='h-5 w-5'/>
        
        </div>

        <div>
          <button>Users</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar
