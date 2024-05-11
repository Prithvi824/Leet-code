/**There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.

We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules:

Every worker in the paid group must be paid at least their minimum wage expectation.
In the group, each worker's pay must be directly proportional to their quality. This means if a worker\'s quality is double that of another worker in the group, then they must be paid twice as much as the other worker.
Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within 10-5 of the actual answer will be accepted. */

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  let pairs = [];

  for (let i = 0; i < wage.length; i++) {
    pairs.push([wage[i] / quality[i], quality[i]]);
  }
  pairs.sort((a, b) => a[0] - b[0]);

  let maxHeap = [];
  let res = Number.MAX_VALUE;
  let totalQuality = 0;

  for (let pair of pairs) {
    [rate, quality] = pair;

    maxHeap.push(quality);
    totalQuality += quality;

    if (maxHeap.length > k) {
      maxHeap.sort((a, b) => a - b);
      totalQuality -= maxHeap.pop();
    }

    if (maxHeap.length === k) {
      res = Math.min(res, totalQuality * rate);
    }
  }

  return res;
};

console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2));
