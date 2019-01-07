// https://www.hackerrank.com/challenges/repeated-string/problem

// Complete the repeatedString function below.
function repeatedString(s, n) {
    const stringLength = s.length;
    const aLength = (s.match(/a/g) || []).length;

    const repeatCount = parseInt(n / stringLength, 10);
    const remainder = n % stringLength;
    const remainderString = s.slice(0, remainder);

    return repeatCount * aLength + (remainderString.match(/a/g) || []).length;
}
