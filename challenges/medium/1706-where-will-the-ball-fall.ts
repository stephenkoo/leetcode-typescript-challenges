// https://leetcode.com/problems/where-will-the-ball-fall/

type BallGrid = (-1 | 1)[][];

const getNewBallPosition = (
  grid: BallGrid,
  row: number,
  ballColumn: number
): number => {
  if (!grid[row]) {
    return ballColumn;
  }

  if (grid[row][ballColumn] === 1 && grid[row][ballColumn + 1] === 1) {
    return getNewBallPosition(grid, row + 1, ballColumn + 1);
  }

  if (grid[row][ballColumn] === -1 && grid[row][ballColumn - 1] === -1) {
    return getNewBallPosition(grid, row + 1, ballColumn - 1);
  }

  return -1;
};

export const findBall = (grid: BallGrid): number[] =>
  grid[0].map((_, index) => getNewBallPosition(grid, 0, index));
