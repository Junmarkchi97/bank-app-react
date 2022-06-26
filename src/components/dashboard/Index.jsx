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
        <Route
          exact
          path="/dashboard/overview"
          element={<Overview name={props.name} balance={props.balance} />}
        />
        <Route exact path="/dashboard/cards" element={<Cards />} />
        <Route exact path="/dashboard/deposit" element={<Deposit />} />
        <Route exact path="/dashboard/withdraw" element={<Withdraw />} />
      </Routes>
    </div>
  );
}
