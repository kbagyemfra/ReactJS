// Below is the pseudocode for binary search,
// modified for searching in an array.
// The inputs are the array, which we call arr;
// the number n of elements in array; and target,
// the number being searched for.
// The output is the index in array of target:

// 1. Let min = 0 and max=n−1.
// 2. If max<min, then stop; target is not present in array. Return -1.
// 3. Compute guess as the average of max and min, rounded down so that it is an integer.
// 4. If array[guess] equals target, then stop. You found it! Return guess.
// 5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// 6. Otherwise, the guess was too high. Set max = guess - 1.
// 7. Go back to step two.

// function for Guessing

// My attempt

// const binaryFxn = (arr, target) => {
//   const newArr = arr.sort();
//   let min = 0;
//   let max = arr.length - 1;

//   let guess = Math.floor((min + max) / 2);

//   while (arr[guess] != target) {
//     if (arr[guess] < target) {
//       min = ++guess;
//     } else --max;
//   }

//   return guess;
// };

// Solution

// const binaryFxn = (arr, target) => {
//   const newArr = arr.sort();
//   let min = 0;
//   let max = arr.length - 1;
//   let guess = Math.floor((min + max) / 2); // use floor to round

//   while (max >= min) {
//     if (arr[guess] === target) {
//       return guess;
//     } else if (arr[guess] < target) {
//       min = ++guess;
//     } else --max;
//   }

//   return -1;
// };

// My attempt edited after seeing solution

const binaryFxn = (arr, target) => {
  const newArr = arr.sort();
  let min = 0;
  let max = arr.length - 1;

  let guess = Math.floor((min + max) / 2);

  while (arr[guess] != target) {
    if (arr[guess] < target) {
      min = ++guess;
    } else --max;
  }

  return guess;
};

binaryFxn([22, 44, 66, 88], 88);

console.log(binaryFxn([22, 44, 66, 88], 88));

binaryFxn(
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ],
  73
);

console.log(
  binaryFxn(
    [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ],
    73
  )
);
