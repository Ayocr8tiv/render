import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <>
          <Link to={`/product/${product.id}`}  className="bg-white shadow-md rounded-lg overflow-hidden p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">



        <div>
          <img className='h-40  px-20 rounded-md' src={product.image} alt="" />
        </div>

        <div className="mt-3">
          <h2 className="text-lg font-mono my-6">{product.category}</h2>
          <h2 className="text-gray-600 text-md font-bold mb-6">{product.title}</h2>
          <p className="text-xl font-semibold mt-2 text-green-600 mb-5">${product.price}</p>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="mt-4 block text-center bg-slate-700 text-white py-3 rounded-xl h-12  hover:bg-slate-600 transition"
        >
          View More Details
        </Link>

      </Link>
    </>
  );
};

export default ProductCard;


// import React from 'react'
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   return (
//     <>
//       <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">

//         <img src={product.image} alt={product.name} className=" h-40  px-20 rounded-md" />


//         <div className="mt-3">
//           <h2 className="text-lg font-bold">{product.name}</h2>
//           <p className="text-gray-600 text-sm">{product.category}</p>
//           <p className="text-xl font-semibold mt-2 text-green-600">${product.price}</p>
//         </div>


//         <Link
//           to={`/product/${product.id}`}
//           className="mt-3 block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           View More Details
//         </Link>
//       </div>
//     </>
//   )
// }

// export default ProductCard
