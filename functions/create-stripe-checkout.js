const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { email, customerId } = JSON.parse(event.body);
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

    // const link = await stripe.billingPortal.sessions.create({
    //     customer: customerId,
    //     return_url: "https://inspiring-kepler-554993.netlify.app/",
    // });

    const session = await stripe.checkout.sessions.create({
        //customer: customerId,
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel",
        payment_method_types: ["card"],
        line_items: [{ price: "price_1IMFmTIP8uHvYRBy8XgXjweR", quantity: 1 }],
        mode: "subscription",
        customer_email: email,
        // shipping_address_collection: {
        //     allowed_countries: ["DK"],
        // },
    });

    console.log(session);

    // await stripe.redirectToCheckout({
    //     sessionId
    // });

    return {
        statusCode: 200,
        body: JSON.stringify(session),
    };
};
