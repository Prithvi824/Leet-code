/**You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it. */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);

    intervals.sort((a, b) => a[0] - b[0])

    let stack = [intervals[0]]

    for (let i = 0; i < intervals.length; i++){
        if (stack[stack.length - 1][1] >= intervals[i][0]){
            let element = stack.pop();
            stack.push([Math.min(element[0], intervals[i][0]), Math.max(element[1], intervals[i][1])])
        }
        else{
            stack.push(intervals[i])
        }
    }
    
    return stack
};

console.log(insert([[1,2],[3,4],[5,6],[7,8]],[3,10]))