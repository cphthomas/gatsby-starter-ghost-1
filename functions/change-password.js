var mysql = require("mysql");
exports.handler = async function (event) {
    const { email, password } = JSON.parse(event.body);
    var connection = await mysql.createConnection({
        host: "lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
        user: "ub4b7vh6mgd73b2b",
        password: "l7w4d31in0msovsc",
        database: "yj4gfzv5wypf9871",
    });
    await connection.connect();
    const existUserResult = await getUserDetail(connection, email);

    if (!existUserResult[0]) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                error: "1",
                message: "User not exist with entered email id.",
            }),
        };
    }

    await updateUser(connection, email, password);

    await connection.end();

    return {
        statusCode: 200,
        body: JSON.stringify({
            error: "0",
            message: "Password successfully changed redirecting to login page...",
        }),
    };
};

async function getUserDetail(connection, email) {
    return new Promise((resolve, reject) => {
        connection.query(
            {
                sql:
                    "SELECT * FROM `external_users` WHERE `user_email` = ?",
                values: [email],
            },
            function (error, results, fields) {
                if (error) reject(err);
                resolve(results);
            }
        );
    });
}

async function updateUser(connection, userEmail, password) {
    return new Promise((resolve, reject) => {
        connection.query(
            {
                sql:
                    "UPDATE external_users SET user_password = ? WHERE user_email = ?",
                values: [password, userEmail],
            },
            function (error, results, fields) {
                if (error) reject(err);
                resolve(results);
            }
        );
    });
}
