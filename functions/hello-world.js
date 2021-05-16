const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { email } = JSON.parse(event.body);
    const customer = await stripe.customers.create({
        email: email,
    });

    return {
        statusCode: 200,
        body: "Hello world!",
    };
};
