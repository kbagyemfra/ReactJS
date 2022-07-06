const repElements = (a) => {
  for (i = 0; i < a.length - 1; i++) {
    max = 0;
    for (j = i + 1; j < a.length; j++) {
      if (a[j] > max) {
        max = a[j];
        a[i] = a[j];
      }
    }
  }
  a[a.length - 1] = -1;
  return a;
};

var arr0 = [17, 18, 5, 4, 6, 1];
var arr1 = [400];
console.log(repElements(arr0));
console.log(repElements(arr1));
