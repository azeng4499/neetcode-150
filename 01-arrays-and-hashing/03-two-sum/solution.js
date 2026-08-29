class Solution {
  twoSum(nums, target) {
    const seen = new Map();

    for (let idx = 0; idx < nums.length; idx++) {
      const num = nums[idx];
      const need = target - num;

      if (seen.has(need)) {
        return [seen.get(need), idx];
      } else {
        seen.set(num, idx);
      }
    }
  }
}
