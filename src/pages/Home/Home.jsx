import React from 'react'
import Category from '../../Components/category/Category'
import AddBanners from '../../Components/AddBanners/AddBanners'
import './Home.css'
import DisplayProducts from '../../Components/DisplayProducts/DisplayProducts'
import Descriptions from '../../Components/Descriptions/Descriptions'
const Home = () => {
  return (
    <div className='homeDiv'>
        <Category/>
        <AddBanners/>
        <DisplayProducts/>
        <Descriptions/>
    </div>
  )
}

export default Home
