import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface CarouselContentProps {
  status: string;
  title: string;
  desc: string;
}

const CarouselContent = (props: CarouselContentProps) => {
  return (
    <div
      className={`carousel-item ${props.status}`}
      style={{
        background:
          "linear-gradient(0deg, rgba(39, 39, 39, 0.5), rgba(39, 39, 39, 0.5)), url('/Asset/LandingPage/Rectangle 1959.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "85vh" }}
      >
        <div className=" container-md">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <Link to={"/"}>
            <Button title={"Discover"} icon="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
