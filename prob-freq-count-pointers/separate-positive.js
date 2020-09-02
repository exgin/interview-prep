/* FINISHED
separate the array to which the positives are on the start & the negatives are to the end
problem must be done in place, do not build a copy of the input array

[2,-1,-3,6,-8,10] => [2,10,6,-3,-1,-8] 
*/

function separatePositive(nums, start = 0, end = nums.length - 1) {
  while (end >= start) {
    // when the first num is negative & last number is positive...
    if (nums[start] < 0 && nums[end] > 0) {
      // swap 'em
      [nums[start], nums[end]] = [nums[end], nums[start]];

      // now move close in both spots of the array
      return separatePositive(nums, start + 1, end - 1);
    } else if (nums[start] > 0) {
      // if the first num isnt negative, move up
      return separatePositive(nums, start + 1, end);
    }
    // else the last number is negative & in the right spot
    return separatePositive(nums, start, end - 1);
  }
  return nums;
}

console.log(separatePositive([2, -1, -3, 6, -8, 10]));
