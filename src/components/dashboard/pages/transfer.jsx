import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../../../styles/dashboard/pages/transfer.css";
import Users from "../../../users";

export default function Transfer(props) {
  const { name } = props;
  const [transferAmount, setTransferAmount] = useState("");
  const [transferred, setTransferred] = useState("");
  const [friend, setFriend] = useState();

  const handleOption = (e) => {
    // e.preventDefault();

    setFriend(e.target.value);
  };

  const handleAmount = (e) => {
    setTransferAmount(
      isNaN(Number(e.target.value)) ? "" : Number(e.target.value)
    );
  };

  const handleTransfer = (e) => {
    e.preventDefault();

    if (transferAmount === "") return;

    // setBalance(Number(balance) - Number(transferAmount));
    setTransferred(transferAmount);

    setTransferAmount("");

    console.log(e.target.value);
  };

  const DisplayFriends = () => {
    return Users.map((user, index) => {
      return user.name !== name ? (
        <option key={index} value={user.name}>
          {user.name}
        </option>
      ) : (
        ""
      );
    });
  };

  return (
    <div className="transfer-container">
      <div className="transfer-wrapper">
        <h3>*In Development*</h3>
        <h1>TRANSFER</h1>
        <form onSubmit={handleTransfer}>
          <select
            className="transfer-select"
            name="friends"
            id="friends"
            onChange={handleOption}
          >
            <DisplayFriends />
          </select>
          <input
            type="number"
            min="0"
            name="transfer"
            placeholder="Amount"
            onChange={handleAmount}
            value={transferAmount}
          ></input>
          <input className="transfer-button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
