const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function () {
    const customer = await stripe.customers.create({
        email: "customer@example.com",
    });

    console.log(customer.id);

    return {
        statusCode: 200,
        body: "Hello world!",
    };
};
