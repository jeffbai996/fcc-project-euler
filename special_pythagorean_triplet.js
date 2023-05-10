// Problem 9: Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
  let a, b, c;
  // Iterate through possible values of a and b
  for (a = 1; a < n; a++) {
    for (b = a; b < n; b++) {
      // Calculate c
      c = n - a - b;
      // Check if a, b, c form a Pythagorean triplet
      if (a * a + b * b === c * c) {
        // Return the product abc
        return a * b * c;
      }
    }
  }
  // If no solution is found, return null
  return null;
}
 
 specialPythagoreanTriplet(1000);