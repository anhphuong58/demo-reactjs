import React from 'react'
import './NavBar.scss'
import { BiSidebar } from 'react-icons/bi';
const logo = require('../../assets/user.png');

const NavBar = () => {
    return (
        <ul className='nav-bar'>
            <div className='btn-sidebar'>
                <BiSidebar className='btn-sidebar-icon'/>
                <div className='name-btn'> Toggle sidebar </div>
            </div>
            <p> LOGO </p>
            <img className = 'logo' src={logo} />
        </ul>
    )
}
export default NavBar;