import React from 'react'
import logo from '../assets/open-book 1.png'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <Link to='/'>
            <img 
              src={logo} 
              alt='Open Book Logo' 
              className='h-12 w-12' 
            />
          </Link>
        </div>

        {/* Menu Section */}
        <div className='hidden md:flex items-center space-x-10'>
          <ul className='flex flex-row space-x-10'>
            <li>
              <Link 
                to='/ProductList' 
                className='text-gray-600 hover:text-blue-500 font-medium'
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to='/AboutUs' 
                className='text-gray-600 hover:text-blue-500 font-medium'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to='/HelpSec' 
                className='text-gray-600 hover:text-blue-500 font-medium'
              >
                Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Cart Section */}
        <Link to='/cart'>
          <img 
            src={cart} 
            alt='Cart Icon' 
            className='h-8 w-8' 
          />
        </Link>
        </div>
  )
}

export default Navbar
