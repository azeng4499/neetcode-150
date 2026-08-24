class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const count = new Map();
    let tail = 0;
    let maxFreq = 0;
    let best = 0;

    for (let head = 0; head < s.length; head++) {
      // increment count for s[head]
      const h_count = count.get(s[head]) || 0;
      count.set(s[head], h_count + 1);
      // update maxFreq
      maxFreq = Math.max(maxFreq, h_count + 1);

      while (head - tail + 1 - maxFreq > k) {
        // decrement count for s[tail], tail++
        count.set(s[tail], count.get(s[tail]) - 1);
        tail += 1;
      }

      best = Math.max(best, head - tail + 1);
    }

    return best;
  }
}
