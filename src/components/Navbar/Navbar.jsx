import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbarleft">
        <img src={logo} alt="" srcset="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popluar</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbarright">
        <img src={search_icon} alt="" className='icons' />
        <p>
            Children
        </p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbarpro">
        <img src={profile_img} alt="" className='profile' />
        <img src={caret_icon} alt=""  />
        <div className="dropdown">
            <p>Sign Out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
