const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { email } = JSON.parse(event.body);
    //console.log(email);
    const customer = await stripe.customers.create({
        email: email,
    });

    //console.log(customer.id);

    return {
        statusCode: 200,
        body: JSON.stringify({ customerId: customer.id }),
    };
};
