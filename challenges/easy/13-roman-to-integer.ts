// https://leetcode.com/problems/roman-to-integer/

const romanToIntegerHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const romanToInt = (romanNumeral: string): number => {
  let accumulator = 0;

  for (let index = 0; index < romanNumeral.length; index++) {
    const currentInteger =
      romanToIntegerHash[
        romanNumeral[index] as keyof typeof romanToIntegerHash
      ];
    const nextInteger =
      romanToIntegerHash[
        romanNumeral[index + 1] as keyof typeof romanToIntegerHash
      ];

    if (nextInteger > currentInteger) {
      accumulator += nextInteger - currentInteger;
      index++;
    } else {
      accumulator += currentInteger;
    }
  }

  return accumulator;
};
