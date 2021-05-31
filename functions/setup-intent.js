const stripe = require("stripe")(process.env.GATSBY_STRIPE_SK_KEY);

exports.handler = async function (event) {
    const { customerId } = JSON.parse(event.body);

    const intent = await stripe.setupIntents.create({
        customer: customerId,
    });

    return {
        statusCode: 200,
        body: JSON.stringify(intent),
    };
};
