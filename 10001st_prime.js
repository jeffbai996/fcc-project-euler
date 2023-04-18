// Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

// function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  // check up to the square root of the number
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// function to find the nth prime number
function nthPrime(n) {
  let count = 0;
  let i = 1;
  // loop until the nth prime number is found
  while (count < n) {
    i++;
    if (isPrime(i)) {
      count++;
    }
  }
  return i;
}

nthPrime(10001);