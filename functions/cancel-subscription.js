const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");
var mysql = require("mysql");

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

    // await subscriptions.data.forEach(async (element) => {
    //     await stripe.subscriptions.del(element.id);
    // });

    await subscriptions.data.forEach(async (element) => {
        stripe.subscriptions.update(element.id, { cancel_at_period_end: true });
    });

    // var connection = await mysql.createConnection({
    //     host: "lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
    //     user: "ub4b7vh6mgd73b2b",
    //     password: "l7w4d31in0msovsc",
    //     database: "yj4gfzv5wypf9871",
    // });
    // await connection.connect();

    // await updateUser(connection, userStripeId, 0);

    // await connection.end();

    return {
        statusCode: 200,
        body: JSON.stringify({
            error: "0",
            message:
                "Your subscription has been successfully canceled, it will automatically expire at the end of the subscription period. ",
        }),
    };
};

async function updateUser(connection, stripeId, planId) {
    return new Promise((resolve, reject) => {
        connection.query(
            {
                sql:
                    "UPDATE external_users SET plan_id = ? WHERE stripe_id = ?",
                values: [planId, stripeId],
            },
            function (error, results, fields) {
                if (error) reject(err);
                resolve(results);
            }
        );
    });
}
