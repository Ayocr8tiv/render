import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CartDropDown from "./CartDropDown";



const Navbar = () => {

  const cart = useSelector((state) => state.cart.cartCount);
  console.log(cart);

  const cartItem = useSelector((state) => state.cart.cartItem);
  console.log(cartItem);

  const [dropdownOpen, setDropdownOpen] = useState(false);





  return (
    <div className='relative  flex  px-10 items-center space-x-[1150px] bg-slate-800 h-24 text-white'>
      <Link to={'/'}>
        <img src="./logo__3_-removebg-preview.png" alt="" />
      </Link>

      <div className=' flex gap-20'>

        <div className='relative flex items-center'>
          <button  onClick={() => setDropdownOpen(!dropdownOpen)} className="relative">
            <FaShoppingCart className='h-5 w-5' />

            <div className='absolute bottom-4 -right-6 flex items-center justify-center
             bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-2'>
              {cart}
            </div>
          </button>

          {dropdownOpen && <CartDropDown />}

        </div>


        <div>
          <button>Users</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar
