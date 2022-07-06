// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Steps to solve

// Return 0 if the given array is empty
// Declare two pointers, i & j, and set them to 0 and 1
// Use while loop to check if i=j
// if not, increment i by 1 and copy nums[i]=nums[j]
// if i=j; j+1 to skip duplicate
// After loop, return the length; i+1

ex1 = [1, 1, 2];

const remDuplicates = (nums) => {
  if (nums.length === 0) return 0; // Return 0 if the given array is empty
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]; // arr[0] = arr[1]...ect
      j++; // move to right by one in array
    } else j++;
  }
  return i + 1;
};

console.log(remDuplicates(ex1));
