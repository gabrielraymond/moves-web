import React from "react";
import Button from "../../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="d-flex justify-content-center">
      <nav className="navbar container-md">
        <div className="navbar-logo">
          <img src="/Asset/MOVES LOGO WHITE-01 1.png" alt="Logo" />
        </div>
        <div className="">
          <Button title={"Login"} link={"/login"} icon="/Asset/bxs_user.png" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
