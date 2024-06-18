import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './LandingPage.css'  
import hero from '../Components/Images/WhatsApp_Image_2024-06-17_at_16.36.16_04f0eabe-removebg-preview (1).png'

export const Landingpage = () => {
  return (
    <>
    <Navbar/>
    <div className="landing_pge">
        <div className="left">
            <div className="titles-buttons">
                <h1>United Sports Arena</h1>
                <h4>Yout ultimate court destination</h4>
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