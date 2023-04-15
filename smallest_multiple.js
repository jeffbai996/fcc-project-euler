// Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function gcd(a, b) {
  // This function calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  // This function calculates the least common multiple (LCM) of two numbers using their GCD.
  return (a * b) / gcd(a, b);
}

function smallestMult(n) {
  // This function finds the smallest positive number that is evenly divisible by all numbers from 1 to n.
  let multiple = 1;

  // Iterate through all numbers from 2 to n.
  for (let i = 2; i <= n; i++) {
    // Calculate the LCM of the current multiple and the current number (i).
    multiple = lcm(multiple, i);
  }

  // Return the smallest positive number evenly divisible by all numbers from 1 to n.
  return multiple;
}

smallestMult(20);