function isPrime(value) {
  console.log(isPrime);
  if (!isPrime.answers){
    isPrime.answers = [];
  }
  console.log(isPrime);

  if (isPrime.answers[value] !== undefined){
    return isPrime.answers[value];
  }

  let prime = value !== 1;
  for (let i = 2; i < value; i++) {
    if (value % i === 0){
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;
}

console.log(isPrime(1));