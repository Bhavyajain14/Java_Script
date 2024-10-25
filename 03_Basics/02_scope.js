// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Innner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Bhavya";

  function two() {
    const website = "youtube";
    console.log(userName);
  }
  //   console.log(website);

  //   two();
}
// one();

if (true) {
  const userName = "Bhavya";
  if (userName === "Bhavya") {
    const website = " youtube";
    // console.log(userName + website);
  }
  //   console.log(website);
}
// console.log(userName);

// ++++++++++++++++ INTERESTING ++++++++++++++++++++
console.log(addone(5));

function addone(num) {
  return num + 1;
}

addtwo(5);

const addtwo = function (num) {
  return num + 2;
};
