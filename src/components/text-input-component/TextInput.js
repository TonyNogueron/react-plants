import { useState } from "react";

import "./message.css";
//import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
//import { render } from "@testing-library/react";

export default function Register() {
  // States for registration
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleUsername = (e) => {
	if(e.target.value){

	}
    setUsername(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {username} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const animateToRegister = () => {
    // get document by id
    const register = document.getElementById("register_background");
    const login = document.getElementById("login");
    const slider = document.getElementById("borderFuera");
    // dissapear login
    login.style.display = "none";
    slider.style.display = "none";
    // appear register
    register.style.display = "block";

  };

  
  const cancelRegister = () => {
    // get document by id
    const register = document.getElementById("register_background");
    const login = document.getElementById("login");
    const slider = document.getElementById("borderFuera");
    // dissapear login
    login.style.display = "block";
    
    // appear register
    register.style.display = "none";
    slider.style.display = "block";
  }

  return (
    <>
      <section id="login">
        <h2>Welcome to Planty!</h2>
        {/*form with js*/}
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
            />
          </li>
          <li>
            <button type="submit" id="LoginButton" onclick="login()">
              Login
            </button>
          </li>
          <li>
            <button
              type="submit"
              id="register_button"
              // Onclick will call the function that will animate the register form
              onClick={animateToRegister}
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
			        onChange={handleUsername}
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
			        onChange={handlePassword}
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
            />
          </li>
          <li>
            <button type="submit" id="register_button" onclick="addRegister()">
              Join!
            </button>
          </li>
          <li>
            <button 
            type="submit" 
            id="cancel" 
            onClick={cancelRegister}
            >
              Cancel
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}