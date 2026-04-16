//1037. Valid Boomerang--leetcode problems
/*Example 1:
Input: points = [[1,1],[2,3],[3,2]]            Output: true
Example 2:
Input: points = [[1,1],[2,2],[3,3]]             Output: false */

var isBoomerang = function (points) {

  const [[x1, y1], [x2, y2], [x3, y3]] = points;

  const area = x1 * (y2 - y3) +
    x2 * (y3 - y1) +
    x3 * (y1 - y2);

  return area !== 0;

};

console.log(isBoomerang(points = [[1, 1], [2, 3], [3, 2]]));
console.log(isBoomerang(points = [[1, 1], [2, 2], [3, 3]]));