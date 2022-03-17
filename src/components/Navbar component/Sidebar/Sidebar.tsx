import React from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authentication } from "../../../store";
import "./Sidebar.css";

const Sidebar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const [isAuthentication, setIsAuthentication] =
    useRecoilState(authentication);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsAuthentication(false);
    return <Redirect to="/login" />;
  };

  return isAuthentication ? (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky ">
        <div className="sidebar-logo">
          <img src="/Asset/MOVES LOGO-01 1.png" alt="Logo" />
        </div>

        <ul className="nav flex-column">
          <li className="nav-item ">
            <Link
              className={`nav-link ${
                splitLocation[1] === "dashboard" && "active"
              }`}
              aria-current="page"
              to="/dashboard"
            >
              <img
                src="/Asset/Sidebar/Dashboard.png"
                style={{ marginRight: "25px" }}
                alt="dashboard"
              />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                splitLocation[1] === "produk" && "active"
              }`}
              aria-current="page"
              to="/produk"
            >
              <img
                src="/Asset/Sidebar/Produk.png"
                style={{ marginRight: "25px" }}
                alt="dashboard"
              />
              Produk
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${splitLocation[1] === "promo" && "active"}`}
              aria-current="page"
              to="/promo"
            >
              <img
                src="/Asset/Sidebar/Group (1).png"
                style={{ marginRight: "25px" }}
                alt="dashboard"
              />
              Promo
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${splitLocation[1] === "chat" && "active"}`}
              aria-current="page"
              to="/chat"
            >
              <img
                src="/Asset/Sidebar/Group 1591.png"
                style={{ marginRight: "25px" }}
                alt="dashboard"
              />
              Chat
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                splitLocation[1] === "customer" && "active"
              }`}
              aria-current="page"
              to="/customer"
            >
              <img
                src="/Asset/Sidebar/Customer.png"
                style={{ marginRight: "25px" }}
                alt="dashboard"
              />
              Customer
            </Link>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${
                splitLocation[1] === "sign-out" && "active"
              }`}
              aria-current="page"
              style={{ cursor: "pointer" }}
              onClick={handleLogOut}
            >
              <img
                src="/Asset/Sidebar/Group 1765.png"
                style={{ marginRight: "25px" }}
                alt="dashboard"
              />
              Sign Out
            </div>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <Redirect to={"/login"} />
  );
};

export default Sidebar;
