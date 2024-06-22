import React, { useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import './LandingPage.css';  
import hero from '../Components/Images/WhatsApp_Image_2024-06-17_at_16.36.16_04f0eabe-removebg-preview (1).png';
import Card from '../Components/Card/Card';
import court from '../Components/Images/pickle court.jpg';

export const Landingpage = () => {
  const cardsRef = useRef(null);

  const scrollToCards = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="landing_page">
        <div className="left">
          <div className="titles-buttons">
            <h1>U n i t e d &nbsp;  S p o r t s  <br/> Arena <i className="fa-solid fa-bullseye" id='bulls-eye'></i></h1>
            <h4>"Your ultimate court destination"</h4>
            <button onClick={scrollToCards}>Book Slot</button>
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="Hero" />
        </div>
      </div>

      <div className="book-headings">
        <div className="book-title">
          <hr />
          <h1>Check out courts and Turfs</h1>
          <hr />
        </div>
        <h4>Playing turf soccer with friends at United Sports Arena means excitement,<br /> teamwork, and unforgettable moments on the perfect playing surface.</h4>
      </div>

      <div className="book-cards" ref={cardsRef}>
        <Card image={court} title={"Pickle Ball Court"} location={"Vadodara"} />
        <Card image={court} title={"Cricket turf"} location={"Vadodara"} />
      </div>
    </>
  );
}

export default Landingpage;
