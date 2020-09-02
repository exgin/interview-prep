/* FINISHED 
return the pivot index where the sum of the nums to the left, equal to the sums of the right
if there are more than one valid pivot index, return the smallest

[1,2,1,6,3,1] => 3 | 1,2,1 = 4 & 3,1 = 4
[5,2,7] -1 | no valid pivot
*/
function pivotIndex(nums) {
  let rightSum = nums.reduce((a, b) => a + b); // aka, the total sum of the array
  console.log(rightSum);
  let leftSum = 0;
  let pivotIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];

    // when the left & right equal eachother, return that index
    if (leftSum === rightSum) {
      pivotIndex = i;
      break;
    }

    rightSum -= nums[i];
    console.log(rightSum);
  }
  return pivotIndex;
}

console.log(pivotIndex([1, 3, 1]));

/********************************************** starting version ********************************/
function pivotIndexV1(nums, start = 0, end = nums.length - 1) {
  // maybe start from oppositve ends of the array and keep adding each value

  for (start; start < nums.length; start++) {
    let leftSum = (nums[start] += nums[start + 1]);
    console.log(leftSum);
  }

  for (end; end >= 0; end--) {
    let rightSum = (nums[end] += nums[end - 1]);
    console.log(rightSum);
  }
}

console.log(pivotIndexV1([1, 2, 1, 6, 3, 1]));
