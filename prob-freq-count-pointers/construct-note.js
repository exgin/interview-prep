/* FINISHED 
if the message can be built by the letters given, return true, else return false */
function constructNote(msg, ltrs) {
  // get the map for both msg & ltrs
  let msgCount = freqCounter(msg);
  let ltrsCount = freqCounter(ltrs);

  // compare the key & value for the maps
  // if the letter map even has the same key & if the letter map value is greater than or equal to the msgs map
  for (let key of msgCount) {
    if (ltrsCount.get(key) == msgCount.get(key)) {
      return true;
    }
  }
  return false;
}

// make a freq counter to count the number of letters in both the message & letters
function freqCounter(str) {
  const freq = new Map();

  for (let el of str) {
    let elCount = freq.get(el) || 0;
    freq.set(el, elCount + 1);
  }
  return freq;
}

// console.log(freqCounter('aa'));
// console.log(freqCounter('abc'));
console.log(constructNote('aa', 'aaabcaa'));
