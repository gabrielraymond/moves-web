import React from "react";
import "./User.css";

const User = () => {
  return (
    <div id="user-card" className="d-flex align-items-center">
      <div className="user-img"></div>
      <div className="user-desc">
        <h2>Yanti Ngoei</h2>
        <p>yanti-ngoei@melandas-indonesia.com</p>
      </div>
    </div>
  );
};

export default User;
