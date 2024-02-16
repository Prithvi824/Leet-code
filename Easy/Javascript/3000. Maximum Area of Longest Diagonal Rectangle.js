/**You are given a 2D 0-indexed integer array dimensions.
 * For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.
 * Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.
 */

/**
 * @param {number[][]} dimensions
 * @return {number}
 */

var areaOfMaxDiagonal = function (dimensions) {
  let diagonal = 0;
  let area = 0;
  let curr_diagonal = 0;

  for (let dimension of dimensions) {
    curr_diagonal = Math.sqrt(dimension[0] ** 2 + dimension[1] ** 2);

    if (diagonal == curr_diagonal) {
        area = Math.max(area, dimension[0] *  dimension[1])
    }
    else if (diagonal < curr_diagonal) {
        area = dimension[0] *  dimension[1]
        diagonal = curr_diagonal
    }
  }

  return area
};

console.log(areaOfMaxDiagonal([[9,3],[8,6]]));
