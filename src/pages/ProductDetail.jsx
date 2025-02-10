import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { addToCart } from "../redux/slices/CartSlices";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]);

  if (loading) return <p>Loading product detail...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY


  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: product.price,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070**',
      name: 'john doe',
    },
    customizations: {
      title: 'Avery',
      description: product.description,
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Order now!',
    callback: (response) => {
      console.log(response);
      closePaymentModal()
    },
    onClose: () => { },
  };

  return (
    <div className="w-full px-6 flex rounded-2xl gap-20">


      <div>
        <img src={product.image} alt={product.title} width="200" className="w-[600px] rounded-xl " />
      </div>

      <div className="relative top-16">

        <h2 className="text-2xl font-bold text-gray-800 w-[500px] mb-8">{product.title}</h2>

        <p className="text-lg text-gray-600 mt-2 w-[750px] mb-8"><strong>Description:</strong> {product.description}</p>

        <p className="text-gray-800 mt-4 font-bold"><strong>Price:</strong> ${product.price}</p>
        <FlutterWaveButton className="mt-6 bg-red-600 text-white py-3 px-4 w-40 rounded-xl hover:bg-red-700 transition duration-300" {...fwConfig} />

        <div>
          <button onClick={() => { dispatch(addToCart(product)) }} className="mt-6 border text-gray-800 py-3 px-4 h-12 rounded-xl
           hover:border-red-500 transition duration-300 relative bottom-18 left-48">Add to Cart</button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
