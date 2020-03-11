/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer,
replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay),
or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Accepted
332,685
Submissions
683,833

 */
var isHappy = function(n) {
  const set = new Set();

  while(true){
    if(n === 1) return true;
    if(set.has(n)){
      return false;
    }else{
      set.add(n);
      let number = 0;
      while(n !== 0){
        number += Math.pow(n%10,2);
        n = Math.floor(n/10);
      }
      n = number;
    }
  }
};

console.log(isHappy(19))