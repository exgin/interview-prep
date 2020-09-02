/* FINISHED
find the pair of integers that equal to the target
*/
function countPairs(nums, target, start = 0, end = nums.length - 1) {
  let count = 0;

  if (nums.length === 0) return 0;

  // go through and subtract by a number, search if another num equals remaining
  // ... if not, reset target & subtract the next int and look for remaining
  while (end >= start) {
    // we need a base case, so when 2 values equal the target, move -> <- in the array
    let sum = nums[start] + nums[end];
    if (target === sum) {
      // we found a pair
      count++;
      return countPairs(nums, target, start + 1, end - 1);
    } else if (sum < target) {
      return countPairs(nums, target, start + 1, end);
    }
    return countPairs(nums, target, start, end - 1);
  }
}
