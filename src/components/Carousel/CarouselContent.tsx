import React from "react";
import Button from "../Button/Button";

interface CarouselContentProps {
  status: string;
  title: string;
}

const CarouselContent = (props: CarouselContentProps) => {
  return (
    <div className={`carousel-item ${props.status}`}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(39, 39, 39, 0.5), rgba(39, 39, 39, 0.5)), url('/Asset/Rectangle 1959.png')",
          height: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" container-md">
          <h1>{props.title}</h1>
          <p>
            After more than two decades of experience in the industry, Melandas
            created opportunities to offer you the best qualities of products by
            partnering with the global forefront furniture brands. With Melandas
            you can choose your furniture with confidence knowing we provide the
            best products from these leading brands.
          </p>
          <Button title={"Discover"} link={"/"} icon="" />
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
