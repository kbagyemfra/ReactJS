const palidrone = (z) => {
  z = z.toString();

  //   if (z.length <= 1 || z[0] != z[z.length - 1] || z.length % 2 === 0) {
  if (z.length <= 0 || z[0] != z[z.length - 1]) {
    return false;
  } else {
    for (i = 0; i < z.length; i++) {
      for (j = z.length - i - 1; j > 0; j--) {
        if (z[j] === z[i]) i++;
        else {
          return false;
        }
      }
    }
  }
  return true;
};

var a = -121;
var b = 123321;
var c = 123444321;
var d = 0;
var e = 1000021;

// palidrone(b);
console.log(palidrone(a));
console.log(palidrone(b));
console.log(palidrone(c));
console.log(palidrone(d));
console.log(palidrone(e));
// var c = a.toString();

// console.log(c[3]);
// console.log(c.length);
