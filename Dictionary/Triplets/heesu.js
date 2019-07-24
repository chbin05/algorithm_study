// Complete the countTriplets function below.
function countTriplets(arr, r) {
    const countMap = {};
    /** r = 3
     * { 2: [0] }
     * { 2: [0], 6: [1] }
     * { 2: [0], 6: [1, 1] }
     * { 2: [0], 6: [1, 1], 18: [2] }
     */
    // console.time("coutMap");
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        countMap[key] = countMap[key] || [];
        const prevLength = countMap[key / r] ? countMap[key / r].length : 0;
        countMap[key].push(prevLength);
    }
    // console.timeEnd("coutMap");

    if (r === 1) {
        return Object.keys(countMap).reduce((pv, key) => {
            const { length } = countMap[key];
            // console.log({ pv, key, length });
            if (length < 3) {
                return pv;
            } else {
                return pv + (length * (length - 1) * (length - 2)) / 6;
            }
        }, 0);
    }

    // console.time("a2List");
    // let root = 1;
    // const a2List = Object.keys(countMap).filter(v => {
    //   for (; root * r * r <= v; root++) {
    //     if (root * r * r == v) {
    //       return true;
    //     }
    //   }
    //   return false;
    // });
    const a2List = Object.keys(countMap);
    // console.timeEnd("a2List");

    // console.log("key", Object.keys(countMap));
    // console.log("value", Object.values(countMap));

    let result = 0;
    for (let a2Cursor = 0; a2Cursor < a2List.length; a2Cursor++) {
        // console.time("for");
        const a2 = a2List[a2Cursor];
        const a1 = a2 / r;
        // console.log({ a2, a1 });
        const a1Counts = countMap[a2];
        const a0Counts = countMap[a1];
        if (!a1Counts || !a0Counts || !a1Counts.length || !a0Counts.length) {
            continue;
        }

        const a0acc = [0];
        for (let a0accIdx = 0; a0accIdx < a0Counts.length; a0accIdx++) {
            a0acc.push(a0acc[a0accIdx] + a0Counts[a0accIdx]);
        }
        // console.log({ a0acc, a1Counts, a0Counts, a2List });

        let localResult = 0;
        for (let a1Cursor = 0; a1Cursor < a1Counts.length; a1Cursor++) {
            const a1Count = a1Counts[a1Cursor];
            const a0accIdx = Math.min(a1Count, a0acc.length - 1);
            localResult += a0acc[a0accIdx];
            // console.log({ localResult, a2Cursor, a1Cursor, a0accIdx });
        }

        result += localResult;
        // console.timeEnd("for");
    }

    return result;
}
