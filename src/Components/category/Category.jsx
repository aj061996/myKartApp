import React from 'react'
import './Category.css'
import grocery from '../images/grocery.png';
import mobile from '../images/mobile.png';
import fashion from '../images/fashion.png';
import electronics from '../images/electronics.png';
import appliances from '../images/applinances.png';
import tv from '../images/tv.png';
import plane from '../images/plane.png';
import toys from '../images/toys.png';
import bike from '../images/bike.png';


import { RiArrowDropDownLine } from 'react-icons/ri'
import { CaretDown } from 'phosphor-react'


const Category = () => {
  return (
    <div className='categoryContainer'>
        <div className="productDiv">
            <div className="imageDiv"><img src={grocery} alt="" /></div>
            <p>Grocery</p>
        </div>
        <div className="productDiv">
             <div className="imageDiv"><img src={mobile} alt="" /></div>
             <p>Mobiles</p>
        </div>
        <div className="productDiv">
            <div className="imageDiv"><img src={fashion} alt="" /></div>
            <p>Fashion <span><RiArrowDropDownLine/></span></p>
        </div>
        <div className="productDiv">
            <div className="imageDiv"><img src={electronics} alt="" /></div>
            <p>Electronics <span><RiArrowDropDownLine/></span></p>
        </div>
        <div className="productDiv">
            <div className="imageDiv"><img src={appliances} alt="" /></div>
            <p>Home & Furniture <span><RiArrowDropDownLine/></span></p>
        </div>
        <div className="productDiv">
            <div className="imageDiv"><img src={tv} alt="" /></div>
            <p>Appliances</p>
        </div>
        <div className="productDiv">
            <div className="imageDiv"><img src={plane} alt="" /></div>
            <p>Travel</p>
        </div>
        <div className="productDiv">
            <div className="imageDiv"><img src={toys} alt="" /></div>
            <p>Beauty, Toys & More <span><RiArrowDropDownLine/></span></p>
        </div>
        <div className="productDiv">
            <div className="imageDiv"><img src={bike} alt="" /></div>
            <p>Two Wheelers <span><RiArrowDropDownLine/></span></p>
        </div>
           
        
        
      
    </div>
  )
}

export default Category
