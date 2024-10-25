// if statement
// const isUserLoggedIn = true;
// const temperaure = 41;

// if (temperaure === 50) {
//   console.log("Less than 50");
// } else {
//   console.log("greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==,

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// shorthand notation
const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less Than 500");
// } else if (balance < 750) {
//   console.log("less Than 750");
// } else if (balance < 900) {
//   console.log("less Than 900");
// } else {
//   console.log("less Than 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard && 2 == 3) {
  console.log("Allowed to buy courses");
}
if (loggedInFromEmail || loggedInFromGoogle ) {
  console.log("user logged in ");
}
