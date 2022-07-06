// How to solve

// 1. First check if the length of the array is greater than 3
// 2. Then find the max element in the array
// 3. and check whether it is not the first or last element in the array.
// 4. Since if it is the first or the last element,
// 5. we cannot get an increasing followed by decreasing order of elements.

// 6. Check whether all the elements before the max element are in increasing order.
// 7. Check whether all the elements after the max element are in decreasing order.
// 8. If all these conditions are satisfied only then our array is a valid mountain array.

const validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  } else {
    let maxElementIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= arr[maxElementIndex]) {
        maxElementIndex = i;
      }
    }

    if (maxElementIndex === arr.length - 1 || maxElementIndex === 0) {
      return false;
    }

    let isMountainArray = true;

    for (let j = 0; j < maxElementIndex; j++) {
      console.log("In j loop", arr[j], arr[j + 1]);
      if (arr[j] >= arr[j + 1]) {
        isMountainArray = false;
      }
    }

    for (let k = maxElementIndex; k < arr.length - 1; k++) {
      console.log("In k loop", arr[k], arr[k + 1]);
      if (arr[k] <= arr[k + 1]) {
        isMountainArray = false;
      }
    }

    return isMountainArray;
  }
};

var a = [1, 7, 9, 5, 4, 1, 2];
var b = [0, 3, 2, 1];
var c = [1, 2, 3, 2, 1];

console.log(validMountainArray(b));
