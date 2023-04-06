// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  let primeFactors = [];
  let i = 2;
  while (i <= number) {
    if (number % i === 0) {
      primeFactors.push(i);
      number /= i;
    } else {
      i++;
    }
  }
  return primeFactors[primeFactors.length - 1];
}

largestPrimeFactor(13195);