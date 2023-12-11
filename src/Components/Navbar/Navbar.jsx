import React from 'react'
import {useState} from 'react'
import './Navbar.css'
import { CgProfile } from 'react-icons/cg';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'
import { AiTwotoneShop } from 'react-icons/ai'
import  { CiMenuKebab } from 'react-icons/ci'
import MyKartMenu from '../myKartMenu/MyKartMenu';
import DotMenu from '../DotMenu/DotMenu';
import { Link  } from 'react-router-dom'

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [ isMenuOpen , setMenuOpen ] = useState(false)
  return (
    <div className='navbarContainer'>
        <div className="navbar">
            <div className="logo">
                <h1>MyKart</h1>
                <p className='navP'>Explore <span>Plus</span></p>
            </div>
           
                <input className="searchBar" type="search"  placeholder='Search for Products , Brands and More'/>
           
            <div className={`mykartMenu ${isOpen?'open':''}`} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
                <CgProfile className='icon'/>
                <p className='iconsP'>Mykart</p>
                <div className='arrowContainer'>
                <RiArrowDropDownLine className='dropDownArrow'/>
                </div>
            </div>
            <div className="cart">
                <FiShoppingCart className='icon'/>
                <p className='iconsP'>Cart</p>
            </div>
            <div className="seller">
                <AiTwotoneShop className='icon'/>
                <p className='iconsP'>Become a Seller</p>
            </div>
            <div className={`menu ${isMenuOpen?'open':''}`} onMouseEnter={()=>setMenuOpen(true)} onMouseLeave={()=>setMenuOpen(false)}>
                <CiMenuKebab/>
            </div>

        </div>
        {isOpen?<div onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}><MyKartMenu/></div>:<></>}
        {isMenuOpen?<div onMouseEnter={()=>setMenuOpen(true)} onMouseLeave={()=>setMenuOpen(false)}><DotMenu/></div>:<></>}
    </div>
  )
}