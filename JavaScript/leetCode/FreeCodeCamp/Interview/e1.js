const anagrams = (s1, s2) => {
  if (s1.length != s2.length) {
    return false;
  }

  var appear1 = {};
  var appear2 = {};

  for (ch in s1) {
    if (ch in appear1) {
      appear1[ch] += 1;
    } else {
      appear1[ch] = 1;
    }
  }
};

console.log(anagrams("garden", "danger"));
