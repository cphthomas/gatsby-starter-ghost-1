/**
 * Use the CSS tab above to style your Element's container.
 */
import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import "../../styles/stripecard.css";

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};
function CardSection() {
    return (
        <label>
            <p>Kreditkort oplysninger</p>
            <CardElement
                options={CARD_ELEMENT_OPTIONS}
                className="StripeElement"
            />
        </label>
    );
}
export default CardSection;
