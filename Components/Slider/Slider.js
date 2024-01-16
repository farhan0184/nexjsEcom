"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import "./styles.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
  return (
    <div className='z-0'>
      <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide>
          <div>

          <Image width={500} height={500}  className='w-full h-full object-cover' src='/image/photo-1.webp' alt='slider image' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>

          <Image width={500} height={500} className='w-full h-full object-cover' src='/image/photo-2.webp' alt='slider image'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>

          <Image width={500} height={500} className='w-full h-full object-cover' src='/image/photo-3.webp' alt='slider image' />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Slider
