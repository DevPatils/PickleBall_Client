import React from 'react'
import logo from '../Images/logo.png'
import './Navbar.css'
export const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <div className="left">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <h3>USA</h3>

    </div>
    <div className="right">
        <div className="side-contacts">
            <div className="contact-us">
        <i  class="fa-solid fa-phone" id='call-icon'></i>
        <button >Contact Us</button>
        </div>
        
        <div className="login-button">
        <i class="fa-regular fa-user" id='user-icon'></i>
        <button >Login</button>
        </div>
        </div>
        

    </div>
    </div>
    </>
  )
}
export default Navbar;
