import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
interface ButtonProps {
  title: string;
  link: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Link className="btn-link" to={props.link}>
      <button className="btn primary-btn " style={{ width: "150px" }}>
        {props.title}
      </button>
    </Link>
  );
};

export default Button;
