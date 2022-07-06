// --------- MY ATTEMPT ---------
// const moveZero = (nums) => {
//   if (nums.length === 0) return 0;

//   for (i = 0; i < nums.length; i++) {
//     if (nums[nums.length - 2] === 0 && nums[nums.length - 1] === 0) {
//       return nums;
//     }
//     if (nums[i] === 0) {
//       nums.splice(i, 1);
//       nums.push(0);
//       i--;
//     }
//   }
//   return i + 1;
// };
// --------- MY ATTEMPT ---------

// Solution Explained

// Steps:

// 1 . Loop through all the elements of
//     the original input array starting
//     from index 0 to length-1 (last element).

// 2.  Maintain 2 different indices to access
//     the array positions. As per below code,
//     i is used to keep a track of the current loop element
//     and j is used to keep a track of the updated array of
//     non-zero element to be filled. (as it's in-place, we will update the same array)

// 3.  If the current element under consideration
//     is non-zero, then update the value at
//     the j index to this element and update the index j.
//       Not that the index j gets updated only for
//       the non-zero elements whereas the index i gets
//       updated for each of the element of the input array (zero as well as non-zero).

// 4.  Now, after the first 3 steps,
//     our array will be filled with all the
//     non-zero elements in the input array and
//     that too in the same relative order as that in the original array.

// 5.  Now we need to fill the remaining
//     elements of the array with 0 to complete it.

// 6.  After this, the input array a will itself
//     gets updated to the required output array
//     thereby maintaining the required constraint
//     of keeping the algorithm in-place.

const moveZero = (nums) => {
  var i = 0;
  var j = 0;
  var l = nums.length - 1;
  //  1
  while (i <= l) {
    //  2
    if (nums[i] != 0) {
      //  3
      // copying only the non-zero elements
      //  in the original array itself as need to keep it in-place
      nums[j++] = nums[i];
      ++i;
    } else i++;
  }
  // counting the number of zeroes,
  // which will be equal to
  // the total numbers - the non zero numbers.
  j = l - j + 1; // you add one because you need the full length of the element

  //  filling the remaining array with the zeros starting from end
  while (j != 0) {
    nums[l--] = 0;
    j--;
  }

  return nums;
};

var a = [0, 1, 0, 3, 12];
moveZero(a);

var b = [0];
moveZero(b);
console.log(moveZero(b));
console.log(moveZero(a));
console.log();
