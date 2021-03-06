/* correct solution, but O(n^2) */
function squares(nums1, nums2) {
  // must be the same length
  if (nums1.length !== nums2.length) {
    return false;
  }

  // looping through the array, which is O(n) aswell
  for (let i = 0; i < nums1.length; i++) {
    // looking for correct index of the number of the 1st array, but its O(n)
    let correctIndex = nums2.indexOf(nums1[i] ** 2);

    // entire function is false
    if (correctIndex === -1) {
      return false;
    }
    // remove the found index
    nums2.splice(correctIndex, 1);
  }

  return true;
}
// end squares

/* simple version of frequnecyMap.js & frequencyObj.js */
function createFrequencyCounter(arr) {
  const freq = new Map();

  for (let el of arr) {
    freq[el] = freq[el] + 1 || 1;
  }
  return freq;
}

/* still prefoms better, since its not NESTED loops = simplify, O(n) */
function squaresWithFreqCounter(nums1, nums2) {
  if (nums1.length !== nums2.length) return false;

  let nums1Freqs = createFrequencyCounter(nums1); // loop once O(n)
  let nums2Freqs = createFrequencyCounter(nums2); // loop again O(n)

  for (let key of nums1Freqs.keys()) {
    // loop once again O(n)
    if (nums2Freqs.has(key ** 2) === false) {
      return false;
    }

    if (nums2Freqs.get(key ** 2) !== nums1Freqs.get(key)) {
      return false;
    }
  }

  return true;
}
// end squaresWithFreqCounter

/* 
*** freq counter challenege ***

Given two strings, determine if the second string is an anagram of the first
Anagram- a word, phrase, or name formed by rearranging the letters of another
*/
function createFrequencyCounterStr(str) {
  const freq = new Map();

  for (let el of str) {
    let elCount = freq.get(el) || 0;
    freq.set(el, elCount + 1);
  }
  return freq;
}

function validAnagram(str1, str2) {
  // we don't even want to compare if the length is off
  if (str1.length !== str2.length) return false;

  // 1. get frequcny of letters in both strings
  let str1Freq = createFrequencyCounterStr(str1);
  let str2Freq = createFrequencyCounterStr(str2);

  console.log(str1Freq);

  // now if the size's Map's size is off, its automatically false
  if (str1Freq.size !== str1Freq.size) return false;

  // 2. compare if the key value's are the same
  for (let ltr of str1Freq.keys()) {
    // comapre the key's values
    if (str2Freq.get(ltr) !== str1Freq.get(ltr)) return false;
  }
  return true;
}
