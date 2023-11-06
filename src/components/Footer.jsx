import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import "../App.css"

const Footer = () => {
  return (
    <div className="footer-container">
     <div className="row container justify-content-between align-items-center gap-2">
      <div className="col-md-5">
        <img src={Logo} alt="log" />
        <div className="d-flex gap-3">
          <Link to="/" className="text-decoration-none text-white">
            About
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            Careers
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            Events
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            Products
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            Support
          </Link>
        </div>
      </div>
      <div className="col-md-5">
        <div className="d-flex gap-3 justify-content-center align-items-center">
          <FaFacebook color="white" size={25} />
          <FaTwitter color="white" size={25} />
          <FaPinterest color="white" size={25} />
          <FaInstagram color="white" size={25} />
        </div>
        <p className="text-white">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>   
    </div>
    
  );
};

export default Footer;
