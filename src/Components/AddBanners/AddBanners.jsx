import React from 'react'
import './AddBanners.css'
import {useState,useEffect} from 'react'
import {addsData} from '../data/addImages'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight  } from 'react-icons/md'

const AddBanners = () => {
 
  const [slide, setSlide] = useState(0)
 
  
  let prevAd = ()=>{
    
    if(slide!==0){
      setSlide(slide-1)
    }else{
      setSlide(addsData.length-1)
    }    
  }
  let nextAd = ()=>{
    if(slide!==addsData.length-1){
    setSlide(slide+1)
    }else{
      setSlide(0)
    }

  }
  useEffect(()=>{
    const interval = setInterval(()=>{
      


    },2000)
    

  },[])
  return (
    <div className='addContainer'>
      {addsData.map((ad,index)=>{
        return <img src={ad.src} alt={ad.alt} key={index} className={`adImage`} style={{transform:`translateX(${-100*slide}%)`}} />
})}
      
    <div className='btnContainer'>
      <button className='indiArrow leftArrow' onClick={prevAd}><MdKeyboardArrowLeft /></button>
      <button className='indiArrow rightArrow'><MdKeyboardArrowRight onClick={nextAd} /></button>
    </div>
    <div className="indicators">
      {addsData.map((ad,index)=>{
         return <button className='indicator' onClick={()=>setSlide(index)} style={{backgroundColor:`${index===slide?'rgb(110, 152, 250)':'white'}`,width:`${index===slide&&'9px'}`,height:`${index===slide&&'9px'}`}}></button>
         
})}
    </div>

    </div>
  )
  
      
      
    
    
  
}

export default AddBanners
