function generateFibonacci(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
}

const fibonaciSequnce = [0, 1];
for (let i = 2; i < n; i++) {
  const nextFibonacci = fibonaciSequnce[i - 1] + fibonaciSequnce[i - 2];
  fibonaciSequnce.push(nextFibonacci);
}
return fibonaciSequnce;
