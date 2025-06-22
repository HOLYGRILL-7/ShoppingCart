import React from 'react'
import backgroundImage from '../assets/bible1.jpg'
import { Search } from 'lucide-react'

const Home = () => {
  return (
    <div className='h-[42.4rem] flex flex-col items-center justify-center relative pt-16'>
      <div 
        className='absolute inset-0 bg-contain bg-center filter blur-sm z-0'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className='h-[33rem] w-full max-w-[70rem] bg-white/30 p-8 rounded-lg flex flex-col items-center justify-center relative z-10'>
        <h1 className='text-5xl font-bold mb-16 text-gray-600 text-center'>A book a day keeps ignorance away.</h1>
        <div className='relative w-full max-w-[45rem]'>
          <input
            type='search'
            className='w-full p-3 pr-12 border-2 border-white rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-500'
            placeholder='Search books...'
            aria-label='Search books'
          />
          <Search
            size={24}
            color='#121111'
            className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300'
            aria-hidden='true'
          />
        </div>
      </div>
    </div>
  )
}

export default Home