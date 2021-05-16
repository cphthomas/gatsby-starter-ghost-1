const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { customerStripeId } = JSON.parse(event.body);

    const invoices = await stripe.invoices.list({
        customer: customerStripeId,
        limit: 1,
    });

    return {
        statusCode: 200,
        body: JSON.stringify(invoices),
    };
};
