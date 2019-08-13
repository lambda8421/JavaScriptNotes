/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces .
The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7

Example 2:

Input: " 3/2 "
Output: 1

Example 3:

Input: " 3+5 / 2 "
Output: 5

Note:

    You may assume that the given expression is always valid.
    Do not use the eval built-in library function.
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/ /g,'');
    let arr = [];
    for (let i = 0; i < s.length;) {
        if (s.charAt(i) === '*'){
            let n1 = arr.pop();
            arr.push(n1*parseInt(s.charAt(i+1)));
            i = i+2;
        }else if (s.charAt(i) === '/'){
            let n1 = arr.pop();
            arr.push(Math.floor(n1/parseInt(s.charAt(i+1))));
            i = i+2;
        }else {
            arr.push(s.charAt(i));
            i++;
        }
    }

    let result = parseInt(arr[0]);
    for (let i = 1; i < arr.length; ) {
        if (arr[i] === '+'){
            result = result + parseInt(arr[i+1]);
            i= i+2;
        } else if (arr[i] === '-') {
            result = result - parseInt(arr[i+1]);
            i= i+2;
        }else {
            continue;
        }
    }
    return result;
};

// console.log(calculate('3+2*2'));
// console.log(calculate('3/2'));
console.log(calculate('3+5 / 2'));
