const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languagename: "javascript",
    languageFileNAme: "js",
  },
  {
    languagename: "java",
    languageFileNAme: "java",
  },
  {
    languagename: "python",
    languageFileNAme: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageFileNAme);
});
