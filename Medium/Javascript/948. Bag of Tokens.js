/**You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] donates the value of tokeni.
 * Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):
 * Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score
 * Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score
 * Return the maximum possible score you can achieve after playing any number of tokens. */


/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    let curr_score = 0;
    let max_score = 0;
    tokens.sort((a,b) => {
        return a - b
    })


    while (tokens.length > 0){
        if (tokens[0] <= power){
            power -= tokens[0];
            curr_score += 1;
            tokens.shift()
        }
        else if (curr_score > 0){
            power += tokens[tokens.length - 1];
            curr_score -= 1;
            tokens.pop()
        }
        else{
            break
        }

        max_score = Math.max(max_score, curr_score)
    }

    return max_score
};

