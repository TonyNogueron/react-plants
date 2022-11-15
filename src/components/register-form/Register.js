import React, { useState } from "react";
import styles from "./Register.css";
import axios from "axios";

export default function Register() {
  const [usernameRegister, serUsernameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPasswordRegister, setConfirmPasswordRegister] = useState("");

  const [usernameWarn, setUsernameWarn] = useState("");
  const [emailWarn, setEmailWarn] = useState("");

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

  // Handling the form registration
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if (
      usernameRegister === "" ||
      emailRegister === "" ||
      passwordRegister === "" ||
      confirmPasswordRegister === ""
    ) {
      //Error "All fields are required"
    } else {
      //Submit, after validation
      const isUsernameValid = await validateUsername(usernameRegister);
      const isEmailValid = validateEmail(emailRegister);

      if (isUsernameValid && isEmailValid) {
        //Submit
      }
    }
  };

  const validateUsername = async (username) => {
    let answer = false;
    await axios
      .post("http://localhost:3001/user/validate", { username })
      .then((res) => {
        if (res.status === 202) {
          answer = true;
          setUsernameWarn("");
        } else {
          answer = false;
          setUsernameWarn("Username already exists");
        }
      })
      .catch((err) => {
        answer = false;
      });
    return answer;
  };

  const validateEmail = (email) => {
    let ans = false;
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      setEmailWarn("Not a valid e-mail address");
      ans = false;
    } else {
      setEmailWarn("");
      ans = true;
    }
    return ans;
  };

  return (
    <>
      <section id="register_background">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="register_form">
                <h1>Welcome to Planty!</h1>
                <form className="form">
                  <div className="form-group">
                    <label form="inputUsername">Username</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter a username"
                      onChange={handleUsernameRegister}
                    />
                    {usernameWarn !== "" && (
                      <small id="usernameWarn" className="text-muted">
                        {usernameWarn}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <label form="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={handleEmailRegister}
                    />
                    {emailWarn !== "" && (
                      <small id="emailWarn" className="form-text text-muted">
                        {emailWarn}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <label form="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={handlePasswordRegister}
                    />
                  </div>
                  <div className="form-group">
                    <label form="exampleInputPassword1">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={handleConfirmPasswordRegister}
                    />
                  </div>
                  <button
                    type="submit"
                    className="submitButton"
                    onClick={handleSubmitRegister}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
