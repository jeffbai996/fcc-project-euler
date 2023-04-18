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
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


function nthPrime(n) {
  let count = 0;
  let i = 1;
  while (count < n) {
    i++;
    if (isPrime(i)) {
      count++;
    }
  }
  return i;
}

nthPrime(10001);