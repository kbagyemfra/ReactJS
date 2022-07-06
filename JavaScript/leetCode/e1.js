var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [3, 2, 4];
const target2 = 6;

const nums3 = [3, 3];
const target3 = 6;

twoSum(nums1, target1);
console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
