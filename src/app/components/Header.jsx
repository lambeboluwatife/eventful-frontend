import { Roboto } from "next/font/google";
import Link from "next/link";
import logo from "../images/Eventful Text White.png";
import Image from "next/image";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const Header = ({ backgroundColor }) => {
  const navbarStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="nav" style={navbarStyle}>
      <div className="container">
        <header>
          <Link href="/">
            <Image src={logo} width={100} alt="Eventful logo"></Image>
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
              <li className="nav-item">
                <Link href="/sign-in">Sign In</Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/sign-up">Sign Up</Link>
              </li> */}
              <div className="navbar-search">
                <form>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    required
                    placeholder="Search For Event"
                  />
                </form>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
