import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';



const Products = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
 
  const navigate = useNavigate();

  const filteredProducts = (price) => {
    if (!price){
      setProduct(filterProduct)
    }
    else{
      const result = filterProduct.filter((p) => p.price > price);
      setProduct(result);
    }
  }


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products?limit=15");
        const response = await data.json();
        setProduct(response)
        setFilterProduct(response)
      } catch (error) {
        console.log(error.message)


      }
    }
    fetchProduct();
  }, [])


  const searchedProducts = product.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()) );

  return (
    <div className='container mx-auto p-6 ' >

      <div>
        <input type="text"
          placeholder='Search products...'
          className='relative left-[500px] bottom-26 px-4  border py-2 rounded-md'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <select
        onChange={(e) => {
          filteredProducts(Number(e.target.value));
        }}

        className='relative left-[1050px] bottom-36 py-1 border rounded-md' name="" id="">
        <option value="">All price</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-6">

        {
          searchedProducts.map((p, index) => {
            console.log(p);
            return (
              <ProductCard key={index} product={p} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products



// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import ProductCard from '../components/ProductCard';


// const Products = () => {
//   const [product, setProduct] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const data = await fetch("https://fakestoreapi.com/products");
//         const response = await data.json();
//         setProduct(response)
//       } catch (error) {
//         console.log(error.message)


//       }
//     }
//     fetchProduct();
//   }, [])




//   return (
    
//     <div className='container mx-auto p-6 '>
      
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
//       {
//         product.map((p, index) => {
//           console.log(p);
//           return(
//             <ProductCard key={index} product={p} />

//           )
//         })
//       }
//       </div>
//     </div>
//   )
// }

// export default Products
