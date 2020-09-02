/* NOT FINISHED
its sorted, so we can use pointers here 
if both the first & last element is equal, there's only 1 unquie element, since its sorted
if not, didve & keep repeating
*/
function countUniqueValues(nums, start = 0, end = nums.length - 1, unique = 0) {
  if (nums.length === 0) return 0;

  while (end >= start) {
    if (nums[start] === nums[end]) {
      // how to return & count the unique value
      return unique;
    }

    let mid = Math.floor((start + end) / 2);

    // everytime we call the function, there has to be a unique val.. talk more about this one
    if (nums[start] < nums[end]) {
      return countUniqueValues(nums, start, mid - 1, unique + 1);
    }
    return countUniqueValues(nums, mid + 1, end, unique + 1);
  }
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 3, 4, 5]));
