import React from "react";
import "../../styles/dashboard/dashboard.css";
import Navigation from "./navigation";

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <Navigation
        name={props.name}
        email={props.email}
        balance={props.balance}
      />
    </div>
  );
}
