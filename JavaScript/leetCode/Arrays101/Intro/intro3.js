// Q3: Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order

// 2 Examples

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// const ex1 = Math.pow(2, 2);

// console.log(ex1);

const ex1 = [-4, -1, 0, 3, 10];
const ex2 = [-7, -3, 2, 3, 11];

// var powerSort = nums.map((arr) => Math.pow(arr, 2));
// powerSort.sort((a, b) => a - b);
// //   num.map((value) => {
// //     return Math.pow(value, 2);
// //   });
// //   //   num.map((value) => {
// //   //     pow = Math.pow(value, 2);
// //   //     console.log("pvalue: " + pow);
// //   //   });
// //   //   return console.log("value out: " + value);

// console.log(powerSort);

const powSort = (list) => {
  newList = list.map((arr) => Math.pow(arr, 2)).sort((a, b) => a - b);
  return newList;
};

console.log(powSort(ex1));
console.log(powSort(ex2));
