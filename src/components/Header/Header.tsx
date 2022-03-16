import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center">
      <div className="header-text">
        <h1>Dashboard</h1>
      </div>
      <div className="header-notification">
        <img
          src="/Asset/Notif Icon/Notif Message off.png"
          alt="notif"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Header;
