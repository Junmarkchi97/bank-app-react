import Homepage from "./components/homepage/homepage";
import Login from "./components/homepage/pages/login";
// import Signup from './components/homepage/pages/signup'
import "./styles/app.css";
import { Fragment, React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.jsx";
import { select } from "./utils";

function App() {
  const [currentUser, setCurrentUser] = useState(); //Current User Logged In
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [index, setIndex] = useState(2);

  const registeredUsers = [
    {
      name: "Junmark Chi",
      email: "junmark@chi.com",
      password: "1234",
      balance: 0,
      id: 0,
    },
    {
      name: "Elon Musk",
      email: "elon@musk.com",
      password: "1234",
      balance: 1000000,
      id: 1,
    },
    {
      name: "James Bond",
      email: "james@bond.com",
      password: "1234",
      balance: 99999999,
      id: 2,
    },
  ];

  const onLogin = (details) => {
    registeredUsers.forEach((user) => {
      if (user.email === details.email && user.password === details.password) {
        setCurrentUser(registeredUsers[user.id]);

        setIsLoggedIn(true);

        select(".error").style.opacity = "0";
      } else {
        select(".error").style.opacity = "1";
      }
    });
  };

  const onLogOut = (state) => {
    setIsLoggedIn(state);
  };

  if (isLoggedIn) {
    return (
      <Dashboard
        name={currentUser.name}
        email={currentUser.email}
        balance={currentUser.balance}
        onLogOut={onLogOut}
      />
      // <Routes>
      //   <Route exact path="/homepage" element={<Homepage />} />
      //   <Route exact path="/dashboard" element={<Dashboard />} />
      // </Routes>
    );
  } else {
    return (
      <Routes>
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} />} />
      </Routes>
    );
  }
}

export default App;
