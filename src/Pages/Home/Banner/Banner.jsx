import React from 'react';
import bn1 from "../../../assets/images/banner/1.jpg"
import bn2 from "../../../assets/images/banner/2.jpg"
import bn3 from "../../../assets/images/banner/3.jpg"
import bn4 from "../../../assets/images/banner/4.jpg"
import bn5 from "../../../assets/images/banner/5.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bn1} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bn2} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bn3} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bn4} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;