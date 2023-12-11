import React from 'react'
import 'swiper/css'
import './AddBanners.css'
import {useState,useEffect} from 'react'
import {addsData} from '../data/addImages'

import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
 import SlideNextButton from '../SlideNextButton/SlideNextButton'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/autoplay'


const AddBanners = () => {
  return  <div style={{margin:"30px 0"}} className='adSlideContainer'>
          <Swiper
  className='swiperRel'
  modules={[Navigation,Autoplay]}
  spaceBetween={5}
  slidesPerView={1}

  autoplay={{delay:2000}}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
>
<SlideNextButton/>
  <div className='adSlide'>{addsData.map((item,index)=>{
    return <SwiperSlide><div className='items'><img style={{height:"100%",width:"100%"}} src={item.src} alt="" /></div></SwiperSlide>
})}</div>
  
  
</Swiper>
  </div> 
}

export default AddBanners
