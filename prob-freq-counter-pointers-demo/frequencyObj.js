// a function to create a simple
// frequency counter using an object
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}

// a char counter
function charCount(str) {
  str.split('').reduce((obj, char) => {
    if (/[A-Z0-9]/i.test(char)) {
      char = char.toLowerCase();
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  }, {});
}
