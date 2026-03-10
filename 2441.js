//2441. Largest Positive Integer That Exists With Its Negative

/*Example 1:
Input: nums = [-1,2,-3,3]                                     Output: 3
Explanation: 3 is the only valid k we can find in the array.

Example 2:
Input: nums = [-1,10,6,7,-7,1]                                 Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Example 3:
Input: nums = [-10,8,6,7,-2,-3]                                Output: -1
Explanation: There is no a single valid k, we return -1. */

var findMaxK = function (nums) {

  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === - nums[j] && nums[i] > 0) {
        if (nums[i] > max) {
          max = nums[i];
        }
      }
    }
  };
  return max;
};

console.log(findMaxK(nums = [-1, 2, -3, 3]));
console.log(findMaxK(nums = [-1, 10, 6, 7, -7, 1]));
console.log(findMaxK(nums = [-10, 8, 6, 7, -2, -3]));