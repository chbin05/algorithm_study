function rotLeft(a, d) {
    const arrLength = a.length;
    let i;
    let rotatedArr = [];

    for (i = d; i < arrLength + d; i++) {
        let pushIndex = i;

        if (i >= arrLength) {
            pushIndex = i % arrLength;
        }

        rotatedArr.push(a[pushIndex]);
    }

    return rotatedArr;
}
