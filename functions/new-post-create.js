const GhostContentAPI = require("@tryghost/content-api");
//const sgMail = require('@sendgrid/mail');
const axios = require("axios");

//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const ghost = new GhostContentAPI({
    url: "https://ghost-latest.herokuapp.com",
    //key: process.env.GHOST_CONTENT_KEY,
    version: "v3",
});

async function handler(event, context, callback) {
    const done = (err, res) =>
        callback(null, {
            statusCode: err ? "400" : "200",
            body: err ? err.message : JSON.stringify(res),
            headers: { "Content-Type": "application/json" },
        });

    switch (event.httpMethod) {
        case "POST":
            // const payload = JSON.parse(event.body);

            // const emailData = await ghost.pages.read(
            //     { slug: "nl-welcome-email" },
            //     { include: "authors" }
            // );
            // const emailHtml = (
            //     await axios.get(`${process.env.GHOST_HOST}/nl-welcome-email/`, {
            //         responseType: "text",
            //     })
            // ).data;

            // const msg = {
            //   to: payload.subscriber.current.email,
            //   from: `${emailData.primary_author.name} from Spooky Ghost Stories <geeks@snipcart.com>`,
            //   subject: emailData.title,
            //   html: emailHtml,
            // };

            //await sgMail.send(msg);

            done("Method not supported");
            break;

        default:
            done("Method not supported");
    }
}

exports.handler = handler;
