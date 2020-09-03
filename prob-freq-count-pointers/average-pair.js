/*
given a sorted array, & a target averge | return a boolean weather there is
a pair that equals the target
 */
function averagePair(nums, target, start = 0, end = nums.length - 1) {
  if (nums.length === 0) return false;

  while (end >= start) {
    let avg = (nums[start] + nums[end]) / 2;

    if (avg === target) return true;

    if (avg < target) {
      return averagePair(nums, target, start + 1, end);
    }
    return averagePair(nums, target, start, end - 1);
  }
  return false;
}

console.log(averagePair([1, 2, 3], 0.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([1], 4));
