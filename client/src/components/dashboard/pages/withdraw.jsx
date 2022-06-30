import React, { useState, useRef } from "react";

export default function Withdraw(props) {
  const { balance, setBalance } = props;
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const handleAmount = (e) => {
    setWithdrawAmount(
      isNaN(Number(e.target.value)) ? "" : Number(e.target.value)
    );
  };

  const handleWithdraw = () => {
    setBalance(Number(balance) - Number(withdrawAmount));
    setWithdrawAmount("");
  };

  return (
    <div className="withdraw">
      <h1>WITHDRAW</h1>
      <input
        type="text"
        placeholder="Amount"
        onChange={handleAmount}
        value={withdrawAmount}
      ></input>
      <button onClick={handleWithdraw}>Submit</button>
    </div>
  );
}
