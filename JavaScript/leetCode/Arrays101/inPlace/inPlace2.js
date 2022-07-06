const rem2Dup = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else j++;
  }
  return i + 1;
};
