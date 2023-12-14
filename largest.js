function findLargest(numbers) {
  if (numbers.length === 0) return null;
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

const numberList = [12, 56, 78, 34, 99, 42];
const largestNumber = findLargestNumber(numberList);
console.log(`The largest number is: ${largestNumber}`);
