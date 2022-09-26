// https://leetcode.com/problems/spiral-matrix/

export const spiralOrder = (matrix: number[][]): number[] => {
  const spirals: number[] = [];
  const mutableMatrix = [...matrix];

  while (mutableMatrix.length) {
    spirals.push(
      ...(mutableMatrix.shift() || []),
      ...(mutableMatrix.map((arr) => arr.pop()).filter(Boolean) as number[]),
      ...(mutableMatrix.pop() || []).reverse(),
      ...(
        mutableMatrix.map((arr) => arr.shift()).filter(Boolean) as number[]
      ).reverse()
    );
  }

  return spirals;
};
