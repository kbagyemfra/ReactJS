// Q: Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

const nums = [1, 0, 2, 3, 0, 4, 5, 0];

// const dupZero = (nums) => {
//   nums.map((zero) => {
//     if (zero === 0) true;
//   });
//   console.log(nums);
// };

// dupZero(nums);
// console.log(nums);

// Solution

const dupZero = (arr) => {
  // let i=0; i has to be less than the array length
  for (let i = 0; i < arr.length; i++) {
    // if array element equals zero
    if (arr[i] === 0) {
      arr.splice(i, 0, 0); // add a zero at the element of i
      arr.pop(); // also delete the end element of the array
      ++i; // pre increment by 1, adds first and then returns
    }
  }
//   console.log(arr);
//   // if you wanted to return
//   return arr;
};

console.log(dupZero(nums));
