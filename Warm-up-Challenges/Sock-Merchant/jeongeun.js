// https://www.hackerrank.com/challenges/sock-merchant/problem

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pair = 0;
    const used = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (!used.includes(i) && !used.includes(j) && ar[i] === ar[j]) {
                pair++;
                used.push(i);
                used.push(j);
                break;
            }
        }
    }
    
    return pair;
}
