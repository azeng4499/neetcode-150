class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    const height_map = new Map();
    for (const x of height) {
      height_map.set(x, (height_map.get(x) || 0) + 1);
    }

    let level = 0;
    let lo = 0;
    let hi = height.length - 1;
    let total_rain = 0;
    let filled = height_map.get(0) || 0;

    while (lo < hi) {
      const a = height[lo];
      if (a <= level) {
        height_map.set(a, height_map.get(a) - 1);
        filled -= 1;
        lo += 1;
        continue;
      }

      const b = height[hi];
      if (b <= level) {
        height_map.set(b, height_map.get(b) - 1);
        filled -= 1;
        hi -= 1;
        continue;
      }

      total_rain += filled;
      level += 1;
      filled += height_map.get(level) || 0;
    }

    return total_rain;
  }
}
