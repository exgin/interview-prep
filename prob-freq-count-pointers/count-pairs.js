/* NOT FINISHED
find the pair of integers that sum equal to the target

Examples:
Input: countPairs([3,1,5,4,2], 6) // 2 because (1+5) & (2+4)
Input: countPairs([4,6,2,7], 10) // 1 because (4+6)
*/

// time O(n)
function countPairs(nums, target) {
  // base case
  if (nums.length === 0) return 0;

  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) pairs++;
  }

  return pairs;
}

console.log(countPairs([4, 6, 2, 7], 10));

// time O(n log n)
function countPairsV2(nums, target, start = 0, end = nums.length - 1) {
  nums.sort((a, b) => a - b);
  let pairs = 0;
  while (end >= start) {
    let sum = nums[start] + nums[end];

    if (sum === target) {
      pairs++;
      return countPairsV2(nums, target, start + 1, end - 1);
    } else if (sum < target) return countPairsV2(nums, target, start + 1, end);
    return countPairsV2(nums, target, start, end - 1);
  }
  return pairs;
}
