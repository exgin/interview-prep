/* NOT FINISHED
given a sorted array, & a target averge | return a boolean weather there is
a pair that equals the target
 */
function averagePair(nums, target, start = 0, end = nums.length - 1) {
  if (nums.length === 0) return false;

  // since it's sorted, we can get rid a partial portion of the array if the target is big
  let mid = Math.floor((start + end) / 2);

  for (let i = 0; i < nums.length; i++) {
    let avg = (nums[i] + nums[i + 1]) / 2;
    console.log(avg);
    if (avg === target) return true;
    return false;
  }

  if (target > nums[mid]) {
    return averagePair(nums, target, mid + 1, end);
  } else {
    return averagePair(nums, target, start, mid - 1);
  }
}

console.log(averagePair([1, 2, 3], 1.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([1], 4));
