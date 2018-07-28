export const equalRandomDirections = {
  0: 'up',
  1: 'right',
  2: 'down',
  3: 'left'
};

export const move = {
  up: (x, y, maxX, maxY) => [x, Math.min(y + 2, maxY)],
  right: (x, y, maxX, maxY) => [Math.min(x + 2, maxX), y],
  down: (x, y) => [x, Math.max(y - 2, 0)],
  left: (x, y) => [Math.max(x - 2, 0), y]
};