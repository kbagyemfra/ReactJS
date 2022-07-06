function fizzBuzz(n) {
  // Write your code here

  if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  }

  if (n % 3 === 0) {
    console.log("Fizz");
  }

  if (n % 5 === 0) {
    console.log("Buzz");
  }

  return n;
}

fizzBuzz(65);
