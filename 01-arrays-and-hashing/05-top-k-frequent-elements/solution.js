class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = new Map();
    for (const n of nums) {
      count.set(n, (count.get(n) || 0) + 1);
    }

    const heap = new MinPriorityQueue((entry) => entry[1]);

    for (const entry of count) {
      heap.enqueue(entry);
      if (heap.size() > k) heap.dequeue();
    }

    return heap.toArray().map(([num]) => num);
  }
}
