const parity = (n) => {
  if (!Number.isFinite(n)) {
    return -1;
  }

  console.log(n);

  if (n % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
};

// parity(3);
// parity(4);
// parity(5);
console.log(parity(7));
parity(8);
