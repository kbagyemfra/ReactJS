// http://matt.coneybeare.me/coding-challenge-remove-and-rearrange-array-elements-in-place-in-o-1-memory-and-o-n-time/

// - Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// - Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// - The order of elements can be changed. It doesn't matter what you leave beyond the new length.

ex1 = [1, 1, 2];

ex2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const instDelete = (nums) => {
  right = nums.length - 1; // start from the right side of the array
  i = right; // initial array index value; we start from the right and count down so begining number is right value
  while (i >= 0) {
    // Loop i over the length of the array until we hit the left side
    if (nums[i] === nums[i - 1]) {
      // if element1 = element 2
      nums[i] = nums[right]; // Match means so overwrite orginal position
      --right;
    }
    --i; // whether we match or not, move down the array
  }
  return right + 1; // finally return the number of elements
};

console.log(instDelete(ex2));
