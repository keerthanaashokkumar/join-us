const inputString= 'The quick brown fox jumped over the lazy dog';
  const longWord= findLongestWord(inputString);
  console.log(longWord)
function findLongestWord(str) {
    const largestWord = str.split(' ');
    let longWord = '';
    for (let i = 0; i < largestWord.length; i++) {
      const word = largestWord[i];
      if (word.length > longWord.length) {
        longWord = word;
      }
    }
    return longWord;
  }
  