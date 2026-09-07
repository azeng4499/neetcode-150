class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    if (nums.length == 1 && nums[0] !== target) return -1;

    const half = Math.floor(nums.length / 2);

    if (target == nums[half]) return half;
    else if (target > nums[half]) {
      const idx = this.search(nums.slice(half, nums.length), target);
      return idx == -1 ? -1 : idx + half;
    } else {
      return this.search(nums.slice(0, half), target);
    }
  }
}
