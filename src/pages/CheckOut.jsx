import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const CheckOut = () => {
    const cartItems = useSelector((state) => state.cart.cartItem);

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);


    const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const config = {
        public_key: FLUTTER_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: totalPrice,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: "user@gmail.com",
            phone_number: "070**",
            name: "john doe",
        },
        customizations: {
            title: "My store",
            description: "Payment for items in cart",
            logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
    };

    const fwConfig = {
        ...config,
        text: "Place Order",
        callback: (response) => {
            console.log(response);
            closePaymentModal();
        },
        onClose: () => { },
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="divide-y divide-gray-300">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center py-4">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                                        <p className="text-sm text-gray-500">Quantity: {item.quantity || 1}</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-lg">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-xl font-semibold flex justify-between">
                            <span>Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </h3>
                    </div>





                    <FlutterWaveButton
                        className="w-full bg-blue-500 text-white py-3 mt-6 rounded-md text-lg font-semibold hover:bg-blue-600"
                        {...fwConfig}
                    />

                    <Link to="/product" className="block text-center text-gray-600 mt-4 hover:underline">
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CheckOut;
