class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  isValidAscii(code) {
    if (
      (code >= 48 && code <= 57) ||
      (code >= 97 && code <= 122) ||
      (code >= 65 && code <= 90)
    ) {
      return true;
    }

    return false;
  }

  isPalindrome(s) {
    let lo = 0;
    let hi = s.length - 1;

    while (lo < hi) {
      let a = s.charCodeAt(lo);
      if (!this.isValidAscii(a)) {
        lo++;
        continue;
      }

      let b = s.charCodeAt(hi);
      if (!this.isValidAscii(b)) {
        hi--;
        continue;
      }

      if (a >= 65 && a <= 90) a += 32;
      if (b >= 65 && b <= 90) b += 32;

      if (a !== b) return false;

      lo++;
      hi--;
    }

    return true;
  }
}
