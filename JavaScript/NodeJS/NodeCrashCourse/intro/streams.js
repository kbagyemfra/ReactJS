const fs = require("fs");

const readStream = fs.createReadStream("./hello2.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("---- NEW CHUNK ----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK:\n");
//   writeStream.write(chunk);
// });

// piping same as above but less code
readStream.pipe(writeStream);
