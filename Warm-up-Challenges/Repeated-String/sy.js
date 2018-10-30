// Complete the repeatedString function below.
// @param s: a string to repeat
// @param n: the number of characters to consider
// @returns numberOfACharacter
function repeatedString(s, n) {
    /*
    # 주어진 조건
    - 문자열의 길이는 1 이상 100 이하
    - 'a'가 반복되는 수를 찾아야 하는 문자열의 길이는 1 이상 10의 12제곱 이하
    - 25%의 테스트케이스에서 n은 10의 6제곱 이하
    */
    
    let repeatedString = "";
    
    // s.length * x > n 인 최소 x
    const minimumRepeatCount = Math.ceil(n/s.length);
    
    const aNumberInUnit = _getANumberInString(s);
    const aNumberBeforeLastUnit = aNumberInUnit * (minimumRepeatCount - 1);
    
    const lastUnitLength = n - (s.length * (minimumRepeatCount - 1));
    const lastUnit = s.slice(0, lastUnitLength);
    const aNumberInLastUnit = _getANumberInString(lastUnit);
    
    return aNumberBeforeLastUnit + aNumberInLastUnit;
}

function _getANumberInString(targetString) {
    return Array.from(targetString).filter((char) => char === "a").length;
}
