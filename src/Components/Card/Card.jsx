// import court from '../Components/Images/pickle court.jpg'

import React from 'react'
import './Card.css'
export const Card = (props) => {
    return (
        <div >
            <div className="card">
                <img src={props.image} alt="" />
                <h1>{props.title}</h1>
                <div className="location">
                    <i class="fa-solid fa-map-marker-alt"></i>
                    <h4>{props.location}</h4>
                </div>

                <div className="ratings">
                    <div className="starratings">
                        <h2>Ratings</h2>
                        <div className="starts">

                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>

                        <div className="prices">
                            <div className='priceHeadings'>
                            <h2>₹ 500 </h2>
                            <h4>Onwards</h4>
                            </div>
                        </div>
                    

                </div>
                <div className="book">
                    <button>Book Now</button>
                </div>
            </div>



        </div>
    )
}

export default Card;
