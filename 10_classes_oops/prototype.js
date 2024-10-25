// let myname = "Bhavya     ";

// console.log(myname.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    // console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.bhavya = function () {
  //   console.log(`Bhavya is present in all objects`);
};
Array.prototype.heyBhavya = function () {
  //   console.log(`bhavya says hello`);
};
// heroPower.bhavya();
myHeros.bhavya();
myHeros.heyBhavya();
// heroPower.heyBhavya()

// inheritance
const user = {
  namw: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = user;

//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode         ";
String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUsername.truelength();
"hitesh".truelength();
"iceTea".truelength();
