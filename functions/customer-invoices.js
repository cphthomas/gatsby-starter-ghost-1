const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { customerStripeId } = JSON.parse(event.body);
    //console.log(userStripeId);

    const invoices = await stripe.invoices.list({
        customer: customerStripeId,
        limit: 1,
    });

    //console.log(invoices);

    return {
        statusCode: 200,
        body: JSON.stringify(invoices),
    };
};
