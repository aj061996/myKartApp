import React from 'react'
import './MyKartMenu.css'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import {  FaRegHeart } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { LuPackageCheck }  from 'react-icons/lu'
import { IoPricetagOutline , IoNotificationsOutline}  from 'react-icons/io5'
import { TbGiftCard } from 'react-icons/tb'
import { MdOutlineLogout  } from 'react-icons/md'

const MyKartMenu = () => {
  return (
    <div className='menuContainer'>
        <div>
            <CgProfile/>
            <p>My Profile</p>
        </div>
        <div>
            <AiOutlineThunderbolt/>
            <p>SuperCoin Zone</p>
        </div>
        <div>
            <FiPlus/>
            <p>Mykart Plus Zone</p>
        </div>
        <div>
            <LuPackageCheck/>
            <p>Orders</p>
        </div>
        <div>
            <FaRegHeart/>
            <p>Wishlist</p>
        </div>
        <div>
            <IoPricetagOutline/>
            <p>Coupons</p>
        </div>
        <div>
            <TbGiftCard/>
            <p>Gift Cards</p>
        </div>
        <div>
            <IoNotificationsOutline/>
            <p>Notifications</p>
        </div>
        <div>
            <MdOutlineLogout/>
            <p>Logout</p>
        </div>
    </div>
    
  )
}

export default MyKartMenu
