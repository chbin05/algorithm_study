// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function minimumSwaps(arr) {
  const length = arr.length;
  let count = 0;

  for (let i = 0; i < length - 1; i++) {
    if (arr[i] !== i + 1) {
      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;

      count++;
      i--;
    }
  }

  return count;
}
