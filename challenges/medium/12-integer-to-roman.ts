// https://leetcode.com/problems/integer-to-roman/

const romanSymbolsByDecimalPlace = {
  1: ["I", "X", "C", "M"],
  5: ["V", "L", "D"],
};

const getDigits = (integer: number): number[] | undefined => {
  if (!Number.isInteger(integer) || integer < 0) {
    console.error("not a valid positive integer");
    return;
  }

  return integer
    .toString()
    .split("")
    .map((decimal) => parseInt(decimal));
};

export const intToRoman = (integer: number): string | undefined => {
  const decimalValues = getDigits(integer);

  if (!decimalValues) {
    return undefined;
  }

  return decimalValues.reduce((accumulator, decimalValue, index) => {
    const decimalPlace = decimalValues.length - index;
    const oneDecimalSymbol = romanSymbolsByDecimalPlace[1][decimalPlace - 1];
    const fiveDecimalSymbol = romanSymbolsByDecimalPlace[5][decimalPlace - 1];
    const tenDecimalSymbol = romanSymbolsByDecimalPlace[1][decimalPlace];

    if (decimalValue === 9) {
      return `${accumulator}${oneDecimalSymbol}${tenDecimalSymbol}`;
    } else if (decimalValue >= 5) {
      return `${accumulator}${fiveDecimalSymbol}${oneDecimalSymbol.repeat(
        decimalValue - 5
      )}`;
    } else if (decimalValue === 4) {
      return `${accumulator}${oneDecimalSymbol}${fiveDecimalSymbol}`;
    } else {
      return `${accumulator}${oneDecimalSymbol.repeat(decimalValue)}`;
    }
  }, "");
};
