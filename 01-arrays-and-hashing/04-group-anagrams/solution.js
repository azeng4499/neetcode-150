class Solution {
  returnAnagramArr(str) {
    const result = Array(26).fill(0);
    for (const char of str) {
      result[char.charCodeAt(0) - 97] += 1;
    }
    return result.join(",");
  }

  groupAnagrams(strs) {
    const result = [];
    const map = new Map();
    let index = 0;

    for (const str of strs) {
      const curr_str_arr = this.returnAnagramArr(str);
      if (map.has(curr_str_arr)) {
        const result_index = map.get(curr_str_arr);
        result[result_index].push(str);
      } else {
        map.set(curr_str_arr, index);
        index += 1;
        result.push([str]);
      }
    }

    return result;
  }
}
