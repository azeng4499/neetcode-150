class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (t.length == "") return "";

    const refMap = new Map();
    const map = new Map();

    for (const char of t) {
      refMap.set(char, (refMap.get(char) | 0) + 1);
    }

    let lo = 0;
    let resultLen = Number.MAX_SAFE_INTEGER;
    let result = "";
    let need = refMap.size;
    let have = 0;

    for (let hi = 0; hi < s.length; hi++) {
      const char = s[hi];
      map.set(char, (map.get(char) | 0) + 1);

      if (refMap.has(char) && refMap.get(char) == map.get(char)) {
        have++;
      }

      while (need == have) {
        if (hi - lo + 1 < resultLen) {
          resultLen = hi - lo + 1;
          result = s.substring(lo, hi + 1);
        }
        const loChar = s[lo];
        map.set(loChar, map.get(loChar) - 1);
        if (refMap.has(loChar) && map.get(loChar) < refMap.get(loChar)) {
          have--;
        }
        lo++;
      }
    }

    return result;
  }
}
