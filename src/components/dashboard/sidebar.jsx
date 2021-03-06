import React, { useState } from "react";
import logoWhite from "../../assets/logo-white.png";
import { Link, Outlet } from "react-router-dom";
import "../../styles/dashboard/sidebar.css";

export default function Sidebar(props) {
  const { name, image, onLogOut } = props;

  const handleLogOut = () => {
    onLogOut();
  };

  return (
    <div className="navigation">
      <div className="nav">
        <img className="sidebar-logo" src={logoWhite} alt="logo" />
        <Link to="overview" className="overview">
          <i className="fa-solid fa-table-columns"></i>
          <h4>Overview</h4>
        </Link>
        <Link to="transfer" className="cards">
          <i className="fa-solid fa-credit-card"></i>
          <h4>Transfer</h4>
        </Link>
        <Link to="deposit" className="deposit">
          <i className="fa-solid fa-money-bill-transfer"></i>
          <h4>Deposit</h4>
        </Link>
        <Link to="withdraw" className="withdraw">
          <i className="fa-solid fa-money-bill-transfer"></i>
          <h4>Withdraw</h4>
        </Link>
      </div>
      <div className="settings">
        <div className="profile">
          <img src={image}></img>
          <p>{name}</p>
        </div>
        <Link to="/" className="button">
          <button className="logout" onClick={handleLogOut}>
            Log Out
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
