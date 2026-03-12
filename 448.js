//448. Find All Numbers Disappeared in an Array
/*Example 1:
Input: nums = [4,3,2,7,8,2,3,1]                Output: [5,6]

Example 2:
Input: nums = [1,1]                             Output: [2] */

var findDisappearedNumbers = function (nums) {

  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  };

  return result;
};

console.log(findDisappearedNumbers(nums = [4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers(nums = [1, 1]));