const stripe = require("stripe")("sk_test_6uOkcnnJw0VAoDZmIaKWEqzu");

exports.handler = async function (event) {
    const { customerId } = JSON.parse(event.body);

    const intent = await stripe.setupIntents.create({
        customer: customerId,
    });

    //console.log(intent);
    // const card = await stripe.customers.createSource("cus_JChkY4128k73XE", {
    //     source: "tok_visa",
    // });

    // console.log(card);

    return {
        statusCode: 200,
        body: JSON.stringify(intent),
    };
};
