/* Given two positive integers, find out if the two numbers have the same frequency of digits 
11, 111 => false
321, 123 => true
34,14 => false
*/
function sameFrequency(n1, n2) {
  let n1Str = n1.toString();
  let n2Str = n2.toString();
  if (n1Str.length !== n2Str.length) return false;

  // get frequencies
  let n1Freq = freqCounter(n1Str);
  let n2Freq = freqCounter(n2Str);

  // compare if they match up
  for (let k of n1Freq) {
    if (n1Freq.get(k) === n2Freq.get(k)) return true;
  }
  return false;
}

function freqCounter(nums) {
  const freq = new Map();

  // turn our nums to a string which allows us to iterate over it
  for (let k of nums.toString()) {
    let kCounter = freq.get(k) || 0;
    freq.set(k, kCounter + 1);
  }

  return freq;
}

console.log(sameFrequency(7654321, 1234567));
