// Complete the sockMerchant function below.
// https://www.hackerrank.com/challenges/sock-merchant/problem

// Time Complexity : O(2n)

function sockMerchant(n, ar) {
  return countPair(groupingSocks(ar));
}

function groupingSocks(socks) {
  const socksGroup = {};

  for (const color of socks) {
    color in socksGroup ? socksGroup[color]++ : (socksGroup[color] = 1);
  }

  return socksGroup;
}

function countPair(socksGroup) {
  let socksPair = 0;

  for (const color in socksGroup) {
    socksPair += (socksGroup[color] / 2) >> 0;
  }

  return socksPair;
}
