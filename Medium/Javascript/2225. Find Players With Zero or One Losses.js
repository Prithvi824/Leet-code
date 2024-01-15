/**You are given an integer array matches where matches[i] = [winner[i], loser[i]] 
 * indicates that the player winner[i] defeated player loser[i] in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome. */

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

var findWinners = function(matches) {
    var mapping = new Map();

    for (key of matches) {
        let p1 = key[0]
        let p2 = key[1]

        if (!mapping.has(p1)) {
            mapping.set(p1,0)
        }

        if (mapping.has(p2)) {
            let val = mapping.get(p2) + 1
            mapping.set(p2,val)
        }
        else {
            mapping.set(p2,1)
        }
    }
    let winners = []
    let losers = []

    mapping.forEach((value, key) => {
        if (value === 0) {
            winners.push(key)
        }
        else if (value === 1) {
            losers.push(key)
        }
    })
    winners.sort((a,b) => a - b)
    losers.sort((a,b) => a - b)

    return [winners, losers]
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))
