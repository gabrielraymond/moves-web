import React from "react";
import "./Carousel.css";
import CarouselContent from "./CarouselContent";

const Carousel = () => {
  return (
    <div id="carouselBenner" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner text-center">
        <CarouselContent status="active" />
        <CarouselContent status="" />
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselBenner"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselBenner"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
