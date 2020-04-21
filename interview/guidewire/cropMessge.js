
function solution(message, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const msgArr = message.split(' ');
    let result = '';
    for(let s of msgArr){
        const len = result.length;
        if((len + 1 + s.length) > K){
            break;
        }else{
            result = result ? result + ' ' + s : result + s;
        }
    }
    return result;
}

console.log(solution('Codility',8));