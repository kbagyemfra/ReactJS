const swap = (arr, xp, yp) => {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
};

const realSort = (arr) => {
  // Outer pass
  for (let i = 0; i < arr.length; i++) {
    // Inner Pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      //value comparison
      if (arr[j + 1] < arr[j]) {
        //Swapping
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        //
      }
    }
  }
  return arr;
};
let a = [7, 5, 1, 9, 12, 15, 3, 20];
let b = [5, 3, 8, 4, 6];
console.log(a.length);
console.log(realSort(a));
console.log(realSort(b));
