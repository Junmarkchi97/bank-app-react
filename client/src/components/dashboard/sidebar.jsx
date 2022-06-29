import React, { useState } from "react";
import logoWhite from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import "../../styles/dashboard/sidebar.css";

export default function Sidebar(props) {
  const { name, email, balance, onLogOut } = props;

  const handleLogOut = () => {
    onLogOut(false);
  };

  return (
    <div className="navigation">
      <div className="nav">
        <img className="sidebar-logo" src={logoWhite} alt="logo" />
        <Link to="/dashboard/overview" className="overview">
          <i className="fa-solid fa-table-columns"></i>
          <h4>Overview</h4>
        </Link>
        <Link to="/dashboard/cards" className="cards">
          <i className="fa-solid fa-credit-card"></i>
          <h4>Cards</h4>
        </Link>
        <Link to="/dashboard/deposit" className="deposit">
          <i className="fa-solid fa-money-bill-transfer"></i>
          <h4>Deposit</h4>
        </Link>
        <Link to="/dashboard/withdraw" className="withdraw">
          <i className="fa-solid fa-money-bill-transfer"></i>
          <h4>Withdraw</h4>
        </Link>
      </div>
      <div className="settings">
        <div className="profile">
          <img src="/"></img>
          <p>{name}</p>
        </div>
        <Link to="/" className="button">
          <button className="logout" onClick={handleLogOut}>
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
}
