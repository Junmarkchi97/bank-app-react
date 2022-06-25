import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../styles/dashboard/dashboard.css";
import Sidebar from "./sidebar";
import Overview from "./pages/overview";
import Cards from "./pages/cards";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <Sidebar
        name={props.name}
        email={props.email}
        balance={props.balance}
        onLogOut={props.onLogOut}
      />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </div>
  );
}
