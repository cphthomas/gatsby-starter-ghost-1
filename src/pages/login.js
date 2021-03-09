import React from "react";
import { graphql } from "gatsby";
import Stripe from "stripe";

function BlogPostTemplate(props) {
    //const post = props.data.markdownRemark
    function login() {
        const stripe = new Stripe("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");
        console.log(stripe);
        stripe.customers
            .create({
                email: "customer@example.com",
            })
            .then((customer) => console.log(customer.id))
            .catch((error) => console.error(error));
    }
    return (
        <div>
            <p onClick={login}>login</p>
        </div>
    );
}

export default BlogPostTemplate;
