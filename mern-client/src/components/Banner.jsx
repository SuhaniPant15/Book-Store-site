import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-yellow-100 flex item-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading snug text-black'>Buy and Sell Your Books<span className='text-red-700'> for Best Prices</span></h2>
                <p className='md:w-4/5'>Discover a vast collection of new and used books at unbeatable prices. Whether you're looking to buy your next read or sell your old books, our platform offers a seamless and secure experience. Join our community of book lovers and start saving today!</p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search a book' className = 'py-2 px-2 rounded-5-sm outline-none'/>
                    <button className='bg-red-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
        
            {/* right side */}
            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner