import React, { useState, useRef } from "react";
import "../../../styles/app.css";

export default function Deposit(props) {
  const { balance, setBalance } = props;
  const [depositAmount, setDepositAmount] = useState(0);
  const inputAmount = useRef(null);

  const handleAmount = (e) => {
    setDepositAmount(Number(e.target.value));
    if (isNaN(e.target.value)) {
      e.target.value = 0;
    }
  };

  const handleDeposit = () => {
    setBalance(Number(balance) + Number(depositAmount));
    setDepositAmount(0);
  };

  return (
    <div>
      <h1>DEPOSIT</h1>
      <input
        type="text"
        name="deposit"
        placeholder="Amount"
        onChange={handleAmount}
        value={depositAmount}
        ref={inputAmount}
      ></input>
      <button onClick={handleDeposit}>Submit</button>
    </div>
  );
}
