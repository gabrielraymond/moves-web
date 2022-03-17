import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../components/Button/Button";
import { authentication } from "../../store";
import "./Login.css";
// import { user } from "../../store";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isAuthentication, setIsAuthentication] =
    useRecoilState(authentication);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let res = await axios.post(
        "https://melandas.ilios.id/api/v1/auth/token",
        data,
        config
      );
      console.log(res.data);
      setIsAuthentication(true);
      localStorage.setItem("token", res.data.data.token);
    } catch (error: any) {
      console.log(error.message);
      setIsAuthentication(false);
    }
  };

  return !isAuthentication && !localStorage.token ? (
    <section
      id="login"
      className="login d-flex justify-content-center align-items-center"
    >
      {isAuthentication && localStorage.token ? (
        <Redirect to="/dashboard" />
      ) : (
        ""
      )}
      <div className="login-wrapper text-center">
        <img src="/Asset/Login/MOVES LOGO WHITE-01 1 (1).PNG" alt="Logo" />
        <h3>Welcome To POS Melandas</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter you password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button title="Login" icon="" />
        </form>
      </div>
    </section>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default Login;
