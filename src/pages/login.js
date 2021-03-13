import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./Login.css";
import { Layout } from "../components/common";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        // fetch("/.netlify/functions/hello-world", {
        //     method: "POST",
        //     body: JSON.stringify({ email }),
        // })
        //     .then((response) => response.text())
        //     .then((responseJson) => {
        //         console.log(responseJson);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }

    return (
        <Layout>
            <div className="form-div">
                <form onSubmit={handleSubmit}>
                    <h3 className="page-title">Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!validateForm()}
                        className="btn btn-primary btn-block btn-color"
                    >
                        Log In
                    </button>
                    <p className="forgot-password text-right">
                        Not a member ? <a href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
        </Layout>
    );
}
