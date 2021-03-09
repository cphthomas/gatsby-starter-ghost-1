import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

(async () => {
    const customer = await stripe.customers.create({
        email: "customer@example.com",
    });

    console.log(customer.id);
})();
