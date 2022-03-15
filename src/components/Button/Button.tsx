import React from "react";
import "./Button.css";
interface ButtonProps {
  title: string;
  icon: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="btn primary-btn " style={{ width: "150px" }}>
      {props.icon && <img src={props.icon} alt="user" className="btn-icon" />}
      {props.title}
    </button>
  );
};

export default Button;
