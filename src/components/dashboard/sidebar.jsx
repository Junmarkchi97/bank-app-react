import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Sidebar(props, onLogOut ) {
  const { name, email, balance } = props;
  const [state, setState] = useState(false);

  const LogOut = () => {
    // setIsLoggedIn(false);

    console.log('ok')
    onLogOut(state)
  };

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
      <button onClick={LogOut}>Log Out</button>
    </div>
  );
}
