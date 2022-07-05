import Homepage from "./components/homepage/index";
import Login from "./components/homepage/pages/login";
import Signup from "./components/homepage/pages/signup";
import "./styles/app.css";
import { React, useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/index";
import PrivateRoutes from "./privateRoutes";
import Users from "./users";

function App() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(Users)); //initialize data to localStorage
  }

  const users = JSON.parse(localStorage.getItem("users"));
  const [currentUser, setCurrentUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const errorLogin = useRef(null);
  const submitLogin = useRef(null);

  const onLogin = (details) => {
    users.map((user) => {
      if (user.email === details.email && user.password === details.password) {
        setCurrentUser(user.email);

        setIsLoggedIn(true);

        localStorage.setItem("isLoggedIn", JSON.stringify(true));
      } else {
        errorLogin.current.style.display = "flex";
      }
    });
  };

  const onLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(true);
  };

  return (
    <>
      {/* {isLoggedIn && <Dashboard email={currentUser} onLogOut={onLogOut} />} */}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/dashboard/*"
            element={<Dashboard email={currentUser} onLogOut={onLogOut} />}
          ></Route>
        </Route>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/login"
          element={
            <Login
              onLogin={onLogin}
              error={errorLogin}
              isLoggedIn={isLoggedIn}
              submitLogin={submitLogin}
            />
          }
        />
        <Route exact path="/signup" element={<Signup users={users} />} />
      </Routes>
    </>
  );
}

export default App;
