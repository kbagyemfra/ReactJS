const ThirdMax = (nums) => {
  // ################## MY ATTEMPT ##################
  //   m3Exist = true;
  //   if (nums.length < 3) {
  //     m3Exist = false;
  //   } else m3Exist = true;
  //   nums.sort((a, b) => b - a);
  //   m1 = 0;
  //   m2 = 0;
  //   m3 = 0;
  //   for (i = 0; i < nums.length; i++) {
  //     if (nums[i] > m1) {
  //       m1 = nums[i];
  //     }
  //     if (nums[i] > m2 && nums[i] < m1) {
  //       m2 = nums[i];
  //     }
  //     if (nums[i] > Number.NEGATIVE_INFINITY && nums[i] < m2) {
  //       m3 = nums[i];
  //     }
  //   }
  //   if (m3Exist == false) {
  //     return m1;
  //   } else return m3;
  // ################## MY ATTEMPT ##################

  nums.sort((a, b) => b - a);
  let arr = [];
  // checks and creates a new array without duplicates
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      arr.push(nums[i]);
    }
  }
  // checks that there is at least 3 numbers left
  if (arr.length < 3) {
    return Math.max(...arr);
  } else {
    return arr[2];
  }
};

var nums = [3, 2, -1];
console.log(ThirdMax(nums));

var nums = [3, 2, 1];
console.log(ThirdMax(nums));

var nums = [2, 2, 3, 1];
console.log(ThirdMax(nums));

var nums = [1, 2];
console.log(ThirdMax(nums));
