class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of nums) {
      if (set.has(num - 1)) continue;

      let currLongest = 1;
      let nextTarget = num + 1;
      while (set.has(nextTarget)) {
        nextTarget += 1;
        currLongest += 1;
      }

      longest = Math.max(currLongest, longest);
    }

    return longest;
  }
}
