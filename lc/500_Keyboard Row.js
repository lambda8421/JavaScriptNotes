/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of 
American keyboard like the image below.

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
 
Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */

 var fLine = 'qwertyuiop';
 var sLine = 'asdfghjkl';
 var tLine = 'zxcvbnm';

var findWords = function(words) {
    let map = new Map();
    for(let i = 0; i < fLine.length; i ++){
        map.set(fLine.charAt(i),1);
    }
    for(let i = 0; i < sLine.length; i ++){
        map.set(sLine.charAt(i),2);
    }
    for(let i = 0; i < tLine.length; i ++){
        map.set(tLine.charAt(i),3);
    }

    let arr = [];
    for(let word of words){
        let result = 0;
        for(let i = 0;i < word.length; i++){
            let w = word.charAt(i).toLowerCase();
            let line = 0;
            if(map.get(w) === 1){
                line = 1;
            }else if(map.get(w) === 2){
                line = 2;
            }else {
                line = 3;
            }
            if(i === 0 ){
                result = line;
            }else{
                if(result !== line){
                    result = -1;
                    break;
                }
            }
        }
        result !== -1 ? arr.push(word) : null;
    }
    return arr;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))