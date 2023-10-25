function reverseWordsInSentence(sentence) {
    // Split the sentence into words using space as the delimiter.
    const words = sentence.split(' ');

    // Function to reverse a single word.
    const reverseWord = (word) => {
        return word.split('').reverse().join('');
    };

    // Reverse each word in the array.
    const reversedWords = words.map(reverseWord);

    // Join the reversed words to form the reversed sentence.
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log("Original sentence: " + inputSentence);
console.log("Reversed sentence: " + reversedSentence);
