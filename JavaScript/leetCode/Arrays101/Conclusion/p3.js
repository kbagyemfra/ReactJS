const disapear = (h) => {
  h.sort((a, b) => a - b);
  w = [];
  a = [];

  for (i = 0; i < h.length; i++) {
    w.push(i + 1);
  }
  for (i = 0; i < 1; i++) {
    for (j = 0; j < w.length; j++) {
      if (w[j] === h[i]) {
        if (h[i] == h[i + 1]) {
          h.splice(i, 2);
        } else {
          h.splice(i, 1);
        }
      } else {
        a.push(w[j]);
      }
    }
  }
  return a;
};

var nums = [4, 3, 2, 7, 8, 2, 3, 1];
// nums.sort((a, b) => a - b);
console.log(nums);
console.log(disapear(nums));

// Output: [5,6]
// Example 2:

var nums = [1, 1];
// Output: [2]
// nums.sort((a, b) => a - b);
console.log(nums);
console.log(disapear(nums));
