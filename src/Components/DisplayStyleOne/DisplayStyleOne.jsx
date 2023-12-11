import React from 'react'
import {useState} from 'react'
import './DisplayStyleOne.css'
import { FaChevronCircleRight } from 'react-icons/fa'
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from  'react-icons/md'
import travelPoster from '../images/advertisements/airticket.jpg'


const ProductStylingOneAdd = ({productsArray,advertisement,isAdTrue}) => {

    const [whichside,setSide] = useState("left")


  return (
    <div className='productSlider'>
        <div className='slide' style={{width:`${isAdTrue?"85%":"100%"}`}} >
        <div className="titleAndIcon">
            <h2>Best Mobiles</h2>
            <button className='btn'><FaChevronCircleRight className='rightArrow'/></button>
        
        </div>
        <div className={`train`} style={{left:`${whichside==="left"?"0":`${isAdTrue?'-34%':'-14%'}`}`}} >
             {productsArray.map((product,index)=>{
                  return <div className='productContainer'>
                              <div className="productBox"><img src={product.image} alt="img" /></div>
                               <div style={{textAlign:"center"}} >
                                   <p style={{width:"180"}}>{product.name}</p>
                                   <p style={{fontWeight:"bold",color:"black",fontSize:"14px"}}>incl of offers</p>
                               </div>
                         </div>
                             })}
        </div>
        
            <button className={`arrowsLeftRight arrowLeft ${whichside==="left"?'hideArrow':''}`} onClick={()=>setSide("left")}><MdKeyboardArrowLeft/></button>
            <button className={`arrowsLeftRight arrowRight ${whichside==="right"?'hideArrow':''}`} onClick={()=>setSide("right")}><MdKeyboardArrowRight/></button>
        
    </div>
    <div>{isAdTrue?<div className='advertisement'><img src={advertisement} alt="" /></div>:<></>}</div>
    </div>
  )
}

export default ProductStylingOneAdd
