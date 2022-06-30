import React, { useState, useRef } from "react";
import "../../../styles/app.css";

export default function Deposit(props) {
  const { balance, setBalance } = props;
  const [depositAmount, setDepositAmount] = useState();

  const handleAmount = (e) => {
    setDepositAmount(
      isNaN(Number(e.target.value)) ? "" : Number(e.target.value)
    );
  };

  const handleDeposit = () => {
    setBalance(Number(balance) + Number(depositAmount));
    setDepositAmount("");
  };

  return (
    <div className="deposit">
      <h1>DEPOSIT</h1>
      <input
        type="text"
        name="deposit"
        placeholder="Amount"
        onChange={handleAmount}
        value={depositAmount}
      ></input>
      <button onClick={handleDeposit}>Submit</button>
    </div>
  );
}
