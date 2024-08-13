"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../css/login.css";
import AlertMessage from "@/components/AlertMessages";
import logo from "../../../public/images/Eventful Text Red.png";

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    organizationName: "",
    password: "",
    verifyPassword: "",
  });

  const [showOrganizationName, setShowOrganizationName] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "role") {
      setShowOrganizationName(value === "organizer");
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("JSON String:", JSON.stringify(formData));
    try {
      const response = await fetch(
        "https://altschool-eventful-backend.onrender.com/api/auth/register",
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

      setLoading(false);

      if (response.ok) {
        setSuccessMessage(
          "Account created successfully! Redirecting to sign-in page..."
        );

        setErrorMessage("");

        setFormData({
          name: "",
          username: "",
          email: "",
          role: "",
          organizationName: "",
          password: "",
          verifyPassword: "",
        });

        setTimeout(() => {
          router.push("/sign-in");
        }, 2000);
      } else {
        const responseData = await response.json();
        setErrorMessage(
          `Signing up failed: ${responseData.error || "An error occurred"}`
        );

        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage(`Error signing up: ${error.message}`);

      setSuccessMessage("");
    }
  };

  return (
    <div className="auth-page grid">
      <div className="auth-details">
        <div className="info">
          <h5>Create Account</h5>
          <span>Enter your details below</span>
          <AlertMessage
            message={successMessage}
            type="success"
            onClose={() => setSuccessMessage("")}
          />
          <AlertMessage
            message={errorMessage}
            type="error"
            onClose={() => setErrorMessage("")}
          />
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
            {showOrganizationName && (
              <div className="form-group">
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  placeholder="Organization Name"
                  value={formData.organizationName}
                  onChange={handleChange}
                  required={showOrganizationName}
                />
              </div>
            )}
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
              <button type="submit">
                {loading ? <h4>creating account...</h4> : <h4>SIGN UP</h4>}
              </button>
            </div>
            <hr />
            <div>
              <span>Have an account?</span>
              <span>
                {" "}
                <a className="text-danger" href="/sign-in">
                  Sign In
                </a>
              </span>
            </div>
          </form>
        </div>
        ;
      </div>
      <div className="auth-bg2">
        <div className="container">
          <Image src={logo} width={200} height={50} />
          <h2>
            Create an account and join million users in creating the best event
            experience or attending astonishing events.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
