import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="d-flex justify-content-center">
      <nav className="navbar container-md">
        <div className="navbar-logo">
          <img src="/Asset/LandingPage/MOVES LOGO WHITE-01 1.png" alt="Logo" />
        </div>
        <div className="">
          <Link to={"/login"}>
            <Button title={"Login"} icon="/Asset/LandingPage/bxs_user.png" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
