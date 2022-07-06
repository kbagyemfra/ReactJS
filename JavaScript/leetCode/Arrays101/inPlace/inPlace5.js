const removeUniq = (nums, v) => {
  if (nums.length === 0) return 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === v) {
      nums.splice(i, 1);
    }
  }
  return nums;
};

var a = [0, 1, 2, 2, 3, 0, 4, 2];
removeUniq(a, 2);
console.log(removeUniq(a, 2));

var b = [3, 2, 2, 3];
removeUniq(b, 3);
console.log(removeUniq(b, 3));

var c = [
  0, 1, 2, 1, 3, 0, 1, 2, 0, 4, 1, 2, 1, 7, 8, 9, 1, 0, 24, 1, 3, 1, 5, 1,
];
console.log(removeUniq(c, 1));
// console.log();
