// https://leetcode.com/problems/minimum-window-substring/

/**
 * Map of the number of each character are found in target string.
 * Used by sliding window algorithm to compare frequency of matching characters in a given substring.
 */
const getTargetMap = (target: string) => {
  let map = {};

  for (let character of target) {
    map[character] = (map[character] ?? 0) + 1;
  }

  return map;
};

export const minWindow = (s: string, t: string): string => {
  if (!(s.length && t.length)) {
    return "";
  }

  // Indexes for the shortest substring containing all target characters so far
  let [minHead, minEnd] = [0, Infinity];

  // Start and end pointers of a substring when performing the sliding window algorithm
  let [left, right] = [0, 0];

  // Amount of target characters missing in the substring
  let count = t.length;

  let targetMap = getTargetMap(t);

  while (right < s.length) {
    const rightChar = s[right];

    if (targetMap.hasOwnProperty(rightChar)) {
      if (targetMap[rightChar] > 0) {
        count--;
      }
      targetMap[rightChar]--;
    }

    right++;

    while (count === 0) {
      if (right - left < minEnd - minHead) {
        minEnd = right;
        minHead = left;
      }

      const leftChar = s[left];

      if (targetMap.hasOwnProperty(leftChar)) {
        if (targetMap[leftChar] === 0) {
          count++;
        }
        targetMap[leftChar]++;
      }

      left++;
    }
  }

  /**
   * Returns "" if no valid substring is found, otherwise return substring
   */
  return minEnd === Infinity ? "" : s.slice(minHead, minEnd);
};

// console.log("expect 'aa'", minWindow("aa", "aa"));
// console.log("expect ''", minWindow("aa", ""));
// console.log("expect ''", minWindow("aa", ""));
// console.log("expect 'BANC'", minWindow("ADOBECODEBANC", "ABC"));
