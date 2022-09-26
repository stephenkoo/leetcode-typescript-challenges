// https://leetcode.com/problems/longest-common-prefix/

export const longestCommonPrefix = (stringArray: string[]): string => {
  const sortedArray = [...stringArray].sort();
  const firstString = sortedArray[0];
  const lastString = sortedArray[sortedArray.length - 1];

  if (firstString === lastString) {
    return firstString;
  }

  let commonPrefixIndex = 0;

  while (
    firstString.charAt(commonPrefixIndex) ===
    lastString.charAt(commonPrefixIndex)
  ) {
    commonPrefixIndex += 1;
  }

  return firstString.slice(0, commonPrefixIndex);
};
