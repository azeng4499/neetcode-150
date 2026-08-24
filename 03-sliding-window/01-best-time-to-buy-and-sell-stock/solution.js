class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let tail = 0;
    let head = 1;
    let maxProfit = 0;
    let currProfit = 0;

    while (head < prices.length) {
      const tail_price = prices[tail];
      const head_price = prices[head];

      if (head_price < tail_price) {
        tail = head;
        head += 1;
      } else {
        currProfit = head_price - tail_price;
        maxProfit = Math.max(maxProfit, currProfit);
        head += 1;
      }
    }

    maxProfit = Math.max(maxProfit, currProfit);
    return maxProfit;
  }
}
