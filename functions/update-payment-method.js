const stripe = require("stripe")(process.env.GATSBY_STRIPE_SK_KEY);

exports.handler = async function (event) {
    const { us, pm } = JSON.parse(event.body);

    const paymentMethod = await stripe.paymentMethods.attach(pm, {
        customer: us,
    });

    const customer = await stripe.customers.update(us, {
        invoice_settings: {
            default_payment_method: pm,
        },
    });

    return {
        statusCode: 200,
        body: JSON.stringify(paymentMethod),
    };
};
