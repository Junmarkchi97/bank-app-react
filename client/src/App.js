import Homepage from "./components/homepage/index";
import Login from "./components/homepage/pages/login";
// import Signup from './components/homepage/pages/signup'
import "./styles/app.css";
import { React, useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/index";
import PrivateRoutes from "./privateRoutes";
import Users from "./users";

function App() {
  const [members, setMembers] = useState(Users);
  const [currentUser, setCurrentUser] = useState([]); //Current User Logged In
  const [isLoggedIn, setIsLoggedIn] = useState(false); //If User Logged In
  const [balance, setBalance] = useState(0);
  const error = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch();
      const data = await res.json();

      console.log(data);
    };

    fetchData();
  }, []);

  const onLogin = (details) => {
    Users.map((user) => {
      if (user.email === details.email && user.password === details.password) {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setBalance(user.balance);
      } else {
        error.current.style.opacity = "1";
      }
    });
  };

  const onLogOut = (value) => {
    setIsLoggedIn(value);
    setCurrentUser([]);
  };

  return (
    <Routes>
      <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
        <Route
          path="/dashboard/*"
          element={
            <Dashboard
              name={currentUser.name}
              email={currentUser.email}
              balance={balance}
              onLogOut={onLogOut}
              isLoggedIn={isLoggedIn}
              setBalance={setBalance}
              image={currentUser.imageUrl}
            />
          }
        ></Route>
      </Route>
      <Route exact path="/" element={<Homepage />} />
      <Route
        exact
        path="/login"
        element={
          <Login onLogin={onLogin} error={error} isLoggedIn={isLoggedIn} />
        }
      />
    </Routes>
  );
}

export default App;
