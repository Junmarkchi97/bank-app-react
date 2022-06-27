import { React } from "react";
import "../../styles/homepage/header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header1">
        <img className="logo" src={logo} alt="" />
        <a className="services" href="#">
          Services
        </a>
        <a className="about" href="#">
          About
        </a>
        <a className="help" href="#">
          Help
        </a>
      </div>
      <div className="header2">
        <Link className="login" to="/login">
          Log In
        </Link>
        <Link className="signup" to="/signup">
          Get Started
        </Link>
      </div>
    </div>
  );
}
