import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  };

  return (
    <section
      id="login"
      className="login d-flex justify-content-center align-items-center"
    >
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
  );
};

export default Login;
