class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length != t.length) return false;

    const s_hash = Array.from({ length: 26 }).fill(0);
    const t_hash = Array.from({ length: 26 }).fill(0);
    for (let idx = 0; idx < s.length; idx++) {
      const s_char = s[idx];
      const t_char = t[idx];

      s_hash[s_char.charCodeAt(0) - 97] += 1;
      t_hash[t_char.charCodeAt(0) - 97] += 1;
    }

    return s_hash.join(",") == t_hash.join(",");
  }
}
