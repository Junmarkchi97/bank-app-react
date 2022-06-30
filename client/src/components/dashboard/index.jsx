import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../styles/dashboard/dashboard.css";
import Sidebar from "./sidebar";
import Overview from "./pages/overview";
import Cards from "./pages/cards";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";

export default function Dashboard(props) {
  const { name, balance, email, setBalance, onLogOut, image } = props;
  return (
    <div className="dashboard">
      <Sidebar
        name={name}
        email={email}
        balance={balance}
        onLogOut={onLogOut}
        image={image}
      />
      <Routes>
        <Route
          index
          path="overview"
          element={<Overview name={name} balance={balance} />}
        />
        <Route exact path="cards" element={<Cards />} />
        <Route
          exact
          path="deposit"
          element={<Deposit balance={balance} setBalance={setBalance} />}
        />
        <Route
          exact
          path="withdraw"
          element={<Withdraw balance={balance} setBalance={setBalance} />}
        />
      </Routes>
    </div>
  );
}
