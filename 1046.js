//1046. Last Stone Weight::
/*
Example 1:
Input: stones = [2,7,4,1,8,1]                               Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Example 2:
Input: stones = [1]                                         Output: 1
 */

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let first = stones.shift();
    let second = stones.shift();

    if (first !== second) {
      stones.push(first - second);
    }
  };

  return stones.length === 1 ? stones[0] : 0
};

console.log(lastStoneWeight(stones = [2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight(stones = [1]));