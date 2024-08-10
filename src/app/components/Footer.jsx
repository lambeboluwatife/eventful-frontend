import Image from "next/image";
import logo from "../../../public/images/Eventful Text White.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container grid grid-3">
        <div className="contact-info">
          <Image src={logo} width={200} height={50} />
          <h5>Create and discover events around you.</h5>
          <p>Email: contact@eventful.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="quick-links">
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Help/Support</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h5>Follow us on our social media platforms.</h5>
          <a href="#">
            <FaFacebookSquare color="#fff" size={40} />
          </a>
          <a href="#">
            <FaTwitterSquare color="#fff" size={40} />
          </a>
          <a href="#">
            <FaInstagramSquare color="#fff" size={40} />
          </a>
          <a href="#">
            <FaLinkedin color="#fff" size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
