const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { customerStripeId } = JSON.parse(event.body);
    //console.log(customerStripeId);

    const paymentMethods = await stripe.paymentMethods.list({
        customer: customerStripeId,
        type: "card",
    });

    //console.log(paymentMethods);

    return {
        statusCode: 200,
        body: JSON.stringify(paymentMethods),
    };
};
