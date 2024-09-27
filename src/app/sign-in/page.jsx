"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../css/login.css";
import logo from "../../../public/images/Eventful Text Red.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AlertMessage from "@/components/AlertMessages";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://altschool-eventful-backend.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      const decodedToken = jwtDecode(token);
      localStorage.setItem("decodedToken", JSON.stringify(decodedToken));

      document.cookie = `token=${token}; path=/`;

      setSuccessMessage("Login successfully! Redirecting to your dashboard...");

      setErrorMessage("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      setErrorMessage(
        `Signing in failed: ${
          error.response?.data.message || "An error occurred"
        }`
      );
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page grid">
      <div className="auth-bg">
        <div className="container">
          <Image src={logo} width={200} height={50} alt="Eventful logo" />
          <h2>
            We are happy you are back. Sign in to enjoy our awesome services.
          </h2>
        </div>
      </div>
      <div className="auth-details">
        <div className="container">
          <div className="info">
            <h5>Welcome Back</h5>
            <span>Enter your account details below</span>
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
                <button type="submit">
                  {loading ? <h4>signing in...</h4> : <h4>SIGN IN</h4>}
                </button>
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
