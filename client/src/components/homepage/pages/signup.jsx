import { React, useState, useRef } from "react";
import "../../../styles/homepage/signup.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useEffect } from "react";

export default function Signup(props) {
  const { users } = props;
  const error = useRef(null);
  //   const users = JSON.parse(localStorage.getItem("users"));

  const [newDetails, setNewDetails] = useState({
    name: "",
    email: "",
    password: "",
    balance: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });

  const [thisError, setThisError] = useState();
  const removeNameSign = useRef(null);
  const removeEmailSign = useRef(null);
  const removePassSign = useRef(null);
  const removeNameInput = useRef(null);
  const removeEmailInput = useRef(null);
  const removePassInput = useRef(null);
  const submit = useRef(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isValid) {
      error.current.style.color = "green";
      setThisError("Account created successfully!");
      users.push(newDetails);
      localStorage.setItem("users", JSON.stringify(users));

      removeNameInput.current.value = "";
      removeNameSign.current.style.display = "flex";
      removeEmailInput.current.value = "";
      removeEmailSign.current.style.display = "flex";
      removePassInput.current.value = "";
      removePassSign.current.style.display = "flex";
    }
  }, [isValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      newDetails.name === "" &&
      newDetails.email === "" &&
      newDetails.password === ""
    ) {
      setThisError("Enter your new account details.");
    } else if (newDetails.email === "" && newDetails.password === "") {
      setThisError("Email and Password cannot be blank.");
    } else if (newDetails.name === "" && newDetails.password === "") {
      setThisError("Full name and Password is blank.");
    } else if (newDetails.name === "" && newDetails.email === "") {
      setThisError("Full name and Email is blank.");
    } else if (newDetails.name === "" || newDetails.name.trim() === "") {
      setThisError("Full name cannot be blank.");
    } else if (newDetails.email === "" || newDetails.email.trim() === "") {
      setThisError("Email Address cannot be blank.");
    } else if (
      newDetails.password === "" ||
      newDetails.password.trim() === ""
    ) {
      setThisError("Password cannot be blank.");
    } else {
      setIsValid(true);
    }

    onCreate(newDetails);
  };

  const onCreate = (newDetails) => {
    users.map((user) => {
      if (user.email === newDetails.email) {
        setIsValid(false);
        error.current.style.color = "red";
        console.log("Email Exists");
        setThisError("Email already exists!");
      }
    });
    error.current.style.display = "flex";
    submit.current.style.margin = "0rem 0 0.5rem";
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

    submit.current.style.margin = "2.2rem 0 0.5rem";
    error.current.style.display = "none";
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
              ref={removeNameInput}
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
              ref={removeEmailInput}
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
              minLength="4"
              onChange={(e) => setData(e, removePassSign)}
              ref={removePassInput}
            />
          </div>
          <div className="error" ref={error}>
            {thisError}
          </div>
          <input
            className="submit"
            type="submit"
            value="Create Account"
            ref={submit}
          />
        </form>
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
