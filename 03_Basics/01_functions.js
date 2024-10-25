function sayMyName() {
  console.log("B");
  console.log("h");
  console.log("a");
  console.log("v");
  console.log("y");
  console.log("a");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(Number(number1 + number2));
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;

  return number1 + number2;
}

const result = addTwoNumbers(6, 7);
// console.log("Result:",  result);

function loginUserMessage(username = "Sam") {
  if (!username) {
    // console.log("Please enter a userrname");
    return;
  }
  return `${username} just logged in!`;
}

// console.log(loginUserMessage("bhavya"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "Bhavya",
  prices: 199,
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user);
handleObject({
  username: "Sam",
  price: "799",
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
