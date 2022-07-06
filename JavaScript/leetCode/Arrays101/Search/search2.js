// Given an array of integers arr,
// return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// // Attempt 1

// const a1 = [2, 1];
// const a2 = [3, 5, 5];
// const a3 = [0, 3, 2, 1];
// const a4 = [1, 7, 9, 5, 4, 1, 2];

// const itExist = (arr) => {
//   if (arr.length < 3) return false;
//   for (let i = 0; i < arr.length; i++) {
//     let target = arr[i]; // target value equal array element[position]
//     for (let j = i + 1; j < arr.length; j++) {
//       // nested for loop for comparing variable
//       if (arr[i] > arr[i - 1] && arr[i] > arr[arr.length - 1]) {
//         // if the above statement is true then return true
//         return true;
//       }
//     }
//   }
//   // if everything above is false return false
//   return false;
// };

// console.log(itExist(a1));
// console.log(itExist(a2));
// console.log(itExist(a3));
// console.log(itExist(a4));

// Solution 1
