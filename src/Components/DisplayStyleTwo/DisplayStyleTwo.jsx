
import React from 'react'
import './DisplayStyleTwo.css'

import f1 from '../images/femaleclothings/female1.jpg'
import f2 from '../images/femaleclothings/female2.jpg'
import f3 from '../images/femaleclothings/female3.jpg'
import f4 from '../images/femaleclothings/female4.jpg'

import m1 from '../images/maleclothings/male1.jpg'
import m2 from '../images/maleclothings/male2.jpg'
import m3 from '../images/maleclothings/male3.jpg'
import digiMarketAd from '../images/advertisements/digitalMarketingAdd.jpg'

import {FaChevronCircleRight } from 'react-icons/fa'

const ProductGridOne = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div className='gridContainer'>
         <div className="title">
            <p>Top in Womens Fashion</p>
            <button><FaChevronCircleRight className='arrowIcon'/></button>
         </div>
         <div className="gridBox">
            <div className="imageContainer">
              <img src={f1} alt="" />
              <div className="titles">
                <p>Product Name</p>
                <p>Grab Or Gone</p>
              </div>
            </div>
            <div className="imageContainer">
              <img src={f2} alt="" />
              <div className="titles">
                <p>Product Name</p>
                <p>Grab Or Gone</p>
              </div>
            </div>
            <div className="imageContainer">
              <img src={f3} alt="" />
              <div className="titles">
                <p>Product Name</p>
                <p>Grab Or Gone</p>
              </div>
            </div>
            <div className="imageContainer">
              <img src={f4} alt="" />
              <div className="titles">
                <p>Product name</p>
                <p>Grab Or Gone</p>
              </div>
            </div>
         </div>
      
      </div>
      <div className="gridContainer" style={{display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
        <img src={digiMarketAd} alt="" style={{height:"100%",marginLeft:"100px"}}/>
      </div>
      <div className="gridContainer">
        <div className="title">
          <p>Recomended from Men</p>
          </div>
          <div className="gridBoxTwo">
          <div className="imageContainer one">
            <img src={m1} alt="" />
            <div className="titles">
              <p>Product Name</p>
              <p>Product Prize</p>
            </div>

          </div>
          <div className="imageContainer two">
            <img src={m2} alt="" />
            <div className="titles">
              <p>Product Name</p>
              <p>Product Prize</p>
            </div>

          </div>
          <div className="imageContainer three">
            <img src={m3} alt="" />
            <div className="titles">
              <p>Product Name</p>
              <p>Product Prize</p>
            </div>

          </div>
          </div>
          
        
      </div>
    </div>
    
  )
}

export default ProductGridOne
