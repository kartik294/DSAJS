//Find the remainder when one number is divided by another
function findRemainder(dividend, divisor) {
  if (divisor === 0) {
    return NaN; // Division by zero is undefined
  }

  let remainder = Math.abs(dividend); // Ensure the dividend is positive

  while (remainder >= Math.abs(divisor)) {
    remainder -= Math.abs(divisor);
  }

  // Apply the sign of the dividend to the remainder
  if (dividend < 0) {
    remainder = -remainder;
  }

  return remainder;
}

// Example usage:
const dividend = 23;
const divisor = 5;

const result = findRemainder(dividend, divisor);
console.log(`The remainder of ${dividend} divided by ${divisor} is ${result}`);
