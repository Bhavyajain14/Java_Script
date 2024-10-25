function MultiplyBy5(num) {
  return num * 5;
}
MultiplyBy5.power = 2;
console.log(MultiplyBy5(5));
console.log(MultiplyBy5.power);
console.log(MultiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("Chai", 25);
const tea = createUser("tea", 250);

chai.printMe();
