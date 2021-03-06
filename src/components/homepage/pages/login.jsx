import { React, useState, useRef } from "react";
import "../../../styles/homepage/login.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Login(props) {
  const { error, isLoggedIn, onLogin, submitLogin } = props;
  const [details, setDetails] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState();
  const removeEmailLabel = useRef(null);
  const removePassLabel = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.email === "" && details.password === "") {
      setIsError("Enter your Email and Password.");
    } else if (details.email === "") {
      setIsError("Email Address cannot be blank.");
    } else if (details.password === "") {
      setIsError("Password cannot be blank.");
    } else {
      setIsError("Account does not exist!");
    }

    onLogin(details);
  };

  const setEmail = (e) => {
    setDetails({ ...details, email: e.target.value });

    if (e.target.value === "") {
      removeEmailLabel.current.style.display = "flex";
    } else {
      removeEmailLabel.current.style.display = "none";
    }

    error.current.style.display = "none";
    submitLogin.current.style.margin = "2rem 0 0.5rem";
  };

  const setPassword = (e) => {
    setDetails({ ...details, password: e.target.value });

    if (e.target.value === "") {
      removePassLabel.current.style.display = "flex";
    } else {
      removePassLabel.current.style.display = "none";
    }
    error.current.style.display = "none";
    submitLogin.current.style.margin = "2rem 0 0.5rem";
  };

  const ConditionalLink = () => {
    const element = (
      <input
        className="submit"
        type="submit"
        value="Sign In"
        ref={submitLogin}
      />
    );

    return isLoggedIn ? (
      <Link to={"/dashboard/overview"}>{element}</Link>
    ) : (
      <>{element}</>
    );
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
          <div className="error" ref={error}>
            {isError}
          </div>
          <ConditionalLink />
        </form>
        <a href="#">Forgot your password?</a>
        <span>Don't have a Banko account?</span>
        <Link to="/signup">
          <button className="create">Create new account</button>
        </Link>
        <Link to="/" className="return">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
