const sentences = [
  "i love javascript",
  "frontend is awesome",
  "coding is fun",
  "react is powerful"
];

const capitalizedSentences = sentences.map( sentence => {
    const firstLetter = sentence[0].toUpperCase();
    const restOfString = sentence.slice(1)
    return firstLetter + restOfString
}

)
console.log(capitalizedSentences);