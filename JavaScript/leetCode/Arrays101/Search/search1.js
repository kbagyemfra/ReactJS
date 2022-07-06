// Given an array arr of integers,
// check if there exists two integers
// N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Steps to solve

const a1 = [10, 2, 5, 3];

const itExist = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i]; // target value equal array element[position]
    for (let j = i + 1; j < arr.length; j++) {
      // nested for loop for comparing variable
      if (target === arr[j] * 2 || target === arr[j] / 2) {
        // if the above statement is true then return true
        return true;
      }
    }
  }
  // if everything above is false return false
  return false;
};

console.log(itExist(a1));
