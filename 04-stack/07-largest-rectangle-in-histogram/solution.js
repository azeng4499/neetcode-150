class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let max = Math.max(...heights);
    let level = 1;

    while (true) {
      let largestBlock = 0;
      let counter = 0;
      for (const idx in heights) {
        const h = heights[idx];
        if (h == 0) {
          largestBlock = Math.max(largestBlock, counter);
          counter = 0;
        } else {
          counter++;
        }
        heights[idx] = Math.max(heights[idx] - 1, 0);
      }

      largestBlock = Math.max(largestBlock, counter);
      max = Math.max(max, largestBlock * level);
      level++;

      if (largestBlock < 2) break;
    }

    return max;
  }
}
