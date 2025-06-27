import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Cart from './Components/Cart'
import ProductList from './Components/ProductList'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import HelpSec from './Components/HelpSec'
import Details from './Components/Details';
  

const App = () => {
  return (
    <div className='overflow-y-hidden'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/HelpSec" element={<HelpSec />} />
          <Route path="/product/:id" element={<Details />} />
          {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        </Routes>
      </BrowserRouter>
      
        
    </div>
  )
}

export default App
