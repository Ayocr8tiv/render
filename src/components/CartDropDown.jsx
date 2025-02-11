import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const CartDropDown = () => {
    const cartItems = useSelector((state) => state.cart.cartItem);

    console.log("Cart Items:", cartItems);

    return (
        <div className="relative right-0 top-10 w-64 bg-white border shadow-lg rounded-lg p-4 text-black">
            <h3 className="font-semibold text-lg">Cart Items</h3>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">cart </p>
            ) : (
                
                <div className="max-h-64 overflow-y-auto">
                    <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="flex justify-between py-2 border-b">
                            <span>{item?.title || "No Name"}</span>
                            <span className="text-sm font-semibold">${item?.price || "0.00"}</span>
                        </li>


                    ))}


                </ul>
                </div>



            )}

            <Link to="/checkout" className="block mt-4 bg-blue-500 text-white py-2 text-center rounded-md">
                Check out
            </Link>



        </div>
    );
};

export default CartDropDown;