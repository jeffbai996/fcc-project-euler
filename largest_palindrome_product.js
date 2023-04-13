// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function isPalindrome(number) {
  // convert number to string, split into array, reverse array, join array into string
  const strNumber = number.toString();
  const reversedStrNumber = strNumber.split('').reverse().join('');
  return strNumber === reversedStrNumber;
}

function largestPalindromeProduct(n) {
  // find largest n-digit number
  const max = Math.pow(10, n) - 1;
  const min = Math.pow(10, n - 1);
  // find largest palindrome product of two n-digit numbers
  let largestPalindrome = 0;
  // loop through all possible combinations of n-digit numbers
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      const product = i * j;
      // if product is a palindrome and greater than largest palindrome, update largest palindrome
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }
  return largestPalindrome;
}

largestPalindromeProduct(3);