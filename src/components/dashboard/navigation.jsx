import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  const { name, email , balance } = props


  return (
    <div className="navigation">
      <h1>
        Hello,{name}, {email}, {balance}
      </h1>
      <img src={logo} alt="" />
      <h5>MANAGE</h5>
      <Link to="/dashboard">
        <i className="fa-solid fa-table-columns"></i>
        <h4>Dashboard</h4>
      </Link>
    </div>
  );
}
