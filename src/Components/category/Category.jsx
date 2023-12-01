import React from 'react'
import './Category.css'

import {CATEGORY} from '../data/topCategory'

import { RiArrowDropDownLine } from 'react-icons/ri'


const Category = () => {
  return (
    <div className='categoryContainer'>
        {CATEGORY.map((each,index)=>{
            return <div className='productDiv'>
                <div className="imageDiv"><img src={each.image} alt="" /></div>
                <p>{each.title} <span>{each.menu?<RiArrowDropDownLine/>:null}</span></p>
            </div>
})}
    </div>
  )
}

export default Category
