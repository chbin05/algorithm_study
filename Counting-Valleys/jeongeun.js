// https://www.hackerrank.com/challenges/counting-valleys/problem

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let sea_level = 0;
    let valley_count = 0;
    for (let i = 0; i < n; i++) {
        const before_level = sea_level;
        if (s[i] === "U") {
            sea_level++;
        } else {
            sea_level--;
        }
        
        if (before_level < 0 && sea_level === 0) {
            valley_count++;
        }
    }

    return valley_count;
}
