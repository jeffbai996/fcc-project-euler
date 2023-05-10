// Problem 9: Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
  // Declare variables
  var a = 1;
  var b = 2;
  var c = 3;
  var product = 0;
  var sum = 0;
  var found = false;
  
  while (!found) {
    while (a < b) {
      while (b < c) {
        if (a + b + c === n) {
          if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
            product = a * b * c;
            found = true;
            break;
          }
        }
        c++;
      }
      if (found) {
        break;
      }
      b++;
      c = b + 1;
    }
    if (found) {
      break;
    }
    a++;
    b = a + 1;
    c = b + 1;
  }
  return product;
}
 
 specialPythagoreanTriplet(1000);