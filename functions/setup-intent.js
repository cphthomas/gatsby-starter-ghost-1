const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

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
