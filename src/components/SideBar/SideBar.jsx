import React from 'react'
import './SideBar.scss'
import { RiFunctionLine } from 'react-icons/ri';
const logo = require('../../assets/user.png');

const SideBar = () => {
    return (
        <div class="side-bar">
            <item className = 'user-info' >
                <img className = 'logo-user' src={logo} /> 
                <div className='name-user'>User name</div>
            </item>
            <item className = 'item-side'> 
                <RiFunctionLine className='icon'/>
                Dashboard 
            </item>
            <item className = 'item-side'> 
                <RiFunctionLine className='icon'/>
                Campaign 
            </item>
            <item className = 'item-side'>
                <RiFunctionLine className='icon'/> 
                Account 
            </item>
        </div>
    )
}
export default SideBar;