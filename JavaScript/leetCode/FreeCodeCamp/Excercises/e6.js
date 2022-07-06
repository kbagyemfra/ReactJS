function bouncer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));

// bouncer([7, "ate", "", false, 9])
// // should return [7, "ate", 9].
// bouncer([false, null, 0, NaN, undefined, ""])
// // should return [].
// bouncer([null, NaN, 1, 2, undefined])
// // should return [1, 2]
