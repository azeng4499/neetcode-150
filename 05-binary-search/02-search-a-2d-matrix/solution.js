class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    const totalLen = m * n;

    let lo = 0;
    let hi = totalLen - 1;

    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);

      const row = Math.floor(mid / n);
      const col = mid % n;

      const resolvedNum = matrix[row][col];

      console.log(mid, row, col, resolvedNum);

      if (resolvedNum == target) return true;
      else if (resolvedNum < target) lo = mid + 1;
      else hi = mid - 1;
    }

    return false;
  }
}
