// dates

let myDate = new Date();
console.log(myDate);

// console.log(myDate.toString);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDAte = new Date(2023, 0, 23);
// let myCreatedDAte = new Date(2023, 0, 23, 5, 3);
// let myCreatedDAte = new Date("2023-01-14");
let myCreatedDAte = new Date("01-14-2023");

// console.log(myCreatedDAte.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDAte.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDay());

console.log(newDate.getMonth() + 1);

console.log(newDate);
newDate.toLocaleString("dafault", { weekday: "long" });
