import React from "react";
import NewsCard from "./NewsCard";
import "./NewsSection.css";

const newsData = [
  {
    id: 1,
    imgUrl: "/Asset/LandingPage/News/newsImg1.png",
    title: "The Most Comfortable Recliner For Your Elders",
    description:
      "For some people, finding the perfect gift for each and every member of the family comes as a natural skill;…",
    date: "7 Desember 2022",
    link: "/",
  },
  {
    id: 2,
    imgUrl: "/Asset/LandingPage/News/newsImg2.png",
    title: "The Comfiest and Most Stylish Armchair Collection",
    description:
      "Life is in full swing once again; the commute is constant, working everyday from 8:30 - 5:30 seems unrelenting.",
    date: "7 Desember 2022",
    link: "/",
  },
  {
    id: 3,
    imgUrl: "/Asset/LandingPage/News/newsImg3.png",
    title: "The Comfiest and Most Stylish Armchair Collection",
    description:
      "Life is in full swing once again; the commute is constant, working everyday from 8:30 - 5:30 seems unrelenting.",
    date: "7 Desember 2022",
    link: "/",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section" style={{ margin: "50px 0" }}>
      <div className="container text-center">
        <h2 className="mb-4">What News?</h2>
        <div className="row text-start">
          {newsData.map((data) => {
            return (
              <NewsCard
                id={data.id}
                imgUrl={data.imgUrl}
                title={data.title}
                description={data.description}
                date={data.date}
                link={data.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
