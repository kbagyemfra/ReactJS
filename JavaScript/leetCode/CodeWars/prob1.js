// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// Steps to solve

// This code will count number of duplicates in string or

// const a1 = "ABBA";
// const a2 = "aA11";
// const a3 = "aabBcde";
const a4 = "indivisibility";
const a5 = "Indivisibilities";

const duplicate = (text) => {
  count = 0;
  var mObj = {};
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      // nested for loop for comparing variable
      //   target = text[i];
      a = text[i].toLowerCase();
      b = text[j].toLowerCase();
      if (a === b && !mObj[a]) {
        // if the above statement is true then return true
        // console.log("iCount: " + count);
        count++;
        ++i;
        j = i;
        mObj[a] = 1;
      }
    }
    // console.log("fCount: " + count);
  }
  // if everything above is false return false
  // console.log("dCount: " + count);
  return count;
};

// console.log(duplicate(a1));
// console.log(duplicate(a2));
console.log(duplicate(a5));

// console.log(a1.length);
// console.log(a1[0]);
