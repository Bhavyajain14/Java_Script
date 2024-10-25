// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptpassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@example.com", "123");
// console.log(chai.encryptpassword());
// console.log(chai.changeUserName());

// Behind the scene

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptpassword = function () {
  return `${this.password}abc`;
};

user.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const Tea = new user("tea", "tea@example.com", "456");
console.log(Tea.encryptpassword());
console.log(Tea.changeUserName());
