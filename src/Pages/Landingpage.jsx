import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './LandingPage.css'  
import hero from '../Components/Images/WhatsApp_Image_2024-06-17_at_16.36.16_04f0eabe-removebg-preview (1).png'

export const Landingpage = () => {
  return (
    <>
   <div className="navbar">
    <Navbar></Navbar>
   </div>
    <div className="landing_page">
        <div className="left">
            <div className="titles-buttons">
                <h1>U n i t e d &nbsp;  S p o r t s  <br/> Arena <i class="fa-solid fa-bullseye" id='bulls-eye'></i></h1>
                <h4>"Yout ultimate court destination"</h4>
                <button>Book Slot</button>
            </div>
        </div>
        <div className="right">
            <img src={hero} alt="" />

        </div>
    </div>
    </>
  )
}

export default Landingpage;