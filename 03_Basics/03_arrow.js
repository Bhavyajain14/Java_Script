const user = {
  username: "Bhavya",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//   let username = "bhavya";
//   console.log(this.username);
// }
// chai();

const chai = () => {
  let username = "bhavya";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({
  username: "Bhavya",
});

console.log(addTwo(3, 4));
// console.log(my name is bhavya);
console.log("add two nmbers ");