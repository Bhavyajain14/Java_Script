// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);\

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullname: {
      firstname: "Bhavya",
      lastname: "jain",
    },
  },
};

// console.log(regularUser.fullName?.userFullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj5 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj5);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
];

// users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// ++++++++++++++++ DESTRUCTURING ++++++++++++++++++++
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);

console.log(instructor);

// {
//     'name': 'Bhavya',
//     'coursename': 'js in Hindi',
//     'price': 'free'
// }

// [
//     {},
//     {},
//     {},
// ]
