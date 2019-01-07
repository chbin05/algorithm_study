//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    const mLength = arr.length;
    if (mLength < 3) { return; }
    
    let sum;
    const sumArr = [];
    for (let i = 0; i < mLength - 2; i++){
        const nLength = arr[i].length;
        if (nLength < 3) { return; }
        for(let j = 0; j < nLength -2; j++) {
            sumArr.push(arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] +
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
        }
    }
    
    return Math.max(...sumArr);
}
