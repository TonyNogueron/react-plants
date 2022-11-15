import React, {useState} from "react";
import styles from "./Register.css";
export default function Register() {
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
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a username" />
                                        <small id="usernameWarn" className="text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label form="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailWarn" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label form="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label form="exampleInputPassword1">Confirm Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="submitButton">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}