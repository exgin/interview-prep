/* start with pseduocode */
function counter(str) {
  /* 

  // create empty object to hold char counts
  // loop ovr each chear in str
    // if char is a ltter, downcase first
      // if char is in obj add to the count
      // other add to key of obj and set value to 1

  */
}

function createFrequencyCounter(array) {
  let frequencies = new Map();

  for (let val of array) {
    let valCount = frequencies.get(val) || 0;

    frequencies.set(val, valCount + 1);
  }

  return frequencies;
}

console.log(createFrequencyCounter(['Hi Bob! 12345']));
