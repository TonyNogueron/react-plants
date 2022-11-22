import React, { useState } from "react";
import styles from "./Register.css";
import axios from "axios";
import ProgressBar from "../progress-bar-component/ProgressBar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import url from "../../config/apiConfig";

export default function Register() {
  const navigate = useNavigate();

  const [usernameRegister, serUsernameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPasswordRegister, setConfirmPasswordRegister] = useState("");

  const [usernameWarn, setUsernameWarn] = useState("");
  const [emailWarn, setEmailWarn] = useState("");
  const [passwordWarn, setPasswordWarn] = useState("");
  const [confirmPasswordWarn, setConfirmPasswordWarn] = useState("");

  const [progress, setProgress] = useState(30);

  // Handling the register
  const handleUsernameRegister = (e) => {
    serUsernameRegister(e.target.value);
  };
  const handleEmailRegister = (e) => {
    setEmailRegister(e.target.value);
  };
  const handlePasswordRegister = (e) => {
    setPasswordRegister(e.target.value);
    onTypePasswordValidation(e.target.value);
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All the fields are required!",
      });
    } else {
      //Submit, after validation
      const isUsernameValid = await validateUsername(usernameRegister);
      const isEmailValid = validateEmail(emailRegister);
      const isPasswordValid = validatePassword(passwordRegister);
      const isConfirmPasswordValid = validateConfirmPassword(
        confirmPasswordRegister
      );

      if (
        isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid
      ) {
        //Submit
        const data = {
          username: usernameRegister,
          email: emailRegister,
          psswd: passwordRegister,
        };
        await axios
          .post(url + "user", data)
          .then((res) => {
            Swal.fire(
              {
                icon: "success",
                title: "Success",
                text: "Your account has been created!",
              },
              navigate("/login")
            );
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
            console.log(err);
          });
      }
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword === passwordRegister) {
      setConfirmPasswordWarn("");
    } else {
      setConfirmPasswordWarn("Password does not match");
      return false;
    }
    return true;
  };

  const validateUsername = async (username) => {
    let answer = false;
    await axios
      .post(url + "user/validate", { username })
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

  const validatePassword = (password) => {
    let ans = false;
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    );
    var mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))"
    );
    if (password.length < 8) {
      ans = false;
      setPasswordWarn("Password must be at least 8 characters long");
    } else {
      if (strongRegex.test(password)) {
        ans = true;
        setPasswordWarn("");
        //Good password
        setProgress(100);
      } else if (mediumRegex.test(password)) {
        ans = false;
        setPasswordWarn(
          "Password must contain at least one number, one lowercase and one uppercase letter and one special character (!@#$%^&*)"
        );
        // Medium password
        setProgress(70);
      } else {
        ans = false;
        setPasswordWarn(
          "Password must contain at least one number, one lowercase and one uppercase letter and one special character (!@#$%^&*)"
        );
        // Weak password
        setProgress(40);
      }
    }
    return ans;
  };

  const onTypePasswordValidation = (password) => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})"
    );
    var mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(.{5,})"
    );
    if (strongRegex.test(password)) {
      //Good password
      setProgress(100);
    } else if (mediumRegex.test(password)) {
      // Medium password
      setProgress(70);
    } else {
      // Weak password
      setProgress(40);
    }
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
                    <ProgressBar progress={progress} />
                    {passwordWarn !== "" && (
                      <small id="passwordWarn" className="form-text text-muted">
                        {passwordWarn}
                      </small>
                    )}
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
                    {confirmPasswordWarn !== "" && (
                      <small
                        id="confirmPasswordWarn"
                        className="form-text text-muted"
                      >
                        {confirmPasswordWarn}
                      </small>
                    )}
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
