/* 
Input: 13
Output: thirten
--
Input: 42
Output: forty two
--
Input: 194
Output: one hundred ninety four
--
Input: 5421
Output: one thousand four hundread twenty one
--
Input: 78934
Output: seventy eight thousand nine hundread thirty four
--
Anything over 99,999 is invalid
*/

// https://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
const base = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thriteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];
const baseTens = ['twenty', 'thirty', 'fourty', 'fiffty', 'sixty', 'seventy', 'eigthy', 'ninety'];

function splitNum(num) {
  let string = num.toString(),
    base,
    baseTens = 'and';

  // check if num is a zero
  if (parseInt(string) === 0) return 'zero';

  return num;
}

console.log(splitNum(100));
