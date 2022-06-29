import Homepage from "./components/homepage/index";
import Login from "./components/homepage/pages/login";
// import Signup from './components/homepage/pages/signup'
import "./styles/app.css";
import { React, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/index";
import PrivateRoutes from "./privateRoutes";

function App() {
  const [currentUser, setCurrentUser] = useState(""); //Current User Logged In
  const [isLoggedIn, setIsLoggedIn] = useState(false); //If User Logged In
  const [balance, setBalance] = useState(0);
  const error = useRef(null);

  // useEffect(() => {
  //   fetch("/users")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => {
  //       setItems(jsonRes);
  //     })
  //     .catch((err) => console.log(err));
  // }, [items]);

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

  const onLogin = (details, isCorrect) => {
    registeredUsers.forEach((user) => {
      if (user.email === details.email && user.password === details.password) {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setBalance(user.balance);

        return isCorrect(true);
      } else {
        error.current.style.opacity = "1";
      }
    });
  };

  const onLogOut = (value) => {
    setIsLoggedIn(value);
    setCurrentUser("");
  };

  // if (isLoggedIn) {
  //   return (
  //     // <Navigate to="/dashboard" replace={true} />
  //     <>
  //       <Dashboard
  // name={currentUser.name}
  // email={currentUser.email}
  // balance={balance}
  // onLogOut={onLogOut}
  // isLoggedIn={isLoggedIn}
  // setBalance={setBalance}
  //       />
  //       <Homepage />
  //       <Routes>
  //         <Route path="/homepage" element={<Homepage />} />
  //       </Routes>
  //     </>
  //         name={currentUser.name}
  //         email={currentUser.email}
  //         balance={currentUser.balance}
  //         onLogOut={onLogOut}
  //         isLoggedIn={isLoggedIn}
  //       />
  //     }
  //   ></Route>
  // </Routes>
  // // <Dashboard
  //   name={currentUser.name}
  //   email={currentUser.email}
  //   balance={currentUser.balance}
  //   onLogOut={onLogOut}
  //   isLoggedIn={isLoggedIn}
  // />
  //   );
  // } else {
  // const token = localStorage.getItem("isLoggedIn");

  return (
    <Routes>
      <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              name={currentUser.name}
              email={currentUser.email}
              balance={balance}
              onLogOut={onLogOut}
              isLoggedIn={isLoggedIn}
              setBalance={setBalance}
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
