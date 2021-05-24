const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { userStripeId } = JSON.parse(event.body);

    const subscriptions = await stripe.subscriptions.list({
        customer: userStripeId,
        limit: 3,
    });

    if (subscriptions.data[0].cancel_at_period_end) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                error: "1",
                message: "You have already cancelled your subscription.",
            }),
        };
    }

    await subscriptions.data.forEach(async (element) => {
        stripe.subscriptions.update(element.id, { cancel_at_period_end: true });
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            error: "0",
            message:
                "Your subscription has been successfully canceled, it will automatically expire at the end of the subscription period. ",
        }),
    };
};
