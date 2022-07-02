import React, { useState, useRef } from "react";
import "../../../styles/dashboard/pages/deposit.css";

export default function Deposit(props) {
  const { balance, setBalance, setTransaction, transaction, transHis } = props;
  const [depositAmount, setDepositAmount] = useState("");

  const handleAmount = (e) => {
    setDepositAmount(
      isNaN(Number(e.target.value)) ? "" : Number(e.target.value)
    );
  };

  const handleDeposit = () => {
    if (depositAmount === "") {
      return;
    }

    transHis.push({ method: "deposit", amount: depositAmount });
    // setTransaction({
    //   ...transaction,
    //   method: "deposit",
    //   amount: depositAmount,
    // });

    setBalance(Number(balance) + Number(depositAmount));
    setDepositAmount("");

    console.log(transHis);
  };

  return (
    <div className="deposit-container">
      <div className="deposit-wrapper">
        <h1>DEPOSIT</h1>
        <input
          type="number"
          min="0"
          name="deposit"
          placeholder="Amount"
          onChange={handleAmount}
          value={depositAmount}
        ></input>
        <button onClick={handleDeposit}>Submit</button>
      </div>
    </div>
  );
}
