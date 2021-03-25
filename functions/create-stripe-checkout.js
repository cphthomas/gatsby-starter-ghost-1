const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { email, customerId, planType } = JSON.parse(event.body);

    let price = "";
    console.log(planType);
    if (planType == "pro") {
        price = "price_1IMFmTIP8uHvYRBy8XgXjweR";
    } else {
        price = "price_1IMFnPIP8uHvYRBy5DLxSubd";
    }

    const session = await stripe.checkout.sessions.create({
        customer: customerId,
        success_url: "https://inspiring-kepler-554993.netlify.app",
        cancel_url: "https://inspiring-kepler-554993.netlify.app/login",
        payment_method_types: ["card"],
        line_items: [{ price: price, quantity: 1 }],
        mode: "subscription",
        //customer_email: email,
    });

    console.log(session);

    return {
        statusCode: 200,
        body: JSON.stringify(session),
    };
};
