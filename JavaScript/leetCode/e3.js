const palidArr = (head) => {
  //   if (head.length <= 1 || head[0] != head[head.length - 1] || head.length % 2 === 0) {
  if (head.length <= 0 || head[0] != head[head.length - 1]) {
    return false;
  } else {
    for (i = 0; i < head.length; i++) {
      for (j = head.length - i - 1; j > 0; j--) {
        if (head[j] == head[i]) i++;
        else {
          return false;
        }
      }
    }
  }
  return true;
};

const f = [1, 2];
var a = [-1, 2, 1];
var b = [1, 2, 3, 3, 2, 1];
var c = [1, 2, 3, 4, 4, 4, 3, 2, 1];
var d = [0];
var e = [1, 0, 0, 0, 0, 2, 1];
console.log(palidArr(a));
console.log(palidArr(b));
console.log(palidArr(c));
console.log(palidArr(d));
console.log(palidArr(e));
console.log(palidArr(f));
