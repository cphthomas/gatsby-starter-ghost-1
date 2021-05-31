const stripe = require("stripe")(process.env.GATSBY_STRIPE_SK_KEY);

exports.handler = async function (event) {
    const { customerStripeId } = JSON.parse(event.body);

    const paymentMethods = await stripe.paymentMethods.list({
        customer: customerStripeId,
        type: "card",
    });

    return {
        statusCode: 200,
        body: JSON.stringify(paymentMethods),
    };
};
