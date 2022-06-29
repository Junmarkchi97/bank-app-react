import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../styles/dashboard/dashboard.css";
import Sidebar from "./sidebar";
import Overview from "./pages/overview";
import Cards from "./pages/cards";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";

export default function Dashboard(props) {
  const { name, balance, email, setBalance, onLogOut } = props;
  return (
    <div className="dashboard">
      <Sidebar
        name={name}
        email={email}
        balance={balance}
        onLogOut={onLogOut}
      />
      <Routes>
        <Route
          exact
          path="dashboard/overview"
          element={<Overview name={name} balance={balance} />}
        />
        <Route exact path="/dashboard/cards" element={<Cards />} />
        <Route
          exact
          path="/dashboard/deposit"
          element={<Deposit balance={balance} setBalance={setBalance} />}
        />
        <Route
          exact
          path="/dashboard/withdraw"
          element={<Withdraw balance={balance} setBalance={setBalance} />}
        />
      </Routes>
    </div>
  );
}
