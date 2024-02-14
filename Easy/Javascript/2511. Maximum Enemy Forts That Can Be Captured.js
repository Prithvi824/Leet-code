/**You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:
 * -1 represents there is no fort at the ith position.
 * 0 indicates there is an enemy fort at the ith position.
 * 1 indicates the fort at the ith the position is under your command.
 * Now you have decided to move your army from one of your forts at position i to an empty position j such that:
 * 0 <= i, j <= n - 1
 * The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.
 * While moving the army, all the enemy forts that come in the way are captured.
 * Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.
 */

/**
 * @param {number[]} forts
 * @return {number}
 */

var captureForts = function(forts) {
    let captured = [];
    let flag = false;
    let count = 0;

    // Forward movement
    for (let fort of forts) {
        if (fort === 1) {
            flag = true;
            count = 0;
        }
        else if (fort === -1) {
            flag = false;
            captured.push(count);
            count = 0
        }
        else if (flag === true && fort === 0) {
            count ++
        }
    }

    flag = false;
    count = 0;

    // Backward Movement
    for (let fort of forts.reverse()) {
        if (fort === 1) {
            flag = true;
            count = 0;
        }
        else if (fort === -1) {
            flag = false;
            captured.push(count);
            count = 0
        }
        else if (flag === true && fort === 0) {
            count ++
        }
    }

    if (captured.length === 0) return 0;
    return Math.max(...captured)
};

console.log(captureForts([0,0,1,0,1,1]))