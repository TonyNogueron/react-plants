import { useState } from "react";
import "./LoginRegister.css";
import axios from "axios";

export default function Register() {
  // States for login
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  //States for registration
  const [usernameRegister, serUsernameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPasswordRegister, setConfirmPasswordRegister] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the register
  const handleUsernameRegister = (e) => {
    serUsernameRegister(e.target.value);
  };
  const handleEmailRegister = (e) => {
    setEmailRegister(e.target.value);
  };
  const handlePasswordRegister = (e) => {
    setPasswordRegister(e.target.value);
  };
  const handleConfirmPasswordRegister = (e) => {
    setConfirmPasswordRegister(e.target.value);
  };

  // Handling the name change
  const handleUsernameLogin = (e) => {
    setUsernameLogin(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (usernameLogin === "" || passwordLogin === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Handling the form registration
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if (
      usernameRegister === "" ||
      emailRegister === "" ||
      passwordRegister === "" ||
      confirmPasswordRegister === ""
    ) {
      setError(true);
    } else {
      const usernameStatus = await validateUsername(usernameRegister);
      console.log(usernameStatus);
      if (usernameStatus === "available") {
        console.log("Username available");
      } else if (usernameStatus === "occupied") {
        console.log("Username occupied");
      } else {
        //error handling
        console.log("Error");
      }
      setSubmitted(true);
      setError(false);
    }
  };

  const validateUsername = async (username) => {
    await axios
      .post("http://localhost:3001/user/validate", { username })
      .then((res) => {
        console.log(res);
        if (res.status === 202) {
          return "available";
        } else {
          return "occupied";
        }
      })
      .catch((err) => {
        return "error";
      });
  };





  return (
    <>
      <section id="login">
        <h2>Welcome to Planty!</h2>
        <ul>
          <li>
            <label htmlFor="username" id="UserNameHeader">
              Username:
            </label>
          </li>
          <li>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleUsernameLogin}
            />
          </li>
          <li>
            <label htmlFor="password" id="PasswordHeader">
              Password:
            </label>
          </li>
          <li>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handlePasswordLogin}
            />
          </li>
          <li>
            <button type="submit" id="LoginButton" onClick={handleSubmitLogin}>
              Login
            </button>
          </li>
          <li>
            <button
              type="submit"
              id="register_button"
              // Onclick will call the function that will animate the register form
            >
              Register
            </button>
          </li>
        </ul>
      </section>
      <section id="register_background">
        <h2 id="join_header"> Join the Planty family! </h2>
        <ul>
          <li>
            <label htmlfor="username" id="UserNameHeader">
              Username
            </label>
          </li>
          <li>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleUsernameRegister}
            />
          </li>
          <li>
            <label htmlfor="email" id="UserNameHeader">
              Email
            </label>
          </li>
          <li>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email"
              onChange={handleEmailRegister}
            />
          </li>
          <li>
            <label htmlfor="password" id="PasswordHeader">
              Password
            </label>
          </li>
          <li>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handlePasswordRegister}
            />
          </li>
          <li>
            <label htmlfor="confirmPassword" id="PasswordHeader">
              Confirm Password
            </label>
          </li>
          <li>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleConfirmPasswordRegister}
            />
          </li>
        </ul>
        <button type="submit" id="cancel">
          Cancel
        </button>
        <button
          type="submit"
          id="register_button"
          onClick={handleSubmitRegister}
        >
          Join!
        </button>
      </section>
    </>
  );
}
