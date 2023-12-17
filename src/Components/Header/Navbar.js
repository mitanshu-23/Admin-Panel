import React from 'react'
import './navbar.css'
import {Notifications, NotificationsActive, Settings, Translate} from '@mui/icons-material'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navwrapper'>
            <div className='topLeft'>
                <span className='logo'>
                    NETFLIX
                </span>
            </div>
            <div className='topRight'>
            <div className="topIconcontainer">
            <Notifications/>
            <span className="topIconBadge" >
                2
            </span>
            </div>
            <div className="topIconcontainer">
            <Settings/>
            </div>
            <div className="topIconcontainer">
            <Translate/>
            </div>
            
            <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className='topAvatar'/>
        </div>
        
        </div>
        </div>
  )
}

export default Navbar