// Leetcode - 551. Student Attendance Record I
/*Example 1:
Input: s = "PPALLP"                                             Output: true
Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

Example 2:
Input: s = "PPALLL"                                              Output: false
Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award. */

var checkRecord = function (s) {
  let countA = 0;

  if (s.includes('LLL')) {
    return false;
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      countA++;
      if (countA >= 2) {
        return false;
      }
    }
  };

  return true;
};


console.log(checkRecord(s = "PPALLP"));
console.log(checkRecord(s = "PPALLL"));