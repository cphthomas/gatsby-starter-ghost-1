const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const fetch = require("node-fetch");
var mysql = require("mysql");

exports.handler = async function ({ body, headers }, context) {
    try {
        // make sure this event was sent legitimately.
        const stripeEvent = await stripe.webhooks.constructEvent(
            body,
            headers["stripe-signature"],
            "whsec_TtO91dQXunKYoofz8go1AZfQpKIxnweg"
        );

        // bail if this is not a subscription update event
        if (stripeEvent.type !== "customer.subscription.updated") return;

        const subscription = await stripeEvent.data.object;

        // const result = await faunaFetch({
        //     query: `
        //   query ($stripeID: ID!) {
        //     getUserByStripeID(stripeID: $stripeID) {
        //       netlifyID
        //     }
        //   }
        // `,
        //     variables: {
        //         stripeID: subscription.customer,
        //     },
        // });

        // const { netlifyID } = result.data.getUserByStripeID;

        // take the first word of the plan name and use it as the role
        //const plan = subscription.items.data[0].plan.nickname;
        //const role = plan.split(" ")[0].toLowerCase();
        let plan = "0";
        if (subscription.items.data[0].plan.product == "prod_IyCAbZ8bewfWEx") {
            plan = "1";
        } else {
            plan = "2";
        }

        var connection = await mysql.createConnection({
            host: "lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
            user: "ub4b7vh6mgd73b2b",
            password: "l7w4d31in0msovsc",
            database: "yj4gfzv5wypf9871",
        });

        try {
            await connection.connect();

            // await connection.query(
            //     "UPDATE external_users SET plan_id = ? WHERE stripe_id = ?",
            //     ["2", subscription.customer],
            //     function (error, results, fields) {
            //         if (error) throw error;
            //     }
            // );

            await updateUser(connection, subscription.customer, plan);

            await connection.end();
        } catch (error) {
            return {
                statusCode: 400,
                body: `Webhook Error: ${error.message}`,
            };
        }

        // send a call to the Netlify Identity admin API to update the user role
        //const { identity } = context.clientContext;
        // await fetch(`${identity.url}/admin/users/${netlifyID}`, {
        //     method: "PUT",
        //     headers: {
        //         // note that this is a special admin token for the Identity API
        //         Authorization: `Bearer ${identity.token}`,
        //     },
        //     body: JSON.stringify({
        //         app_metadata: {
        //             roles: [role],
        //         },
        //     }),
        // });

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
