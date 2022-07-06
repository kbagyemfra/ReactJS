const philipi = require("./Philipians.json");

// console.log(philipi);

const verses = (ch, ver) => {
  const chap = philipi.content;
  console.log(`${ch + 1}:${ver + 1}`, chap[ch][ver]);
};

verses(0, 0);
// console.log();
