class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];

    for (const b of s) {
      if (b == "(" || b == "{" || b == "[") {
        stack.push(b);
        continue;
      }

      const last = stack.pop();

      if (b == ")" && last == "(") continue;
      if (b == "}" && last == "{") continue;
      if (b == "]" && last == "[") continue;

      return false;
    }

    return stack.length == 0;
  }
}
