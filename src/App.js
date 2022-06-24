import Homepage from "./components/homepage/homepage";
import Login from "./components/homepage/pages/login";
// import Signup from './components/homepage/pages/signup'
import "./styles/app.css";
import { Fragment, React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.jsx";
import { select } from "./utils";

function App() {
  const [user, setUser] = useState({ name: "", email: "" }); //Current User Logged In
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const adminUser = {
    name: "Junmark Chi",
    email: "chi@admin.com",
    password: "12345678",
  };

  localStorage.setItem("adminUser", JSON.stringify(adminUser));

  const onLogin = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: adminUser.name,
        email: details.email,
      });

      setIsLoggedIn(true);

      select(".error").style.opacity = "0";
    } else {
      select(".error").style.opacity = "1";
    }
  };

  const localLogged = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (isLoggedIn) {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));

    return (
      <Dashboard email={user.email} name={user.name} />
      // <Routes>
      //   <Route exact path="/homepage" element={<Homepage />} />
      //   <Route exact path="/dashboard" element={<Dashboard />} />
      // </Routes>
    );
  } else {
    return (
      <Routes>
        <Route exact path="/homepage" element={<Homepage />} />
        <Route
          exact
          path="/login"
          element={<Login onLogin={onLogin} isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    );
  }
}

export default App;
