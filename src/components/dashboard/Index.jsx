import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import "../../styles/dashboard/dashboard.css";
import Sidebar from "./Sidebar";
import Overview from "./pages/Overview";
import Cards from "./pages/Cards";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

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
        <Route exact path="/dashboard/overview" element={<Overview />} />
        <Route exact path="/dashboard/cards" element={<Cards />} />
        <Route exact path="/dashboard/deposit" element={<Deposit />} />
        <Route exact path="/dashboard/withdraw" element={<Withdraw />} />
      </Routes>
    </div>
  );
}
