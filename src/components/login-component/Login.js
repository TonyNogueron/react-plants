import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";
import Swal from "sweetalert2";
import axios from "axios";
import url from "../../config/apiConfig";

function Login() {
  const navigate = useNavigate();
  // States for login
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  // Handling the name change
  const handleUsernameLogin = (e) => {
    setUsernameLogin(e.target.value);
  };

  // Handling the password change
  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value);
  };

  // Handling the form submission
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (usernameLogin === "" || passwordLogin === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All the fields are required!",
      });
    } else {
      // Submit, after validation
      axios
        .post(url + "user/login", {
          username: usernameLogin,
          psswd: passwordLogin,
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "You have successfully logged in!",
            });
            navigate("/UserMainPage");
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("idUser", res.data.idUser);
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect username or password!",
          });
        });
    }
  };

  return (
    <section id="login" className="loginForm">
      <div className="login-container">
        <div className="row">
          <div className="col">
            <div className="loginForm__container">
              <div className="loginForm__container__title">
                <h1>Welcome to Planty!</h1>
              </div>
              <div className="loginForm__container__form">
                <form onSubmit={handleSubmitLogin} className="formLogin">
                  <div className="loginForm__container__form__input">
                    <input
                      type="text"
                      placeholder="Username"
                      onChange={handleUsernameLogin}
                    />
                  </div>
                  <div className="loginForm__container__form__input">
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={handlePasswordLogin}
                    />
                  </div>
                </form>
                <button type="submit" onClick={handleSubmitLogin}>
                  Login
                </button>
                <div className="GoToRegister">
                  <p>
                    Don't have an account?{" "}
                    <a onClick={() => navigate("/RegisterPage")}>Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
