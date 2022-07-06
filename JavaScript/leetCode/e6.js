// // My Attempt

// const plusOne = (d) => {
//   var x = d.join("");
//   var w = Number(x);
//   ++w;

//   console.log(w);
//   w = w.toString();
//   console.log(w.length);
//   warr = [];
//   for (i = 0; i < w.length; i++) {
//     warr.push(w[i]);
//   }

//   return warr;
// };

// // My Attempt

const plusOne = (d) => {
  var n = [];
  let value = 0;
  for (i = 0; i < d.length; i++) {
    for (j = d.length - 1; j >= 0; j--) {
      n[i] = d[i] * Math.pow(10, j);
      i++;
    }
  }
  for (i = 0; i < n.length; i++) {
    value = n[i] + value;
  }
  ++value;
  n = [];
  m = value.toString();
  for (i = 0; i < d.length; i++) {
    n.push(m[i]);
  }
  return n;
};
// var d = [1, 2, 3];
// var g = [4, 3, 2, 1];
var x = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

// console.log(plusOne(d));
// console.log(plusOne(g));
console.log(plusOne(x));
