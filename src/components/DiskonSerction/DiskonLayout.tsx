import React from "react";
import Button from "../Button/Button";
import DiskonCard from "./DiskonCard";

const diskonData = [
  {
    id: 1,
    imgUrl: "/Asset/LandingPage/Diskon/diskon1.png",
  },
  {
    id: 2,
    imgUrl: "/Asset/LandingPage/Diskon/diskon2.png",
  },
  {
    id: 3,
    imgUrl: "/Asset/LandingPage/Diskon/diskon3.png",
  },
  {
    id: 4,
    imgUrl: "/Asset/LandingPage/Diskon/diskon4.png",
  },
  {
    id: 5,
    imgUrl: "/Asset/LandingPage/Diskon/diskon5.png",
  },
  {
    id: 6,
    imgUrl: "/Asset/LandingPage/Diskon/diskon6.png",
  },
];

const DiskonLayout = () => {
  return (
    <section
      className="diskon-layout"
      id="diskon-layout"
      style={{ margin: "60px 0" }}
    >
      <div className="container ">
        <div className="row ">
          {diskonData.map((data) => {
            return <DiskonCard imgUrl={data.imgUrl} key={data.id} />;
          })}
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ margin: "30px 0" }}
        >
          <Button title="Load More" icon="" />
        </div>
      </div>
    </section>
  );
};

export default DiskonLayout;
