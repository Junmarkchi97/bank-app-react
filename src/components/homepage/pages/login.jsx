import { React, useState, useRef } from "react";
import "../../../styles/homepage/login.css";
import logo from "../../../assets/logo.png";
import { select } from "../../../utils";
import { Link } from "react-router-dom";

export default function Login({ onLogin, isLoggedIn }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const removeEmailLabel = useRef(null);
  const removePassLabel = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    onLogin(details);
  };

  const setEmail = (e) => {
    setDetails({ ...details, email: e.target.value });

    if (removeEmailLabel.current.value == "") {
      removeEmailLabel.current.style.display = "flex";
    } else {
      removeEmailLabel.current.style.display = "none";
    }

    select(".error").style.opacity = "0";
  };

  const setPassword = (e) => {
    setDetails({ ...details, password: e.target.value });

    if (removePassLabel.current.value !== "") {
      removePassLabel.current.remove();
    } else {
      removePassLabel.current.add();
    }

    select(".error").style.opacity = "0";
  };

  const element = <input className="submit" type="submit" value="Sign In" />;

  const ConditionalLink = ({ element, to, isLoggedIn }) => {
    return isLoggedIn ? <Link to={to}>{element}</Link> : <>{ element }</>;
  };

  return (
    <div className="login-user">
      <div className="login-container">
        <img src={logo} alt="logo"></img>
        <p>Sign in</p>
        <form onSubmit={submitHandler} className="input-form">
          <div className="email">
            <label
              className="label-email"
              htmlFor="email"
              ref={removeEmailLabel}
            >
              Email Address
            </label>
            <input
              autoComplete="username"
              className="input-email"
              type="email"
              name="email"
              id="email"
              onChange={setEmail}
              value={details.email}
            />
          </div>
          <div className="pass">
            <label
              className="label-pass"
              htmlFor="password"
              ref={removePassLabel}
            >
              Password
            </label>
            <input
              autoComplete="current-password"
              className="input-pass"
              type="password"
              name="password"
              id="password"
              onChange={setPassword}
              value={details.password}
            />
          </div>
          <div className="error">Account does not exist!</div>
          <ConditionalLink
            element={element}
            to="/dashboard"
            condition={isLoggedIn}
          ></ConditionalLink>
        </form>
        <a href="#">Forgot your password?</a>
        <span>Don't have a Banko account?</span>
        <a href="#">
          <button className="create">Create new account</button>
        </a>

        <Link to="/homepage" className="return">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
