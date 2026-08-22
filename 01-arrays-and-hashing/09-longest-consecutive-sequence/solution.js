class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let max_consec = 0;

    for (const num of set) {
      if (set.has(num - 1)) continue;

      let curr_consec = 1;
      let target = num + 1;
      while (set.has(target)) {
        curr_consec += 1;
        target += 1;
      }

      max_consec = Math.max(curr_consec, max_consec);
    }

    return max_consec;
  }
}
