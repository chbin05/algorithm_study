// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    const length = arr.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        const originIndex = arr[i] - 1;
    
        if (originIndex !== i) {
            swap(arr, i, originIndex);
            count++;
            i--;
        }
    }

    return count;
}

function swap(q, i, j) {
    const temp = q[i];
    q[i] = q[j];
    q[j] = temp;
}
