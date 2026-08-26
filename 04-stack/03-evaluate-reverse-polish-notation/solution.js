class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const ops = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => Math.trunc(a / b),
    };

    const stack = [];

    for (const token of tokens) {
      if (token == "+" || token == "-" || token == "*" || token == "/") {
        const val2 = stack.pop();
        const val1 = stack.pop();

        stack.push(ops[token](val1, val2));
      } else {
        stack.push(parseInt(token));
      }
    }

    return stack.pop();
  }
}
