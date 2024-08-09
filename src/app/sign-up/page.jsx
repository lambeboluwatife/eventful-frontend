"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../css/login.css";
import logo from "../../../public/images/Eventful Text Red.png";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    organizationName: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("JSON String:", JSON.stringify(formData));
    try {
      const response = await fetch(
        "https://altschool-eventful-backend.onrender.com/users/register",
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Account created successfully");

        setFormData({
          name: "",
          username: "",
          email: "",
          role: "",
          organizationName: "",
          password: "",
          verifyPassword: "",
        });
      } else {
        const responseData = await response.json();
        console.error(
          "Signing up failed with status:",
          response.status,
          responseData
        );
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section className="header">
      <div className="container grid grid-3">
        <div></div>
        <div className="info">
          <Image src={logo} width={200} alt="Eventful logo"></Image>
          <h5>Create Eventful Account</h5>
          <span>Enter your details below</span>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Select Role
                </option>
                <option value="organizer">Organizer</option>
                <option value="attendee">Attendee</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                placeholder="Organization Name"
                value={formData.organizationName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="verifyPassword"
                name="verifyPassword"
                placeholder="Verify Password"
                value={formData.verifyPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit">SIGN UP</button>
            </div>
            <hr />
            <div>
              <span>
                Have an account?
                <a className="text-danger" href="/sign-in">
                  Sign In
                </a>
              </span>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default RegisterPage;
