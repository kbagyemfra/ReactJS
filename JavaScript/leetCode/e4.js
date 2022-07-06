// https://leetcode.com/problems/roman-to-integer/

// https://www.cuemath.com/numbers/mcmxciv-roman-numerals/

// // My Attempt

// const romInt = (z) => {
//   //   var I = "1";
//   //   var V = "5";
//   //   var X = "10";
//   //   var L = "50";
//   //   var C = "100";
//   //   var D = "500";
//   //   var M = "1000";

//   var rom = ["I", "V", "X", "L", "C", "D", "M"];
//   var num = [1, 5, 10, 50, 100, 500, 1000];

//   let value = 0;

//   for (i = 0; i < z.length - 1; i++) {
//     for (j = 0; j <= rom.length - 1; ) {
//       // value = num[i] - num[i + 1] + value;
//       if (z[i] == "I" && (z[i + 1] == "I" || "X")) {
//         value = value - 1;
//         j++;
//         i++;
//       }
//       if (z[i] == "X" && (z[i + 1] == "L" || "C")) {
//         value = value - 10;
//         j++;
//         i++;
//       }
//       if (z[i] == "C" && (z[i + 1] == "D" || "M")) {
//         value = value - 100;
//         j++;
//         i++;
//       }
//       if (z[i] == rom[j]) {
//         value = num[j] + value;
//         ++i;
//         j = 0;
//       } else j++;
//     }
//   }
//   return value;
// };

// // My Attempt

const s = "III";
const a = "LVIII";
const n = "XIV";
const d = "XC";
// const n = "MCMXCIV";

// console.log(romInt(s));
// console.log(romInt(a));
console.log(romInt(n));
// const rom = {
//     1: "I",
//     4: "IV",
//     5: "V",
//     9: "IX",
//     10: "X",
//     40: "XL",
//     50: "L",
//     90: "XC",
//     100: "C",
//     400: "CD",
//     500: "D",
//     900: "CM",
//     1000: "M",
//   };
