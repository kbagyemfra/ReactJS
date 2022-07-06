// You are given two integer arrays nums1 and nums2,
// sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n,
// here the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6]
// with the underlined elements coming from nums1

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// ################## Tries ############################

// const ex1a = [1, 2, 3, 0, 0, 0];
// const ex1b = [2, 5, 6];
// m = 3;
// // // nums2 = [2, 5, 6];
// // // n = 3;

// const ex2a = [1];
// const ex2b = [];
// // // m = 3;
// // // nums2 = [2, 5, 6];
// // // n = 3;

// // const sortInt = (nums1, nums2) => {
// //   for (let i = 0; i < nums1.length; i++) {
// //     if (nums1[i] === 0) {
// //       nums1.splice(i, 1);
// //       i--;
// //     }
// //   }
// //   for (let i = 0; i < nums2.length; i++) {
// //     if (nums1[i] === 0) {
// //       nums2.splice(i, 1);
// //       i--;
// //     }
// //   }

// //   nums1 = [].concat(nums1, nums2);
// //   nums1.sort((a, b) => a - b);
// //   console.log(nums1);
// // };

// // // const sortInt = (nums1, m, nums2, n) => {
// // //   let num = nums1.filter((noZero) => {
// // //     return noZero[0] != 0;
// // //   });
// // //   console.log("Num: " + num);
// // // };

// // console.log(sortInt(ex1a, ex1b));
// // console.log(sortInt(ex2a, ex2b));

// // // const sortInt = (num1, num2) => {
// // //   for (let i = 0, j = 0; i < num1.length, j < num2.length; i++, j++) {
// // //     if (num1[i] === 0 || num2[j] === 0) {
// // //       num1.splice(i, 1);
// // //       i--;

// // //       num2.splice(j, 1);
// // //       j--;
// // //     }
// // //   }
// // //   return console.log("nums1: " + num1 + "\n" + "nums2:" + num2);
// // // };

// var merge = function (nums1, nums2, m, n) {
//   for (let i = 0; i < nums1.length; i++) {
//     if (nums1[i] === 0) {
//       nums1.splice(i, 1);
//       i--;
//       if (nums1.length === m) {
//         nums1 = nums1.concat(nums2).sort((a, b) => a - b);
//         console.log("yes");
//       }

//       console.log(nums1);
//     }
//   }
// };

// console.log(merge(ex1a, ex1b, 3));
// // console.log(merge(ex2a, ex2b));

// ################## Tries ############################

// Actual Solution (Problem was extremely hard)

const ex1a = [1, 2, 3, 0, 0, 0];
const ex1b = [2, 5, 6];
m = 3;
n = 3;

// const ex2a = [1];
// const ex2b = [];
// // // m = 3;
// // // nums2 = [2, 5, 6];
// // // n = 3;

const merge = (nums1, m, nums2, n) => {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      count++;
      if (count == n) {
        nums1.splice(nums1.length - n);
      }
    }
  }
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);

  console.log(nums1);
};

merge(ex1a, 3, ex1b, 3);
console.log(merge(ex1a, 3, ex1b, 3));

// Hard Sloution

var merge = function (nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    } else if (n > -1) {
      nums1[i] = nums2[n--];
    }
    i--;
  }
};
