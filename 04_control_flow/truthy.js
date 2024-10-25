const userEmal = [];

if (userEmal) {
  console.log("Got user email");
} else {
  console.log("dont have user email");
}

// fasly values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
// "0", 'false', ' ', [], {}, function(){}

// if (userEmal.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  //   console.log("object is empty");
}

// Nullish Coalescing Operators (??): null undefined

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ?? 15;

// val1 = null ?? 10 ??  70;
console.log(val1);

//Ternary operator

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("less than 80")
  : console.log("greater than 80");
