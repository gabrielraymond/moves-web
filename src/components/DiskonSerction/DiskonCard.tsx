import React from "react";
import { Link } from "react-router-dom";

interface diskonCardProps {
  id: any | null;
  imgUrl: string;
}

const DiskonCard = (props: diskonCardProps) => {
  return (
    <div className="col-md-4">
      <div key={props.id}>
        <Link to={"/"}>
          <img
            src={props.imgUrl}
            alt="diskon"
            style={{ width: "100%", margin: "12px 0" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default DiskonCard;
