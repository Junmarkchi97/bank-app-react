import React from "react";
import "../../styles/dashboard/dashboard.css";
import Sidebar from "./sidebar";

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <Sidebar
        name={props.name}
        email={props.email}
        balance={props.balance}
        onLogOut={props.onLogOut}
      />
    </div>
  );
}
