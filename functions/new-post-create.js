exports.handler = async function ({ body, headers }, context) {
  //try {
  console.log("Yes this works!!!");
  console.log("----------------body--------------");
  console.log(body);
  // console.log("-------------headers--------------");
  // console.log(headers);
  // if (true) {
  throw new Error(`You can't post this error`);
  //}
  return {
      statusCode: 200,
      body: JSON.stringify({ received: subscription.customer }),
  };
  // } catch (err) {
  //     return {
  //         statusCode: 400,
  //         body: `Webhook Error: ${err.message}`,
  //     };
  // }
};
