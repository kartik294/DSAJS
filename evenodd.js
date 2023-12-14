function checkOddEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage:
const inputNumber = 7;
const result = checkOddEven(inputNumber);
console.log(`The number ${inputNumber} is ${result}`);
