import { useState } from "react";
import "./LoginRegister.css";
import axios from "axios";

export default function Login() {
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
      <section id="login" className="loginForm">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="loginForm__container">
                        <div className="loginForm__container__title">
                            <h1>Log in</h1>
                        </div>
                        <div className="loginForm__container__form">
                            <form onSubmit={handleSubmitLogin}>
                                <div className="loginForm__container__form__input">
                                    <input type="text" placeholder="Username" onChange={handleUsernameLogin} />
                                </div>
                                <div className="loginForm__container__form__input">
                                    <input type="password" placeholder="Password" onChange={handlePasswordLogin} />
                                </div>
                                <div className="loginForm__container__form__input">
                                    <button type="submit">Log in</button>
                                </div>
                            </form>
                            <div className="GoToRegister">
                                <p>Don't have an account? <a href="#register">Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
