function hourglassSum(arr) {
    let i;
    let j;
    let maxSum = -63;

    for (i = 1; i < 5; i++) {
        for (j = 1; j < 5; j++) {
            let currentSum = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] +
                arr[i][j] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];

            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    
    return maxSum;
}
