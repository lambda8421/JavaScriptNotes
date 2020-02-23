const numbers = [1, 2, 3];

function summarize(pre, cur) {
  console.log(pre, cur);
  return pre + cur;
}

const sum = numbers.reduce(summarize, 0);

console.log(sum);
