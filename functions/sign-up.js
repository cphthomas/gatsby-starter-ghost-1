const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { email } = JSON.parse(event.body);
    //console.log(email);
    const customer = await stripe.customers.create({
        email: email,
    });

    // subscribe the new customer to the free plan
    await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: "price_1IKAnIIP8uHvYRBy68pRrArU" }],
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ customerId: customer.id }),
    };
};
