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
        <i id='call-icon' class="fa-solid fa-phone"></i>
        <button >Contact Us</button>
        </div>
        
        <div className="login-button">
        <i class="fa-regular fa-user"></i>
        <button >Login</button>
        </div>
        </div>
        

    </div>
    </div>
    </>
  )
}
export default Navbar;
