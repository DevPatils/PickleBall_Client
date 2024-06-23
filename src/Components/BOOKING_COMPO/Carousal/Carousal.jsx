import React from 'react'
import img1 from "../../Images/pickle court.jpg"
import './Carousal.css'

export const Carousal = () => {
    return (
        <div>
            <div className="info-carousal">
                <div className="carousal">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="info">
                    <div className="name-add">
                        <h1>United Sports Pickle Ball Arena</h1>
                        <div className="location">
                            <i class="fa-solid fa-map-marker-alt" id='location-marker'></i>
                            <h4>Dhairya Prasad Palace, Opp Lal Baug Under Lal Baug Bridge, <br />Main Gate, beside Patanjali Store, Manjalpur, Vadodara, Gujarat 390011</h4>
                        </div>
                    </div>
                    <div className="right">
                        <div className="ratings">
                            <div className="like-icon">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div className="share-icon" id='share-icon'>
                                <i class="fa-solid fa-share"></i>
                            </div>
                        </div>
                        <div className="star-rattings">
                            <i class="fa-solid fa-star"></i> <h4>4.5</h4>
                        </div>
                        <div className="directions">
                            <h1>Best Pickle ball courts in Manjalpur</h1>
                            <button>Directions</button>

                        </div>
                    </div>

                </div>
            </div>
            <div className="page-nav">
                <h1>Book Now</h1>
                <h1>Details</h1>
            </div>

            <div className="book-timeline">
                <div className="first-box">
                    <i class="fa-solid fa-1"></i>
                    <div className="details">
                        <h1>Selected an activity</h1>
                        <h4>Pickle Ball Courts Outdoors</h4>
                    </div>
                    <div className="change-button">
                        <button>Change</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Carousal;