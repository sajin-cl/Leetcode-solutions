//2455. Average Value of Even Numbers That Are Divisible by Three
/*Example 1:
Input: nums = [1,3,6,10,12,15]                         Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.

Example 2:
Input: nums = [1,2,4,7,10]                             Output: 0 */

var averageValue = function (nums) {

  let validNumberCount = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0 && nums[i] % 3 == 0) {
      validNumberCount++;
      sum += nums[i]
    };

  };

  if (validNumberCount > 0) {
    return Math.floor(sum / validNumberCount);
  }
  else {
    return 0;
  }
};

console.log(averageValue(nums = [1, 3, 6, 10, 12, 15]));
console.log(averageValue(nums = [1, 2, 4, 7, 10]));
console.log(averageValue(nums = [43, 9, 75, 76, 25, 96, 46, 85, 19, 29, 88, 2, 5, 24, 60, 26, 76, 24, 96, 82, 97, 97, 72, 35, 21, 77, 82, 30, 94, 55, 76, 94, 51]))
