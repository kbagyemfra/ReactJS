// function mutation(arr) {
//   arr[0] = arr[0].toLowerCase();
//   arr[1] = arr[1].toLowerCase();
//   let count = 0;
//   for (i = 0; i < arr[1].length; i++) {
//     for (j = 0; j <= arr[0].length; ) {
//       if (arr[0][j] === arr[1][i]) {
//         count++;
//         i++;
//         j = 0;
//       } else j++;
//     }
//     if (count === arr[1].length - 1) {
//       return true;
//     }
//   }

//   return false;
// }

// solution

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
// should return false.

mutation(["hello", "Hello"]);
// should return true.

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// should return true.

// mutation(["Mary", "Army"])
// // should return true.

// mutation(["Mary", "Aarmy"])
// // should return true.

// mutation(["Alien", "line"])
// // should return true.

// mutation(["floor", "for"])
// // should return true.

// mutation(["hello", "neo"])
//

// mutation(["voodoo", "no"])
// // should return false.

// mutation(["ate", "date"])
// // should return false.

// mutation(["Tiger", "Zebra"])
// // should return false.
