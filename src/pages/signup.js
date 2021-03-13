import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./Login.css";
import { Layout } from "../components/common";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/login.css';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/.netlify/functions/hello-world", {
            method: "POST",
            body: JSON.stringify({ email }),
        })
            .then((response) => response.text())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <Layout>
            <div>
                <form>
                    <h3 className="page-title">Sign Up</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Full name</label>
                        <input
                            type="name"
                            className="form-control"
                            placeholder="Enter full name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block btn-color">
                        Sign Up
                    </button>
                    <p className="forgot-password text-right">
                        Already a member ? <a href="/login">Sign In</a>
                    </p>
                </form>
            </div>
        </Layout>
    );
}
