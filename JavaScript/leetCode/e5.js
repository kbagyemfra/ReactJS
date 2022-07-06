// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not,
// return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const findOne = (a, target) => {
  for (i = 0; i < a.length; i++) {
    if (target == a[i]) return i;
  }

  a.push(target);
  a.sort((a, b) => a - b);
  for (i = 0; i < a.length; i++) {
    if (target == a[i]) return i;
  }
};

const nums1 = [1, 3, 5, 6];
const target1 = 5;
const target2 = 2;
const target3 = 7;

console.log(findOne(nums1, target1));
console.log(findOne(nums1, target2));
console.log(findOne(nums1, target3));
