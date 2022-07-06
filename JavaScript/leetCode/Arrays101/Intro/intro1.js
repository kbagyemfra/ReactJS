// Q1: Given a binary array nums, return the maximum number of consecutive 1's in the array.

// 2 Examples

// 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//                 The maximum number of consecutive 1s is 3.

// 2:
// Input: nums = [1, 0, 1, 1, 0, 1];
// Output: 2;

// What you are given:

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxConsecutiveOnes = function(nums) {

// };

// Someones solution explained by yourself

const ex1 = [1, 1, 0, 1, 1, 1];
const ex2 = [1, 0, 1, 1, 0, 1];

const findMaxConsecutiveOnes = (nums) => {
  let count = 0; // let the count begin as zero
  let max = 0; // let the max begin as zero
  nums.forEach((value) => {
    // for each element in the array search for value
    if (value === 1) {
      // if the value equals 1
      count++; // add 1

      // if the current count of 1's exceeds the current max count,
      if (count > max) max = count; // make max === the current count as it exceeds the last max
    } else {
      count = 0;
    }
  });
  console.log("Max = " + max);
  return max;
};

/*
Time: O(N)
Space: O(1)
*/

findMaxConsecutiveOnes(ex1);
findMaxConsecutiveOnes(ex2);

console.log("*************** Solution 2 ***************");

// Second Solution

// JavaScript program to count maximum
// consecutive 1's in a binary array.

// Returns count of maximum
// consecutive 1's in binary
// array [0..n-1]
// number is the number of elements

const getMaxLength = (array, number) => {
  let count = 0;
  let max = 0;

  for (let i = 0; i < number; i++) {
    // reset the count when 0 is found
    if (array[i] === 0) count = 0;
    else {
      // if 1 is found, increment count
      count++;

      // update to find max

      max = Math.max(max, count);
    }
  }
  console.log("Sol2 Max = " + max);
  return max;
};

getMaxLength(ex1, 6);
getMaxLength(ex2, 6);
