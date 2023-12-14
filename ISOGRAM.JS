function Isogram() {
  str = str.toLowerCase();
  let len = ste.length();
  let arr = str.split();
  arr.sort();
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let str1 = "Machine";
console.log(isIsogram(str1)); // Output: false

let str2 = "isogram";
console.log(isIsogram(str2)); // Output: true

let str3 = "GeeksforGeeks";
console.log(isIsogram(str3)); // Output: false

let str4 = "Alphabet";
console.log(isIsogram(str4)); // Output: false
