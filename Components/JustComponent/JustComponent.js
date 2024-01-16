import Image from 'next/image'
import React from 'react'

const JustComponent = ({title, price, priceOne, totalRating, discount}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><Image width={300} height={500} src="/image/product.webp" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title text-[14px]">{title}</h2>
      <div className="flex justify-center ">
          {
  
      <p className="ml-4"> ${price}</p>
          }
      <p>${priceOne}</p>
      </div>
  
      <div className='flex gap-4 py-2'>
      
      <div className="rating">
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star"  />
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star" />
    <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  </div>
  
      <div>
  
      <h2>{totalRating}</h2>
      </div>
  
      </div>
  
      <h2 className="absolute bottom-44 md:bottom-60 lg:bottom-56 left-1 bg-[#F95706] px-1 py-1 rounded-full text-white text-sm">{discount}</h2>
     
  
    </div>
  </div>
  )
}

export default JustComponent
