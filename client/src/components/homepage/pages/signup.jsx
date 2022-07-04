import { React, useState, useRef } from "react";
import "../../../styles/homepage/signup.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useEffect } from "react";

export default function Signup(props) {
  const { users } = props;
  const error = useRef(null);
  const success = useRef(null);

  const [newDetails, setNewDetails] = useState({
    name: "",
    email: "",
    password: "",
    balance: 0,
    imageUrl: "",
  });

  const [isError, setIsError] = useState();
  const removeNameSign = useRef(null);
  const removeEmailSign = useRef(null);
  const removePassSign = useRef(null);

  const onCreate = (newDetails) => {
    users.map((user) => {
      if (newDetails.email !== user.email) {
        users.push(newDetails);
        localStorage.setItem("users", JSON.stringify(users));
        success.current.display = "flex";
      } else {
        error.current.style.opacity = "1";
      }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      newDetails.password === "" &&
      newDetails.email === "" &&
      newDetails.password === ""
    ) {
      setIsError("Enter your new account details.");
    } else if (newDetails.email === "" && newDetails.password === "") {
      setIsError("Email and Password cannot be blank.");
    } else if (newDetails.name === "") {
      setIsError("Full name cannot be blank.");
    } else if (newDetails.email === "") {
      setIsError("Email Address cannot be blank.");
    } else if (newDetails.password === "") {
      setIsError("Password cannot be blank.");
    } else if (users.map((user) => user.email !== newDetails.email)) {
      setIsError("Email already exists.");
    } else {
    }

    onCreate(newDetails);
    error.current.style.opacity = "1";
  };

  const setData = (e, dom) => {
    if (dom === removeNameSign) {
      setNewDetails({ ...newDetails, name: e.target.value });
    } else if (dom === removeEmailSign) {
      setNewDetails({ ...newDetails, email: e.target.value });
    } else if (dom === removePassSign) {
      setNewDetails({ ...newDetails, password: e.target.value });
    }

    if (e.target.value === "") {
      dom.current.style.display = "flex";
    } else {
      dom.current.style.display = "none";
    }

    error.current.style.opacity = "0";
  };

  return (
    <div className="signup-user">
      <div className="signup-container">
        <img src={logo} alt="logo"></img>
        <p>Sign up</p>
        <form className="input-form" onSubmit={submitHandler}>
          <div className="name">
            <label className="label-name" htmlFor="name" ref={removeNameSign}>
              Full Name
            </label>
            <input
              autoComplete="name"
              className="input-name"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setData(e, removeNameSign)}
            />
          </div>
          <div className="email">
            <label
              className="label-email"
              htmlFor="email"
              ref={removeEmailSign}
            >
              Email Address
            </label>
            <input
              autoComplete="username"
              className="input-email"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setData(e, removeEmailSign)}
            />
          </div>
          <div className="pass">
            <label
              className="label-pass"
              htmlFor="password"
              ref={removePassSign}
            >
              Password
            </label>
            <input
              autoComplete="current-password"
              className="input-pass"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setData(e, removePassSign)}
            />
          </div>
          <div className="error" ref={error}>
            {isError}
          </div>
          <div className="success" ref={success}>
            Account Successfully Created!
          </div>
          <input className="submit" type="submit" value="Create Account" />
        </form>
        {/* <a href="#">
          <button className="create">Create new account</button>
        </a> */}
        <Link className="already" to="/login">
          Already have an account?
        </Link>

        <Link to="/" className="return">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
