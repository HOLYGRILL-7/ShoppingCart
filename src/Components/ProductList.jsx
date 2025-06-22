import React from 'react'
import { Link } from 'react-router-dom'
import bible from '../assets/bible1.jpg'
import bible1 from '../assets/bible2.jpg'
import bible2 from '../assets/bookOfJohn.jpg'
import study from '../assets/personBibleStudy.jpg'
import personaldevotion from '../assets/personalDevotion.jpg'
import newCreation from '../assets/newCreationRealities.jpg'



const ProductList = () => {
  // Expanded sample product data
  const products = [
    { id: 1, name: 'Holy Bible (KJV)', price: '$9.99', image: bible },
    { id: 2, name: 'Daily Devotional', price: '$14.99', image: bible1 }, // Placeholder; replace image
    { id: 3, name: 'Study Bible (NIV)', price: '$19.99', image: bible2 },
    { id: 4, name: 'Prayer Book', price: '$7.99', image: study },
    { id: 5, name: 'Bible Atlas', price: '$12.99', image: personaldevotion },
    { id: 6, name: 'Children\'s Bible', price: '$8.99', image: newCreation },
    { id: 7, name: 'Bible Commentary', price: '$15.99', image: bible },
    { id: 8, name: 'Christian Fiction Novel', price: '$10.99', image: bible1 },
    { id: 9, name: 'Inspirational Quotes Book', price: '$6.99', image: bible2 },
    { id: 10, name: 'Bible Study Guide', price: '$11.99', image: bible },
  ]

  return (
    <div className='min-h-screen bg-gray-100 pt-5'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8'>All Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
              aria-label={`View details for ${product.name}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-lg font-medium text-gray-600 mb-2'>{product.name}</h3>
              <p className='text-gray-900 font-bold'>{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList