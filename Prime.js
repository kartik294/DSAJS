function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const numToCheck = 17;
const isNumPrime = isPrime(numToCheck);
if (isNumPrime) {
  console.log(`${numToCheck} is a Prime Number`);
} else {
  console.log(`${numToCheck} is not a Prime Number`);
}
