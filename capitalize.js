function capitalizeWords(sentence) {
  const words = [];
  let capitalizeNext = true;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      capitalizeNext = true;
      words.push(sentence[i]);
    } else if (capitalizeNext) {
      words.push(sentence[i].toUpperCase());
      capitalizeNext = false;
    } else {
      words.push(sentence[i]);
    }
  }

  return words.join("");
}

// Example usage:
const inputSentence = "this is a sample sentence";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log("Original sentence:", inputSentence);
console.log("Capitalized sentence:", capitalizedSentence);
