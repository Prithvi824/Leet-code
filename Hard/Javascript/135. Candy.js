/**There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children. */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candy = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i > -1; i--) {
    if (ratings[i] > ratings[i + 1] && candy[i] <= candy[i + 1]) {
      candy[i] = candy[i + 1] + 1;
    }
  }

  return candy.reduce((total, val) => total + val,0);
};

console.log(candy([1, 0, 2]));
