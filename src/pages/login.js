import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./Login.css";
import { Layout } from "../components/common";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
import Cookies from "universal-cookie";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");

    useEffect(() => {
        const cookies = new Cookies();
        console.log(cookies.get("loggedInUser"));
        if (cookies.get("loggedInUser")) {
            window.location.href = "/";
        }
    }, []);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setShowMessage(false);
        if (password.length < 6) {
            setMessageColor("red");
            setMessage("Password length shouldn't be less than six.");
            setShowMessage(true);
            return;
        }
        let customerId;
        let planId;
        const cookies = new Cookies();
        await fetch("/.netlify/functions/user-log-in", {
            method: "POST",
            body: JSON.stringify({ email, password, password }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error == "1") {
                    setMessageColor("red");
                    setMessage(responseJson.message);
                } else if (responseJson.planId == "0") {
                    customerId = responseJson.customerId;
                    planId = responseJson.planId;
                    setMessageColor("green");
                    setMessage(
                        "Logged in successfully, you don't have any plan redirecting to stripe checkout.."
                    );
                    cookies.set("loggedInUser", email, {
                        path: "/",
                        maxAge: 31536000,
                    });
                } else {
                    planId = responseJson.planId;
                    setMessageColor("green");
                    setMessage("Logged in successfully");
                    cookies.set("loggedInUser", email, {
                        path: "/",
                        maxAge: 31536000,
                    });
                    window.location.href = "/";
                }
                setShowMessage(true);
            })
            .catch((error) => {
                console.error(error);
            });

        if (planId == "0") {
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
                            maxLength="12"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!validateForm()}
                        className="btn btn-primary btn-block btn-color"
                    >
                        Log In
                    </button>
                    {showMessage ? (
                        <p className="message" style={{ color: messageColor }}>
                            {message}
                        </p>
                    ) : null}
                    <p className="forgot-password text-right">
                        Not a member ? <a href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
        </Layout>
    );
}
