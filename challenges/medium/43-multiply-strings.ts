// https://leetcode.com/problems/multiply-strings/

export const multiply = (
  numberString1: string,
  numberString2: string
): string => {
  const num1 = [...numberString1].map((char) => parseInt(char));
  const num2 = [...numberString2].map((char) => parseInt(char));

  const result = Array(num1.length + num2.length).fill(0);

  for (let num1Index = num1.length - 1; num1Index >= 0; num1Index--) {
    let carry = 0;

    for (let num2Index = num2.length - 1; num2Index >= 0; num2Index--) {
      const decimalPlace = 1 + num1Index + num2Index;

      const newValue =
        result[decimalPlace] + carry + num1[num1Index] * num2[num2Index];

      carry = Math.floor(newValue / 10);
      result[decimalPlace] = newValue % 10;
    }

    result[num1Index] += carry;
  }

  return result.join("").replace(/^0*(\d)/, "$1");
};
