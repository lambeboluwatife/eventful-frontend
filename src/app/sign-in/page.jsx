"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../css/login.css";
import logo from "../../../public/images/Eventful Text Red.png";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios
        .post("https://altschool-eventful-backend.onrender.com/users/login", {
          email,
          password,
        })
        .then(function (response) {
          console.log(response);
          const token = response.data.token;
          localStorage.setItem("token", token);

          setEmail("");
          setPassword("");
        })
        .catch(function (error) {
          console.error("Error:", error.response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-page grid">
      <div className="auth-bg">
        <div className="container">
          <Image src={logo} width={200} height={50} />
          <h2>
            Create an account and join our million users in creating the best
            event experience.
          </h2>
        </div>
      </div>
      <div className="auth-details">
        <div className="container">
          <div className="info">
            <h5>Welcome Back</h5>
            <span>Enter your account details below</span>
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <small>
                <a href="#">Forgot your password?</a>{" "}
              </small>
              <div className="form-group">
                <button type="submit">SIGN IN</button>
              </div>
              <hr />
              <div>
                <span>Don't have an account yet?</span>
                <span>
                  {" "}
                  <a className="text-danger" href="/sign-up">
                    Create one
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
