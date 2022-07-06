function findLongestWordLength(str) {
  var newArray = str.split(" ");
  var max = 0;
  var count = 0;
  for (i = 0; i <= newArray.length - 1; i++) {
    for (j = 0; j <= newArray[i].length - 1; j++) {
      if (typeof newArray[i][j] === "string") {
        count++;
      }
    }
    if (count > max) {
      max = count;
      count = 0;
    } else count = 0;
  }

  return max;
}

// console.log(typeof "The");
// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
