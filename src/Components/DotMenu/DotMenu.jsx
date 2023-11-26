import React from 'react'
import './DotMenu.css'
import { IoNotificationsOutline}  from 'react-icons/io5'
import { MdOutlineHeadsetMic } from 'react-icons/md'
import { AiOutlineStock } from 'react-icons/ai'
import { LuDownload } from 'react-icons/lu'


const DotMenu = () => {
  return (
    <div className='dotMenuContainer'>
        <div>
            <IoNotificationsOutline/>
            <p>Notification Preferences</p>
        </div>
        <div>
            <MdOutlineHeadsetMic/>
            <p>24*7 Customer Care</p>
        </div>
        <div>
            <AiOutlineStock/>
            <p>Advertise</p>
        </div>
        <div>
            <LuDownload/>
            <p>Download App</p>
        </div>
      
    </div>
  )
}

export default DotMenu
