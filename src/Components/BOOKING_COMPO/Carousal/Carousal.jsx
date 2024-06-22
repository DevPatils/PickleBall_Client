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
                            <i class="fa-solid fa-map-marker-alt"></i>
                            <h4>Dhairya Prasad Palace, Opp Lal Baug Under Lal Baug Bridge, <br/>Main Gate, beside Patanjali Store, Manjalpur, Vadodara, Gujarat 390011</h4>
                        </div>
                    </div>
                    <div className="ratings">
                        <div className="like-icon">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div className="share-icon">
                            <i class="fa-solid fa-share"></i>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Carousal;