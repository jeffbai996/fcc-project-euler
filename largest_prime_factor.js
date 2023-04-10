// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(number) {
  let largestFactor = 1;

  for (let i = 2; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) {
      largestFactor = i;
      number = number / i;
      i = 1;
    }
  }
  return largestFactor;
}

largestPrimeFactor(13195);