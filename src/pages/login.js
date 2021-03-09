import React from "react";
import { graphql } from "gatsby";
import Stripe from "stripe";

//const stripe = new Stripe("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

function BlogPostTemplate(props) {
    //const post = props.data.markdownRemark
    async function login() {
        //console.log(stripe.customers.create);
        // stripe.customers
        //     .create({
        //         email: "as47986@gmail.com",
        //     })
        //     .then((customer) => console.log("cust"))
        //     .catch((error) => console.error("err"));
        //console.log(customer);
        fetch("/.netlify/functions/hello-world")
            .then((response) => response.text())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div>
            <p onClick={login}>login</p>
        </div>
    );
}

export default BlogPostTemplate;
