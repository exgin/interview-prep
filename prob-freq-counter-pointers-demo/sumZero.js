function sumZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        return [nums[i], nums[j]];
      }
    }
  }
}
// end sumZero

function sumZeroMultiplePointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// end sumZeroMultiplePointers

// my version
function sumZeroWithPointers(arr, start = 0, end = arr.length - 1) {
  while (end >= start) {
    let sum = arr[start] * arr[end];

    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      return sumZeroWithPointers(arr, start, end - 1);
    } else {
      return sumZeroWithPointers(arr, start + 1, end);
    }
  }
}
