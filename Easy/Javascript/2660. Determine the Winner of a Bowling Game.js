/**You are given two 0-indexed integer arrays player1 and player2, that represent the number of pins that player 1 and player 2 hit in a bowling game, respectively.
 * The bowling game consists of n turns, and the number of pins in each turn is exactly 10.
 * Assume a player hit xi pins in the ith turn. The value of the ith turn for the player is:
 * 2xi if the player hit 10 pins in any of the previous two turns
 * Otherwise, It is xi
 * The score of the player is the sum of the values of their n turns.
 * Return
 * 1 if the score of player 1 is more than the score of player 2
 * 2 if the score of player 2 is more than the score of player 1, an
 * 0 in case of a draw.
 * */

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let score1 = 0, score2 = 0;
    let lastTwo1 = 0, lastTwo2 = 0;

    for (let i = 0; i < player1.length; i++) {
        if (lastTwo1 > 0) {
            score1 += player1[i] * 2;
            if (player1[i] === 10) lastTwo1 = 2;
            else lastTwo1--;
        } else if (player1[i] === 10) {
            lastTwo1 = 2;
            score1 += player1[i];
        } else {
            score1 += player1[i];
        }

        if (lastTwo2 > 0) {
            score2 += player2[i] * 2;
            if (player2[i] === 10) lastTwo2 = 2;
            else lastTwo2--;
        } else if (player2[i] === 10) {
            lastTwo2 = 2;
            score2 += player2[i];
        } else {
            score2 += player2[i];
        }
    }

    if (score1 > score2) return 1;
    else if (score2 > score1) return 2;
    return 0;
};
