const fs = require("fs");

// // reading files
// fs.readFile("./hello.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// fs.readFile("./hello2.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// // console.log('last line');

// // writing files
// fs.writeFile("./blog.txt", "hello, world number 2", () => {
//   console.log("file was written");
// });

// fs.writeFile("./hello2.txt", "hello, again", () => {
//   console.log("file2 was written");
// });

// // directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// // deleting files
// if (fs.existsSync("./blog.txt")) {
//   fs.unlink("./blog.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }
