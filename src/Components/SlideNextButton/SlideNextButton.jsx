import React from 'react'
import './SlideNextButton.css'
import { useSwiper } from 'swiper/react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight  } from 'react-icons/md'

const SlideNextButton = () => {
    const swiper = useSwiper()
  return (
    <div className='buttonsContainer'>
        <button className='leftBtn' onClick={()=>swiper.slidePrev()}><MdKeyboardArrowLeft/></button>
        <button className='rightBtn' onClick={()=>swiper.slideNext()}><MdKeyboardArrowRight/></button>
      
    </div>
  )
}

export default SlideNextButton
