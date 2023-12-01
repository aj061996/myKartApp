import React from 'react'
import Category from '../../Components/category/Category'
import AddBanners from '../../Components/AddBanners/AddBanners'
import './Home.css'
const Home = () => {
  return (
    <div className='homeDiv'>
        <Category/>
        <AddBanners/>
      
    </div>
  )
}

export default Home
