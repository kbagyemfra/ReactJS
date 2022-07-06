const hCheck = (h) => {
  const e = [...h];

  h.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < h.length; i++) {
    if (e[i] !== h[i]) {
      ++count;
    }
  }
  return count;
};

var heights = [1, 1, 4, 2, 1, 3];

console.log(hCheck(heights));

var heights = [5, 1, 2, 3, 4];

console.log(hCheck(heights));

var heights = [1, 2, 3, 4, 5];

console.log(hCheck(heights));
