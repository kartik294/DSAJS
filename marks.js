function calculateGrade(marks) {
  if (marks >= 0 && marks <= 25) {
    return "F";
  } else if (marks >= 26 && marks <= 45) {
    return "E";
  } else if (marks >= 46 && marks <= 50) {
    return "D";
  } else if (marks >= 51 && marks <= 60) {
    return "C";
  } else if (marks >= 61 && marks <= 80) {
    return "B";
  } else if (marks >= 81 && marks <= 100) {
    return "A";
  } else {
    return "Invalid marks"; // Return for marks outside the specified range
  }
}

// Example usage:
const studentMarks = 75;
const grade = calculateGrade(studentMarks);
console.log(`For marks ${studentMarks}, the grade is: ${grade}`);
