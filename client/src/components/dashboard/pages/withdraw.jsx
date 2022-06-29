import React, { useState, useRef } from "react";

export default function Withdraw(props) {
  const { balance, setBalance } = props;
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const inputAmount = useRef(null);

  const handleAmount = (e) => {
    setWithdrawAmount(Number(e.target.value));

    // if (e.target.value === 0 || NaN) {
    //   e.target.value = "";
    // }
  };

  const handleWithdraw = () => {
    setBalance(Number(balance) - Number(withdrawAmount));
    setWithdrawAmount(0);
  };

  return (
    <div>
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
