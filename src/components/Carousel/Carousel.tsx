import React from "react";
import "./Carousel.css";
import CarouselContent from "./CarouselContent";

const carouselData = [
  {
    id: 1,
    title: "Exquisite Furniture Collections",
    desc: "After more than two decades of experience in the industry, Melandas created opportunities to offer you the best qualities of products by partnering with the global forefront furniture brands. With Melandas you can choose your furniture with confidence knowing we provide the best products from these leading brands.",
  },
  {
    id: 2,
    title: "Title 1",
    desc: "After more than two decades of experience in the industry, Melandas created opportunities to offer you the best qualities of products by partnering with the global forefront furniture brands. With Melandas you can choose your furniture with confidence knowing we provide the best products from these leading brands.",
  },
  {
    id: 3,
    title: "Title 2",
    desc: "After more than two decades of experience in the industry, Melandas created opportunities to offer you the best qualities of products by partnering with the global forefront furniture brands. With Melandas you can choose your furniture with confidence knowing we provide the best products from these leading brands.",
  },
];

const Carousel = () => {
  // const [index, setIndex] = useState(0);

  // const loopCarousel = () => {
  //   for (let i = 0; i < carouselData.length; i++) {
  //     return (
  //       <CarouselContent
  //         status=""
  //         key={carouselData[i].id}
  //         title={carouselData[i].title}
  //         desc={carouselData[i].desc}
  //       />
  //     );
  //   }
  // };

  return (
    <div id="carouselBenner" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner text-center">
        {/* <CarouselContent
          status="active"
          title={carouselData[0].title}
          desc={carouselData[0].desc}
        /> */}
        {/* {for(let i=1; i<carouselData.length;i++){
          return(
            <CarouselContent
              status=""
              key={carouselData[i].id}
              title={carouselData[i].title}
              desc={carouselData[i].desc}
            />
          )
        }} */}
        {/* {loopCarousel} */}
        {carouselData.map((data, index) => {
          return (
            <CarouselContent
              status={index === 0 ? "active" : ""}
              key={data.id}
              title={data.title}
              desc={data.desc}
            />
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselBenner"
        data-bs-slide="prev"
        // onClick={() => set}
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
