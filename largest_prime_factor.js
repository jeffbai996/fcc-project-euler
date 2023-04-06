// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  // define an array to store the prime factors
  let primeFactors = [];
  // start with 2 as the first prime factor
  let i = 2;
  // loop through the number
  while (i <= number) {
    // if the number is divisible by the current prime factor
    if (number % i === 0) {
      // push the prime factor to the array
      primeFactors.push(i);
      // divide the number by the prime factor
      number /= i;
    } else {
      // increment if the number is not divisible by the current prime factor
      i++;
    }
  }
  return primeFactors[primeFactors.length - 1];
}

largestPrimeFactor(13195);