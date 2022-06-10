function isPalindrome(word) {
  // Write your algorithm here
  const splitWord= word.split('')
  const flippedWord = splitWord.reverse();
  const wordJoinedBack = flippedWord.join('')
  if (word === wordJoinedBack) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  Break up the word
  flip it
  join it back
  compare with the original word
*/


/*
  Add written explanation of your solution here
  We took the word, and split each letter into an array
  We flipped the array
  We put them back together, and made it a new variable
  We compared the original word and the new variable to see if they're the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("moshiach"));
}

module.exports = isPalindrome;
