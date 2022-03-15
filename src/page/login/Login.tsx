import React from "react";
import Button from "../../components/Button/Button";
import "./Login.css";

const Login = () => {
  return (
    <section
      id="login"
      className="login d-flex justify-content-center align-items-center"
    >
      <div className="login-wrapper text-center">
        <img src="/Asset/Login/MOVES LOGO WHITE-01 1 (1).PNG" alt="Logo" />
        <h3>Welcome To POS Melandas</h3>
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <Button title="Login" icon="" />
        </form>
      </div>
    </section>
  );
};

export default Login;
