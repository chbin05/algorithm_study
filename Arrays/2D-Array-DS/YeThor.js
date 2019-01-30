// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let i, j;
  let result = -63;

  for (i = 1; i < 5; i++) {
    for (j = 1; j < 5; j++) {
      let sum =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1];
      result = result < sum ? sum : result;
    }
  }

  return result;
}
