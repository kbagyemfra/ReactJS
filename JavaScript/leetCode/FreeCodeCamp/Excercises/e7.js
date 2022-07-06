function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      continue;
    } else if (num < arr[i]) {
      return i;
    }
  }

  return arr.length;
}

// getIndexToIns([5, 3, 20, 3], 5);
// // should return 2.

// getIndexToIns([2, 20, 10], 19);
// // should return 2.

// getIndexToIns([2, 5, 10], 15);
// // should return 3.

console.log(getIndexToIns([], 1));
// should return 0.

// getIndexToIns([40, 60], 50);
// // should return 1

// getIndexToIns([10, 20, 30, 40, 50], 35);
// // should return 3.

// getIndexToIns([10, 20, 30, 40, 50], 30);
// // should return 2.

// getIndexToIns([40, 60], 50);
// // should return 1.

// getIndexToIns([5, 3, 20, 3], 5);
// // should return 2.
