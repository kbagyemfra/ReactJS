function largestOfFour(arr) {
  var narr = [];
  var max = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == -Infinity) {
        max = -Infinity;
      }
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
      if (arr[i].length == j + 1) {
        narr.push(max);
        max = 0;
      }
    }
  }
  return narr;
}
// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );
console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
