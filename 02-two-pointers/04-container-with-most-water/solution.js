class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let lo = 0;
    let hi = heights.length - 1;
    let maxArea = 0;

    while (lo < hi) {
      const width = hi - lo;
      const height = Math.min(heights[lo], heights[hi]);
      const area = width * height;

      maxArea = Math.max(area, maxArea);

      if (heights[lo] <= heights[hi]) {
        lo += 1;
      } else {
        hi -= 1;
      }
    }

    return maxArea;
  }
}
