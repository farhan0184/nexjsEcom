import Image from 'next/image'
import React from 'react'

const Category = () => {
  return (
    <div className='my-10'>
    <div className='featuredWidth mx-auto flex justify-center flex-wrap gap-4 items-center py-10 px-[5px] bg-[#f2c2ad] rounded'> 

      <div className='flex flex-col gap-4 items-center justify-center'>
        <Image width={100} height={100} className='w-32' src="/image/Offer.webp"  alt='hello'/>
        <p className='text-sm'>Everyday Low Price </p>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
        <div>
        <Image width={100} height={100} className='w-32' src="/image/Offer.webp"  alt='hello'/>
        </div>
        <div>
        <p className='text-sm'>Everyday Low Price</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
        <Image width={100} height={100} className='w-32' src="/image/Offer.webp" alt='hello'/>
        <p className='text-sm'>Everyday Low Price</p>
      </div>

      <div  className='flex flex-col gap-4 items-center justify-center'>
        <Image width={100} height={100} className='w-32' src="/image/Offer.webp" alt='hello' />
        <p className='text-sm'>Everyday Low Price </p>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
        <Image width={100} height={100} className='w-32' src="/image/Offer.webp"  alt='hello'/>
        <p className='text-sm'>Everyday Low Price </p>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
        <Image width={100} height={100} className='w-32' src="/image/Offer.webp" alt='hello' />
        <p className='text-sm'>Everyday Low Price </p>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
        <Image width={100} height={100} className='w-32' src="/image/Offer.webp" alt='hello' />
        <p className='text-sm'>Everyday Low Price </p>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
        <Image width={100} height={100} className='w-32' src="/image/Offer.webp" alt='hello' />
        <p className='text-sm'>Everyday Low Price </p>
      </div>




    </div>
    </div>
  )
}

export default Category
