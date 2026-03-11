//977. Squares of a Sorted Array

/*Example 1:
Input: nums = [-4,-1,0,3,10]                    Output: [0,1,9,16,100] 

Example 2:
Input: nums = [-7,-3,2,3,11]                   Output: [4,9,9,49,121]*/

var sortedSquares = function (nums) {
  const sortedSqr = [];
  for (let num of nums) {
    sortedSqr.push(num * num)
  };
  return sortedSqr.sort((a, b) => a - b);
};

console.log(sortedSquares(nums = [-4, -1, 0, 3, 10]));
console.log(sortedSquares(nums = [-7, -3, 2, 3, 11]));