function SmallestthreeNumber(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}

const num1 = 14;
const num2 = 11;
const num3 = 22;
const smallest = SmallestthreeNumber(num1, num2, num3);
console.log(`The smallest number among ${num1},${num2},${num3} is Smallest`);
