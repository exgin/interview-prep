/* FINISHED
return the longest conseuctive decrease of integers
[5,3,1,3,0] => 3 | 5,3,1
[5,4,4,4,3,2] => 3 | 4,3,2
[2,2,1] => 2 | 2,1

*/
function longestFall(nums) {
  // base case
  if (nums.length === 0) return 0;

  let distance = 1;

  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    let nextVal = nums[i + 1];
    if (nums[i] > nextVal) {
      distance++;
    } else {
      // if not, stop the loop
      break;
    }
  }
  return distance;
}

console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]));
