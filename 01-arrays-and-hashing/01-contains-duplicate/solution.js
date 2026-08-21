class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const set = new Set(nums);
    return set.size != nums.length;
  }
}
