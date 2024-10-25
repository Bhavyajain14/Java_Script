// singleton

// Object.create

//object litrals

const mySym = Symbol("Key1");

const Jsuser = {
  name: "Bhavya",
  "full name": "Bhavya jain",
  [mySym]: "myKey1",
  age: 20,
  location: "karnal",
  email: "bhavya@google.com",
  isLoggedIn: false,
  lastLogInDays: ["Monday", "Saturday"],
};

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "bhavya@chatgpt.com";
// Object.freeze(Jsuser);
Jsuser.email = "bhavya@microsoft.com";

// console.log(Jsuser);

Jsuser.greetings = function () {
  console.log("Hello Js user");
};

Jsuser.greetingsTwo = function () {
  console.log(`Hello Js user, ${this.name}`);
};

console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());
