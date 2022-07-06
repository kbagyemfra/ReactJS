const moveEven = (nums) => {
  var i = 0;
  var e = 0;
  if (nums.length === 0) return 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      e = nums[i];
      nums.splice(i, 1);
      nums.unshift(e);
      if (nums.length <= 1 && nums[0] % 2 === 0) {
        i = 2;
      }
    }
  }
  return nums;
};

var a = [3, 1, 2, 4];
moveEven(a);

var b = [0];
moveEven(b);
console.log(moveEven(b));
// console.log();
