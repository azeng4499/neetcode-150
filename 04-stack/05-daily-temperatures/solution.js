class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const stack = [];
    const result = Array.from({ length: temperatures.length }).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
      while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
        const idx = stack.pop();
        result[idx] = i - idx;
      }

      stack.push(i);
    }

    return result;
  }
}
