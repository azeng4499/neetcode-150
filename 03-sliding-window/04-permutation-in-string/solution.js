class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Hash = Array.from({ length: 26 }).fill(0);
    const s2Hash = Array.from({ length: 26 }).fill(0);

    for (const idx in s1) {
      const char1 = s1[idx];
      const char2 = s2[idx];
      s1Hash[char1.charCodeAt(0) - 97] += 1;
      s2Hash[char2.charCodeAt(0) - 97] += 1;
    }

    let lo = 0;
    let hi = s1.length - 1;

    while (true) {
      if (s1Hash.join(",") == s2Hash.join(",")) return true;

      const charLo = s2[lo];
      s2Hash[charLo.charCodeAt(0) - 97] -= 1;

      lo += 1;
      hi += 1;

      if (hi >= s2.length) break;

      const charHi = s2[hi];
      s2Hash[charHi.charCodeAt(0) - 97] += 1;
    }

    return false;
  }
}
