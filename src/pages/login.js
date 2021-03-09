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
            .then((res) => res.text())
            .then((text) => console.log(text));
    }
    return (
        <div>
            <p onClick={login}>login</p>
        </div>
    );
}

export default BlogPostTemplate;
