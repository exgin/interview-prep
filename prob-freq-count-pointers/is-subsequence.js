/* FINISHED 
Take 2 strings & checks whether the characters in the first string can 
from a seubsequence of the second string. Order matters 

(hello, hello world) => true
(abc, acb) => false
(abc, aaaWEb2414c) => true

*/
function isSubsequence(str1, str2) {
  // check entire string1, letter by letter if its in the second string.

  // base case, if there is no str1, its automatically true
  if (!str1) return true;

  // start at both strings index
  let str1Index = 0;
  let str2Index = 0;

  while (str2Index < str2.length) {
    // if 2 characters line up, increment to the next index in str1
    if (str2[str2Index] === str1[str1Index]) {
      str1Index += 1;
    }

    // if there are no more chars left, its true, because our index increases
    if (str1Index === str1.length) return true;

    // continune incrementing in str2
    str2Index += 1;
  }
  return false;
}
