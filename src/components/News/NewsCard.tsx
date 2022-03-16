import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface newsCardProps {
  imgUrl: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const NewsCard = (props: newsCardProps) => {
  return (
    <div className="news-card col-md-4">
      <img
        src={props.imgUrl}
        alt="news"
        style={{ width: "100%", marginBottom: "24px" }}
      />

      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p className="news-date">{props.date}</p>
      <Link to={props.link}>
        <Button title="Discover" icon="" />
      </Link>
    </div>
  );
};

export default NewsCard;
