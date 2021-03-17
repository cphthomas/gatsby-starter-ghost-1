import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./Login.css";
import { Layout } from "../components/common";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        let customerId;
        event.preventDefault();
        await fetch("/.netlify/functions/sign-up", {
            method: "POST",
            body: JSON.stringify({ email }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.customerId);
                customerId = responseJson.customerId;
            })
            .catch((error) => {
                console.error(error);
            });

        if (customerId) {
            //alert("Go to checkout");
            await fetch("/.netlify/functions/create-stripe-checkout", {
                method: "POST",
                body: JSON.stringify({ customerId }),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    window.location.href = responseJson;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    return (
        <Layout>
            <div className="form-div">
                <form onSubmit={handleSubmit}>
                    <h3 className="page-title">Sign Up</h3>

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
                        <label>Full name</label>
                        <input
                            type="name"
                            className="form-control"
                            placeholder="Enter full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        className="btn btn-primary btn-block btn-color"
                        disabled={!validateForm()}
                    >
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
