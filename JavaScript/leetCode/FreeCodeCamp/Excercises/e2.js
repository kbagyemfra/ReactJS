function reverseString(str) {
  var arr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  str = arr.join("");
  return str;
}

console.log(reverseString("hello"));
