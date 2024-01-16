import React from 'react'
import ProductHeader from '../ProductHeader/ProductHeader'
import JustComponent from '../JustComponent/JustComponent'

const Recent = () => {
  return (
    <div className='featuredWidth mx-auto'>

      <ProductHeader title={'Recent Added Products'} button={'Show All'}/>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
        <JustComponent title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'} totalRating={'280'}/>
      </div>

        <div className='flex justify-center items-center py-10'>
            <button className='bg-[#F95706] px-6 py-3 rounded text-white'>Show More</button>
        </div>


    </div>
  )
}

export default Recent
