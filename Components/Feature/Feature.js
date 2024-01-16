import React from 'react'
import { AiOutlineSafety } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturn } from "react-icons/pi";
import { FaTag } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { MdVerified } from "react-icons/md";

const Feature = () => {
  return (
    <div className='hidden lg:block'>
    <div className='flex justify-center items-center gap-6 py-10 bg-[#f2c2ad] rounded featuredWidth mx-auto px-6 '>
      <div className='flex items-center gap-3'>
        <span className='text-3xl text-[#F95706]'><AiOutlineSafety/></span>
        <h2 className=' text-lg font-medium'>Safe Payment</h2>
      </div>

      <div className='flex items-center gap-3'>
        <span className='text-3xl text-[#F95706]'><TbTruckDelivery/></span>
        <h2 className='text-lg font-medium'>Nationwide Delivery</h2>
      </div>

      <div className='flex items-center gap-3'>
        <span className='text-3xl text-[#F95706]'><PiKeyReturn/></span>
        <h2 className=' text-lg font-medium'>Free & Easy Returns</h2>
      </div>

      <div className='flex items-center gap-3'>
        <span className='text-3xl text-[#F95706]'><FaTag/></span>
        <h2 className=' text-lg font-medium'>Best Price Guaranteed

</h2>
      </div>

      <div className='flex items-center gap-3'>
        <span className='text-3xl text-[#F95706]'><MdVerified/></span>
        <h2 className=' text-lg font-medium'>100% Authentic Products</h2>
      </div>

      <div className='flex items-center gap-3'>
        <span className='text-3xl text-[#F95706]'><MdVerifiedUser/></span>
        <h2 className=' text-lg font-medium'>Darkak Verified</h2>
      </div>

    </div>
    </div>
  )
}

export default Feature
