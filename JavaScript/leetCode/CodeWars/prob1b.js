// Steps to solve

// This code will count number of duplicates in string or

const a1 = "ABBA";
const a2 = "aA11";
const a3 = "aabBcde";
const a4 = "indivisibility";

const duplicate = (text) => {
  count = 0;
  i = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      // nested for loop for comparing variable
      //   target = text[i];
      a = text[i].toLowerCase();
      b = text[j].toLowerCase();
      if (a == b) {
        // if the above statement is true then return true
        // console.log("iCount: " + count);
        count += 1;
        ++i;
        j = i;
      }
    }
    // console.log("fCount: " + count);
  }
  // if everything above is false return false
  // console.log("dCount: " + count);
  return count;
};

console.log(duplicate(a1));
console.log(duplicate(a2));
console.log(duplicate(a4));

// console.log(a1.length);
// console.log(a1[0]);
