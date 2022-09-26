// https://leetcode.com/problems/happy-number

const getPerfectDigitalInvariant = (n: number): number => {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit ** 2;
  }

  return sum;
};

export const isHappy = (
  n: number,
  seenNumbers: Set<number> = new Set<number>([])
): boolean => {
  if (n === 1) {
    return true;
  }

  if (seenNumbers.has(n)) {
    return false;
  }

  seenNumbers.add(n);

  const sum = getPerfectDigitalInvariant(n);
  return isHappy(sum, seenNumbers);
};
