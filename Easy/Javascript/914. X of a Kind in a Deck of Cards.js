/**You are given an integer array deck where deck[i] represents the number written on the ith card.
 * Partition the cards into one or more groups such that:
 * Each group has exactly x cards where x > 1, an
 * All the cards in one group have the same integer written on them
 * Return true if such partition is possible, or false otherwise. */

function hasGroupsSizeX(deck) {
  const countMap = new Map();
  for (const card of deck) {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  }
  let gcd = -1;
  for (const count of countMap.values()) {
    gcd = gcd === -1 ? count : gcdCD(count, gcd);
    if (gcd < 2) return false;
  }
  return true;
}

function gcdCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
