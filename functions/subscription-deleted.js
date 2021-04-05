const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const fetch = require("node-fetch");
var mysql = require("mysql");

exports.handler = async function ({ body, headers }, context) {
    try {
        const stripeEvent = await stripe.webhooks.constructEvent(
            body,
            headers["stripe-signature"],
            "whsec_QQfWIfXTmZW4ZSIR8ypfIbrb0YC7rRZ4"
        );
        if (stripeEvent.type !== "customer.subscription.deleted") return;

        const subscription = await stripeEvent.data.object;

        var connection = await mysql.createConnection({
            host: "lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
            user: "ub4b7vh6mgd73b2b",
            password: "l7w4d31in0msovsc",
            database: "yj4gfzv5wypf9871",
        });

        try {
            await connection.connect();

            await updateUser(connection, subscription.customer, 0);

            await connection.end();

            return {
                statusCode: 200,
                body: JSON.stringify({ received: subscription.customer }),
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: `Webhook Error: ${error.message}`,
            };
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${error.message}`,
        };
    }
};

async function updateUser(connection, stripeId, plan) {
    return new Promise((resolve, reject) => {
        connection.query(
            {
                sql:
                    "UPDATE external_users SET plan_id = ? WHERE stripe_id = ?",
                values: [plan, stripeId],
            },
            function (error, results, fields) {
                if (error) reject(err);
                resolve(results);
            }
        );
    });
}
