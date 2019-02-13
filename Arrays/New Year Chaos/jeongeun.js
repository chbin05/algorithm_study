// Complete the minimumBribes function below.
function minimumBribes(q) {
    const length = q.length;
    let k = length - 1;
    for (k; k >= 0; k--) {
        if (q[k] - k > 3) { 
            console.log("Too chaotic");
            return;
        }
    }

    let i = length - 1;
    let count = 0;

    for (i; i > 0; i--) { 
        let j = i - 1;
        let largestIndex = i;
        for (j; j >= i - 3; j--) { 
            if (q[largestIndex] < q[j]) {
                largestIndex = j;
            }
        }

        if (i - largestIndex === 2) {
            count += 2;
            swap(q, i - 1, largestIndex);
            swap(q, i, i - 1);
        } else if (i - largestIndex === 1) {
            count += 1;
            swap(q, i, largestIndex);
        }
    }

    console.log(count);
}

function swap(q, i, j) { 
    const temp = q[i];
    q[i] = q[j];
    q[j] = temp;
    return q;
}
