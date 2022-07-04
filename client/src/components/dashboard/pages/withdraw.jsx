import React, { useState, useRef } from "react";
import "../../../styles/dashboard/pages/withdraw.css";

export default function Withdraw(props) {
  const { balance, setBalance } = props;
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const handleAmount = (e) => {
    setWithdrawAmount(
      isNaN(Number(e.target.value)) ? "" : Number(e.target.value)
    );
  };

  const handleWithdraw = () => {
    if (withdrawAmount === "") return;

    setBalance(Number(balance) - Number(withdrawAmount));
    setWithdrawAmount("");
  };

  return (
    <div className="withdraw-container">
      <div className="withdraw-wrapper">
        <h1>WITHDRAW</h1>
        <input
          type="number"
          min="0"
          name="withdraw"
          placeholder="Amount"
          onChange={handleAmount}
          value={withdrawAmount}
        ></input>
        <button onClick={handleWithdraw}>Submit</button>
      </div>
    </div>
  );
}
