class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let lo = 0;
    let hi = numbers.length - 1;

    while (lo < hi) {
      const sum = numbers[lo] + numbers[hi];
      if (sum < target) {
        lo += 1;
      } else if (sum > target) {
        hi -= 1;
      } else {
        return [lo + 1, hi + 1];
      }
    }
  }
}
