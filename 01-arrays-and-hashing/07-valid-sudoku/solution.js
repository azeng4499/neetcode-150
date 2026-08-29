class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const squares = Array.from({ length: 9 }, () => new Set());

    for (let ridx = 0; ridx < 9; ridx++) {
      for (let cidx = 0; cidx < 9; cidx++) {
        const num = board[ridx][cidx];
        if (num == ".") continue;

        const sidx = Math.floor(ridx / 3) * 3 + Math.floor(cidx / 3);

        if (rows[ridx].has(num)) return false;
        if (cols[cidx].has(num)) return false;
        if (squares[sidx].has(num)) return false;

        rows[ridx].add(num);
        cols[cidx].add(num);
        squares[sidx].add(num);
      }
    }

    return true;
  }
}
