const cart = ["shoes","pants","kurta"];

// createOrder,
// proceedToPayment,
// showOrderSummary,
// updateWallet

createOrder(cart)
  .then(function (orderId) {
    console.log("Order created successfully");
    console.log(orderId);
    proceedToPayment(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log("Order creation failed");
    console.log(err);
  })
  .then(function(orderId){
    return proceedToPayment(orderId);
  })
  .catch(function(err){
    console.log(err);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
    return paymentInfo;
  })
  .catch(function(err){
    console.log(err);
  })
  .then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
  })
  .catch(function(err){
    console.log(err);
  })
  .then(function(orderSummary){
    console.log(orderSummary);
    return updateWallet(orderSummary);

  })
  .catch(function(err){
    console.log(err);
  })
  .then(function(walletUpdate){
    console.log(walletUpdate);
  })
  .catch(function(err){
    console.log(err);
  })
  .finally(function(){
    console.log("Order completed");
  })


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
    if(!validateOrderId(orderId)){
      const err = new Error("Invalid order id");
      reject(err);
    }
    resolve("Payment Successful")
  })
}
function showOrderSummary(paymentInfo){
    return new Promise(function (resolve, reject) {
     if(validatePayment(paymentInfo)){
        resolve("Order Summary");
     }else{
        const err = new Error("Payment Failed");
        reject(err);
     }
  })
}
function updateWallet(orderSummary){
    return new Promise(function (resolve, reject) {
        if(validateOrderSummary(orderSummary)){
            resolve("Wallet Updated");
        }else{
            const err = new Error("Wallet Update Failed");
            reject(err);
        }
  })
}

function validateOrderSummary(orderSummary){
    return true;
}

function validatePayment(paymentInfo){
    return true;
}

function validateCart(cart) {
  return true;
}
function validateOrderId(orderId){
    return true;
}