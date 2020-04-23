/*
iven a string containing only three types of characters: '(', ')' and '*',
write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const ln = [];
    const sn = [];

    for(let i=0;i<s.length;i++){
        const v = s.charAt(i);
        if(v === '('){
            ln.push(i);
        }else if(v === '*'){
            sn.push(i);
        }else{
            if(ln.length === 0 && sn.length === 0) return false;
            if(ln.length !== 0) ln.pop();
            else{
                sn.pop();
            }
        }
    }
    while(ln.length !== 0 && sn.length !== 0){
        const lp = ln.pop();
        const sp =  sn.pop();
        if(lp > sp){
            console.log(lp,sp)
            return false;
        }
    }
    return ln.length === 0
};

// console.log(checkValidString('()'))
console.log(checkValidString("(*())(()*((*(((()*())*()())(((((()*)()(((((()()))*)()))((())((((())))**(())()()()())((())(*())()*)()"));
