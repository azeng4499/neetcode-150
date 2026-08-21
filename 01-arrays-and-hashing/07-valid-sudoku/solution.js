class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => Array(9).fill(0));
    const cols = Array.from({ length: 9 }, () => Array(9).fill(0));
    const squares = Array.from({ length: 9 }, () => Array(9).fill(0));

    for (const row_idx in board) {
      for (const col_idx in board[row_idx]) {
        const num = board[row_idx][col_idx];

        if (num == ".") continue;

        const sqr_idx = Math.floor(row_idx / 3) * 3 + Math.floor(col_idx / 3);

        if (rows[row_idx][num - 1] == 1) return false;
        if (cols[col_idx][num - 1] == 1) return false;
        if (squares[sqr_idx][num - 1] == 1) return false;

        rows[row_idx][num - 1] = 1;
        cols[col_idx][num - 1] = 1;
        squares[sqr_idx][num - 1] = 1;
      }
    }

    return true;
  }
}
