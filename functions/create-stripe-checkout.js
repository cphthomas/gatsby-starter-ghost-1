const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { customerId } = JSON.parse(event.body);
    //console.log(customerId);

    // const result = await faunaFetch({
    //   query: `
    //     query ($netlifyID: ID!) {
    //       getUserByNetlifyID(netlifyID: $netlifyID) {
    //         stripeID
    //       }
    //     }
    //   `,
    //   variables: {
    //     netlifyID: user.sub,
    //   },
    // });

    //const { stripeID } = result.data.getUserByNetlifyID;

    const link = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: "https://inspiring-kepler-554993.netlify.app/",
    });

    //console.log(link);

    return {
        statusCode: 200,
        body: JSON.stringify(link.url),
    };
};
