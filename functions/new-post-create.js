exports.handler = async function ({ body, headers }, context) {
    try {
        console.log("Yes this works!!!");
        return {
            statusCode: 200,
            body: JSON.stringify({ received: subscription.customer }),
        };
    } catch (err) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${err.message}`,
        };
    }
};
