const power = (nums) => {
  a = [];
  for (i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i], 2);
    a.push(nums[i]);
  }
  a.sort((a, b) => a - b);
  return a;
};

var nums = [-4, -1, 0, 3, 10];

console.log(power(nums));

var nums = [-7, -3, 2, 3, 11];

console.log(power(nums));
