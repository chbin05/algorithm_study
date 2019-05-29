function solve(givenStr) {
  function _solveSubstr(substrLen) {
    const substrCountMap = {};
    for (let i = 0; i < givenStr.length; i++) {
      const substr = givenStr.slice(i, i + substrLen).split("").sort().join("");
      // console.info({ substr, start: i, end: i + substrLen, len: givenStr.length });
      substrCountMap[substr] = (substrCountMap[substr] || 0) + 1;
    }

    // console.info({ substrLen, substrCountMap });

    return Object.values(substrCountMap).reduce((pv, count) => {
      if (count >= 2) {
        return pv + (count * (count - 1)) / 2;
      } else {
        return pv;
      }
    }, 0);
  }

  let count = 0;
  for (let substrLen = 1; substrLen < givenStr.length; substrLen++) {
    const substrCount = _solveSubstr(substrLen);
    // console.info({ substrCount });
    count += substrCount;
  }

  return count;
}
