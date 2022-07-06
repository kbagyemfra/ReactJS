// How to solve

// 1. First check if the length of the array is greater than 3
// 2. Then find the max element in the array
// 3. and check whether it is not the first or last element in the array.
// 4. Since if it is the first or the last element,
// 5. we cannot get an increasing followed by decreasing order of elements.

// 6. Check whether all the elements before the max element are in increasing order.
// 7. Check whether all the elements after the max element are in decreasing order.
// 8. If all these conditions are satisfied only then our array is a valid mountain array.

var validMountainArray = function (arr) {
  // 1
  if (arr.length < 3) {
    return false;
  } else {
    let maxI = 0;
    // 2
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[maxI]) {
        maxI = i;
      }
    }
    // 3
    if (maxI === 0 || maxI === arr.length - 1) {
      return false;
    }
    // 6
    for (let j = 0; j < maxI; j++) {
      // nested for loop for comparing variable
      if (arr[j] >= arr[j + 1]) {
        return false;
      }
    }
    // 7
    for (let j = arr.length - 1; j > maxI; j--) {
      // nested for loop for comparing variable
      if (arr[j] >= arr[j - 1]) {
        return false;
      }
    }
  }
  return true;
};

var a = [1, 7, 9, 5, 4, 1, 2];
var b = [0, 3, 2, 1];
var c = [1, 2, 3, 2, 1];

console.log(validMountainArray(a));
console.log(validMountainArray(b));
console.log(validMountainArray(c));
