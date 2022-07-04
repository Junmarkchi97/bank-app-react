import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../../styles/dashboard/dashboard.css";
import Sidebar from "./sidebar";
import Overview from "./pages/overview";
import Transfer from "./pages/transfer";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";

export default function Dashboard(props) {
  const { email, onLogOut } = props;
  const Users = JSON.parse(localStorage.getItem("users"));
  const currentUser = Users.find((user) => user.email === email);

  const [balance, setBalance] = useState(currentUser.balance);

  useEffect(() => {
    currentUser.balance = balance;

    localStorage.setItem("users", JSON.stringify(Users));
  }, [balance]);

  const nameCurrent = currentUser.name;
  const emailCurrent = currentUser.email;
  const imageCurrent = currentUser.imageUrl;

  const [transaction, setTransaction] = useState({ method: "", amount: "" });

  return (
    <div className="dashboard">
      <Sidebar onLogOut={onLogOut} name={nameCurrent} image={imageCurrent} />
      <Routes>
        <Route
          index
          path="overview"
          element={<Overview name={nameCurrent} balance={balance} />}
        />
        <Route
          exact
          path="transfer"
          element={<Transfer name={nameCurrent} />}
        />
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
