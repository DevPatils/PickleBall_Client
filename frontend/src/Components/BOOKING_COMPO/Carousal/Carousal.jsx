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
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo dolore doloribus, ratione velit delectus commodi vero, optio saepe, quidem similique. Molestias debitis impedit excepturi reprehenderit illum laborum in cum.</h4>
                    </div>
                </div>
            </div>
            </div>


        </div>
    )
}

export default Carousal;