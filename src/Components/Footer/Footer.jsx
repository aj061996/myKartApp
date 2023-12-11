import React from 'react'
import './Footer.css'
import { AiTwotoneShop } from 'react-icons/ai'
import { PiShootingStarBold } from 'react-icons/pi'
import { MdOutlineCardGiftcard } from 'react-icons/md'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { FaRegCopyright  } from 'react-icons/fa'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { LiaPercentageSolid } from 'react-icons/lia'


import visa from '../images/advertisements/visacard.png';
import master from '../images/advertisements/mastercard.png';
import americanExpress from '../images/advertisements/americanExpress.png';
import rupay from '../images/advertisements/rupay.png';
import discover from '../images/advertisements/discover.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLinksContainer">
            <div className="footerLinkBox">
                <p className="footerLinkTitle">ABOUT</p>
                <ul>
                    <li> <a href="#">Contact Us</a> </li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Mykart Stories</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Mykart Wholesale</a></li>
                    <li><a href="#">Celartrip</a></li>
                    <li><a href="#">Corporate Information</a></li>
                </ul>
            </div>
            <div className="footerLinkBox">
                <p className="footerLinkTitle">HELP</p>
                <ul>
                    <li> <a href="#">Payments</a> </li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Cancellation & Returns</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Report Infringment</a></li>
                </ul>
            </div>
            <div className="footerLinkBox">
                <p className="footerLinkTitle">CONSUMER POLICY</p>
                <ul>
                    <li> <a href="#">Cancellation & Returns</a> </li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Drievance Redressal</a></li>
                    <li><a href="#">EPR Compilance</a></li>
                </ul>
            </div>
            <div className="footerLinkBox">
                <p className="footerLinkTitle">SOCIAL</p>
                <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>
                </ul>
            </div>
            <div className="Mail">
                <p className="addressTitle">Mail Us</p>
                <p>MyKart Internet Private Limited,</p>
                <p>Building Alyssa Begonia &</p>
                <p>Clove Embassy Tech Village, </p>
                <p>Outer Ring Road, Devarabaeesanahalli Village,</p>
                <p>Bengaluru, 560103</p>
                <p>Karnataka India</p>
            </div>
            <div className="officeAddress">
                <p className="addressTitle">Registered Office Address</p>
                <p>MyKart Internet Private Limited,</p>
                <p>Building Alyssa Begonia &</p>
                <p>Clove Embassy Tech Village, </p>
                <p>Outer Ring Road, Devarabaeesanahalli Village,</p>
                <p>Bengaluru, 560103</p>
                <p>Karnataka India</p>
                <p>CIN : U51109KA2012PTC066107</p>
                <p>Telephhone: <span style={{color:"rgb(66, 66, 255)",cursor:"pointer"}}>044-40505050</span></p>
            </div>
        </div>
        <hr></hr>
        <div className="footerBottomNavBar">
            <div>
                <AiTwotoneShop className='footerIcons'/>
                <span> Become a Seller</span>
                </div>
            <div>
                <PiShootingStarBold className='footerIcons'/>
                <span> Advertise</span>
            </div>
            <div>
                <MdOutlineCardGiftcard className='footerIcons'/>
                <span> Gift Cards</span>
            </div>
            <div>
                <IoMdHelpCircleOutline className='footerIcons'/>
                <span> Help Center</span>
            </div>
            <div>
                <FaRegCopyright className='footerIcons'/>
                <span> 2007-2023 MyKart.com</span>
            </div>
            <div className="cardsAndOptions">
                <div><img style={{height:"16px"}} src={visa} alt="" /></div>
                <div><img src={master} style={{height:"16px"}} alt="" /></div>
                <div><img src={discover} style={{height:"6px"}} alt="" /></div>
                <div><img src={americanExpress} style={{height:"22px"}} alt="" /></div>
                <div><img src={rupay} style={{height:"16px"}} alt="" /></div>
                <div>
                    <FaIndianRupeeSign style={{fontSize:"14px",color:"black"}}/>
                    <p style={{fontSize:"4px",lineHeight:"5px",fontWeight:"bold"}}>CASH ON DELIVERY </p>
                
                </div>
                <div>
                    <LiaPercentageSolid style={{fontSize:"20px",color:'black'}}/>
                    <p style={{fontSize:"4px",lineHeight:"5px",fontWeight:"bold"}}>EASY EMI OPTIONS</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
