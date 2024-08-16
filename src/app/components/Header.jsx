"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import logo from "../../../public/images/Eventful Text White.png";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

const Header = ({ backgroundColor }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);

        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp < currentTime) {
          localStorage.removeItem("token");
        } else {
          setToken(token);
        }
      } else {
        return null;
      }
    }
  }, []);

  const navbarStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="nav" style={navbarStyle}>
      <div className="container">
        <header>
          <Link href="/">
            <Image src={logo} width={100} alt="Eventful logo" priority></Image>
          </Link>

          <nav>
            <ul className="nav-links">
              <li className="nav-item">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link href="/about">About Us</Link>
              </li>
              {!token ? (
                <>
                  <li className="nav-item">
                    <Link href="/sign-in">Sign In</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sign-up">Sign Up</Link>
                  </li>
                </>
              ) : (
                <li className="dashboard-link nav-item">
                  <FaRegUserCircle size={20} />
                  <Link href="/dashboard"> Dashboard</Link>
                </li>
              )}
              {/* <div className="navbar-search">
                <form>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    required
                    placeholder="Search For Event"
                  />
                </form>
              </div> */}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
