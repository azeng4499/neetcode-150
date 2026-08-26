class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);

    if (this.minStack.length == 0) {
      this.minStack.push(val);
    } else {
      this.minStack.push(Math.min(val, this.minStack.at(-1)));
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack.at(-1);
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack.at(-1);
  }
}
