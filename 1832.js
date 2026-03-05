//1832. Check if the Sentence Is Pangram

/*Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"         Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:
Input: sentence = "leetcode"                                    Output: false */

var checkIfPangram = function (sentence) {

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  if (sentence.length < alphabets.length) return false;

  for (let i = 0; i < alphabets.length; i++) {
    if (!sentence.includes(alphabets[i])) {
      return false;
    }
  };
  return true;
};


console.info(checkIfPangram(sentence = "thequickbrownfoxjumpsoverthelazydog"));
console.info(checkIfPangram(sentence = "leetcode"));