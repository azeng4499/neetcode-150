class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = new Map();
    for (const num of nums) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }

    const resultArr = [...map];
    resultArr.sort((x, y) => y[1] - x[1]);

    return resultArr.slice(0, k).map((x) => x[0]);
  }
}
