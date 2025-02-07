import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import AddProduct from './components/AddProduct'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import "./App.css"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<MainLayout />}>
            <Route index path='/' element={<Home />} />
            <Route path='/product' element={<Products />}/>
              <Route path='product/:id' element={<ProductDetail />} />
              <Route path='add-product' element={<AddProduct />} />
            </Route>
         
        </Routes>
       
      </Router>
    </>
  )
}

export default App
