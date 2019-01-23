function hourglassSum(arr, i, j) {
    return arr[i][j]   + arr[i][j+1] +   arr[i][j+2]
        +                arr[i+1][j+1]
        +  arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
}


// Complete the hourglassSum function below.
function hourglassMaxSum(arr) {
    let hourglassMaxSum = hourglassSum(arr, 0, 0);

    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = 0; j < arr.length - 2; j++) {
            const sum = hourglassSum(arr, i, j);
            hourglassMaxSum = hourglassMaxSum > sum? hourglassMaxSum : sum;
        }    
    }

    return hourglassMaxSum;
}
