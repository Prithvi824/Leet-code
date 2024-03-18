/**Given the array points, return the minimum number of arrows that must be shot to burst all balloons. */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let stack = [points[0]];
  let topOfStack = points[0];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= topOfStack[1]) {
      stack.pop();
      let element = [
        Math.max(points[i][0], topOfStack[0]),
        Math.min(points[i][1], topOfStack[1]),
      ];
      stack.push(element);
      topOfStack = element;
    } else {
      stack.push(points[i]);
      topOfStack = points[i];
    }
  }

  return stack.length;
};

console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
