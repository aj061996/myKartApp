import React from 'react'
import './DisplayProducts.css'
import {SMARTPHONELISTDEMO} from '../data/mobileJSON'
import { ELECTRONICS_SAMPLE } from '../data/electronicsJSON'
import {FaChevronCircleRight } from 'react-icons/fa'
import travelAdPoster from '../images/advertisements/airticket.jpg'
import { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight  } from 'react-icons/md'
import ProductGridOne from '../DisplayStyleTwo/DisplayStyleTwo'
import DisplayStyleOne from '../DisplayStyleOne/DisplayStyleOne'


const DisplayProducts = () => {
    const [side,setSide] = useState({phoneSide:"left",electroSide:"left"})
    
  return (
    <div className='productsContainer'>
      
      <DisplayStyleOne productsArray={SMARTPHONELISTDEMO} advertisement={travelAdPoster} isAdTrue={true}/>
      <DisplayStyleOne productsArray={ELECTRONICS_SAMPLE} isAdTrue={false}/>
    <div><ProductGridOne/></div>
    <div></div>
    </div>
    
    
  )
}

export default DisplayProducts
