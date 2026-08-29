class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const map = new Map();
    const result = Array.from({ length: temperatures.length }).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
      const curr = temperatures[i];
      for (const [k, v] of map) {
        if (curr > k) {
          console.log(k, v);
          for (const index of v) {
            result[index] = i - index;
          }
          map.delete(k);
        }
      }

      if (map.has(curr)) {
        const currIdxArr = map.get(curr);
        currIdxArr.push(i);
        map.set(curr, currIdxArr);
      } else {
        map.set(curr, [i]);
      }
    }

    return result;
  }
}
