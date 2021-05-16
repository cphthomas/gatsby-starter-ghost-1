var mysql = require("mysql");
exports.handler = async function (event) {
    const { userEmail } = JSON.parse(event.body);

    var connection = await mysql.createConnection({
        host: "lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
        user: "ub4b7vh6mgd73b2b",
        password: "l7w4d31in0msovsc",
        database: "yj4gfzv5wypf9871",
    });
    let user = "";
    try {
        await connection.connect();
        user = await getUser(connection, userEmail);
        await connection.end();
    } catch (e) {
        console.log(`User not found due to error= ${e}`);
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            user: user,
        }),
    };
};

async function getUser(connection, email) {
    return new Promise((resolve, reject) => {
        connection.query(
            {
                sql: "SELECT * FROM `external_users` WHERE `user_email` = ?",
                values: [email],
            },
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
}
