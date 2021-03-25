const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");
var mysql = require("mysql");

exports.handler = async function (event) {
    const { email, name, password } = JSON.parse(event.body);

    console.log("email = " + email);

    var connection = await mysql.createConnection({
        host: "lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
        user: "ub4b7vh6mgd73b2b",
        password: "l7w4d31in0msovsc",
        database: "yj4gfzv5wypf9871",
    });

    await connection.connect();
    const existUserResult = await getUserDetail(connection, email);
    if (existUserResult[0] && existUserResult[0].user_email) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                error: "1",
                message: "User exist alredy with same email id",
            }),
        };
        // await connection.query(
        //     "UPDATE external_users SET plan_id = ? WHERE stripe_id = ?",
        //     ["2", "cus_J94f2jQBK6f4gn"],
        //     function (error, results, fields) {
        //         if (error) throw error;
        //     }
        // );
    }

    const customer = await stripe.customers.create({
        email: email,
    });

    // subscribe the new customer to the free plan
    await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: "price_1IKAnIIP8uHvYRBy68pRrArU" }],
    });

    var member = {
        user_name: name,
        user_email: email,
        user_password: password,
        stripe_id: customer.id,
        plan_id: "0",
        is_logged_in: 1,
    };
    var query = await connection.query(
        "INSERT INTO external_users SET ?",
        member,
        function (error, results, fields) {
            if (error) throw error;
        }
    );

    await connection.end();

    return {
        statusCode: 200,
        body: JSON.stringify({
            error: "0",
            customerId: customer.id,
            message:
                "User created successfully redirecting to stripe checkout...",
        }),
    };
};

async function getUserDetail(connection, email) {
    return new Promise((resolve, reject) => {
        connection.query(
            {
                sql: "SELECT * FROM `external_users` WHERE `user_email` = ?",
                values: [email],
            },
            function (error, results, fields) {
                if (error) reject(err);
                resolve(results);
            }
        );
    });
}
