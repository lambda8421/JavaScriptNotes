let str = 'abcabcabc';

console.log(str.split('b'));
console.log(str.split('b',2));



str = 'b';
console.log(str.split('b'))  //['','']

str = 'abbc';
console.log(str.split('b'))  //['a','','c']

console.log(str[0])
