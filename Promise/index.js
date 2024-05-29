const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log("Order created successfully");
    console.log(orderId);
    proceedToPayment(orderId);
    return orderId;
  })
  .then(function(orderId){
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log("Order creation failed");
    console.log(err);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is invalid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful")
  })
}

function validateCart(cart) {
  return true;
}

/**
 * This above code is an explae of promise Chaining :
 * it helps to execute the code in a sequence and then use promise to handle the error
*/
